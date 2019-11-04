---
title: Writing a Dockerized Node.js & Express service
category: blog
image: wokka.png
---
[View and clone the project here](https://github.com/zackproser/docker-express-nodeunit)

## Project overview

* * *

This project demonstrates how to set up a Dockerized web service in node.js, using nodeunit tests for coverage, which prevents bad builds from being shipped.

The project includes a bash script that wraps nodeunit coverage for the web service. If any changes are introduced which cause any one of the nodeunit tests to fail, the Docker build will terminate.

This makes it easier to prevent bad builds from being shipped to production.

## Try it out
```bash
git clone https://github.com/zackproser/docker-express-nodeunit.git
cd docker-express-nodeunit
docker build .
```
## Loading an Express web service in nodeunit

Here’s a trick for running your express based web service in nodeunit tests. You can wrap your app.listen call in a check that determines whether or not the file is being loaded by a calling script (as it will be in the case of nodeunit loading it):
```javascript
if (!module.parent) {
    app.listen(app.get('port'), () => {
        console.log(`Example project listening on port ${app.get('port')}`)
    })
}
```
## Running your Express web service locally during testing

With the above changes in place, we can leverage node’s built-in http module to load our app.js (and its included Express routes) and then run it locally:
```javascript
const
  nodeunit = require('nodeunit')
  , app = require('../app')
  , request = require('request')
  , httpServer = require('http').createServer(app)
  , testPort = 3333
  , testUriRoot = `http://localhost:${testPort}`

/*
  Run before every individual test

  Loads app.js and its express routes
  in order to create an http server
  and listen on the test port

  @param {Function} setupCallback Function to run when processing is complete
  @return {void}
 */
exports.setUp = (setupCallback) => {
  httpServer.listen(testPort, setupCallback)
}
```
By leveraging nodeunit’s setUp functionality, we can ensure that our local test server is available before every individual test is executed.

This allows us to write nodeunit tests that make requests to our actual web service, the same service that will run in production, which means we can test how functionality like validation will behave:
```javascript
//Tests that POSTing to /example without a url param returns an error
exports.testBadPostRequestIsRejected = (test) => {
  let badOptions = {}
  request({
    uri: `${testUriRoot}/example`,
    method: 'POST',
    json: true
  }, (err, resp, body) => {
    test.equals(400, resp.statusCode)
    test.equals(body.msg, 'You must supply a URL')
    test.done()
  })
}
```
This test will make a request to our web service, passing a bad body that’s missing a required parameter.

Just as we defined a setUp function, we define a tearDown function that will run after every individual test. This ensures that our local test service will be closed down cleanly following testing:
```javascript
/**
 * Runs after every individual test
 *
 * Shuts down the local HTTP server
 *
 * @param  {Function} tearDownCallback Function to run when processing is complete
 * @return {void}
 */
exports.tearDown = (tearDownCallback) => {
  httpServer.close(tearDownCallback)
}
```
## Hooking nodeunit test run status into Docker

Now that we have a test setup that covers our web service, how do we ensure that only good builds are created?

Docker will exit in the middle of a build if any of the commands (or scripts that those commands reference) exit with a non-zero status, signifying an error.

To this end, we next create a script, [runTests.sh](http://runTests.sh), which wraps our nodeunit test suite:
```bash
#!/usr/bin/env bash

###############################################
# Runs nodeunit tests - and breaks bad builds
#
# Captures exit code of nodeunit tests and exits
# with it.
#
# Docker will see a non-zero exit status as a failure,
# preventing the Docker build from completing
#

echo "Running nodeunit tests..."

nodeunit tests/example-tests.js > testsOutput

# Inspect the exit code of the last command
if [ $? -eq 0 ]; then
  echo "All tests passed!"
  # This will exit cleanly
  exit 0
else
  echo "ERROR: Not all tests passed! This build will terminate until code is fixed!"
  # This will break the Docker build
  exit 1
fi

# Read the output of the tests to STDOUT
# so they'll be visible during a Docker build
cat testsOutput && rm testsOutput
```

Our script inspects the outcome our nodeunit test run using $?, which in bash references the exit code of the last executed command.

With this in place, we can add this script to our Dockerfile. During a build, we’ll add this script to the container, chmod it so that it’s executable, and run it.

If it exits with a 0 status, meaning that every one of our nodeunit tests passed, Docker will continue building our image. If even a single nodeunit test fails, Docker will see our script exiting with an error, and stop building the bad container until someone can debug and fix the underlying issue in the web service codebase.

Here’s what our Dockerfile looks like:
```bash
FROM node:boron

LABEL maintainer="zackproser@gmail.com"

# Set the workdir, the directory in the resulting container
# to which all following paths in this Dockerfile will be relative
WORKDIR /app/

COPY public public/

COPY routes routes/

COPY views views/

COPY tests tests/

ADD app.js package.json runTests.sh /app/

# Prevents excessive npm logging to STDOUT (only errors will be echoed)
ENV NPM_CONFIG_LOGLEVEL error

# Install all node modules; also install nodeunit globally so it can be called in our runTests.sh bash script
RUN npm i && npm i -g nodeunit

# Modify script so it can be run
RUN chmod +x runTests.sh

# Run the tests script, which in turn calls nodeunit
# And exits with the exit status of nodeunit
# Docker will error out if it sees a non-zero exit status from any command
# Therefore, the failure of a single nodeunit test (caused by bad code or project changes)
# will result in the Docker build breaking (so you can't ship it)
RUN /app/runTests.sh

ENTRYPOINT ["node", "app.js"]
```