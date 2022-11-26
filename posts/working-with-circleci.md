---
title: How to work with CircleCI more effectively 
category: blog 
description: A collection of tips to make working with CircleCI more efficient and fun 
image: wakka.png
---

# Overview
At [Gruntwork](https://gruntwork.io), we use CircleCI as the continuous integration tool for the vast majority of our repositories. This article shares a couple of tips and tricks I've figured out along the way for more easily working with CircleCI locally, since the test cycles in the cloud can be pretty long, depending on what you're using CircleCI for.

# Recommended tools 
If you don't know, CircleCI maintains a [handy command line interface (CLI) tool](https://circleci.com/docs/2.0/local-cli/), which has a couple of handy features. If you use CircleCI regularly, installing this tool is worthwhile.

# Verifying your .circleci/config.yml locally
Prior to pushing your modified config and waiting for test errors to come back, which can take time depending on the repo and test setup, it's a good idea to smoke test the validity of your config locally first to catch any YAML syntax errors or CircleCI-specific errors: 

```bash 
circleci config validate .circleci/config.yml
```

You want to see the following output prior to pushing your changes: 

```bash
Config file at .circleci/config.yml is valid.
```

# Testing YAML anchors and aliases
Working with CircleCI means working with YAML and its various features, such as [anchors and aliases](https://circleci.com/blog/circleci-hacks-reuse-yaml-in-your-circleci-config-with-yaml/).  Sometimes, you'll want to verify the rendered YAML to ensure your usage of anchors and aliases, for example, are working as intended. 

You can do that with the following command, assuming that you are iterating on your local working copy of `.circleci/config.yml`: 

```bash
yaml merge-expand .circleci/config.yml -
``` 

In the above command, the final `-` means STDOUT, so you can get the final rendered output of your .circleci/config.yml, with all aliases fully expanded, in your terminal. If you wanted to instead write the rendered output to a different yaml file you could do so by instead providing an output filename: 

```bash
yaml merge-expand .circleci/config.yml my-expanded-output.yml
```

This is a great way to verify, for example, that your changes to an environment variable mapping are being rendered as you expect.
