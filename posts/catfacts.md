---
title: CatFacts in Node.js
category: software
description: PICK UP THE PHONE - ITS CATFACTS!
image: catfacts-screens/catfacts-blog.png
tags: Node.js, Fun, Prank, Twilio
---

[Visit the repo on GitHub](https://github.com/zackproser/super-catfacts-attack-service)

## What Developers Are Saying About This Project

* * *

It was important to me to get community buy-in and feedback on this project from early on. Having finally reached a close developer friend after giving him an exclusive demo of Super CatFacts Attack, he had this to say about this sms-interfacing, child-process-forking open source project:

> "F#@KING STOP WITH THE F#@KING CATFACTS DUDE. SERIOUSLY. THIS WAS NOT FUNNY AFTER THE FIRST 30 MINUTES. I HAD TO PAY $75 TO AT&T ON MY ONE DAY OFF TO CHANGE MY PHONE NUMBER. I GET THE CONCEPT OF THE PRANK AND WE'RE FRIENDS BUT YOU ARE SERIOUSLY PUSHING ME RIGHT NOW AND I DON"T APPRECIATE IT. DO NOT TEXT ME AGAIN."

## Hear the Super CatFacts Call Menu

[![Zack Proser Catfacts Menu]](https://www.youtube.com/watch?v=_Tx5LtcOIgg)

## Twilio + Node.js + Forked Child Processes = Pranking Bliss

### What is this?

Start and stop elaborate CatFacts pranks on your friends and family by simply texting this app with your victim's number.

This project was a great excuse to explore some concepts I had been wanting to play with for a while:

*   Using SMS commands from your phone to control a server, which preserves state
*   Locking down said server so that it only responds to YOU or your trusted friends
*   Managing child processes by tagging them with custom properties (like a rare white rhino) so we can look them up later by tag AND KILL THEM
*   Leveraging this forked process model in such a way that we can simulataneously attack multiple targets with a single server
*   Weaving together Twilio's sms and telephony functionality along with various Twiml verbs to create a rich user experience
*   Using an Express app to generate Twiml that responds to calls and texts and plays static sound files served by the server
*   Using a simple json file to configure our server
*   Passing environment variables to a node script

## What You'll Learn

This tutorial will also serve as a great introduction to using Twilio in concept, and specifically using Twilio's Node.js SDK. This is a good tutorial for anyone that's been wanting to use Twilio's service but just hasn't gotten around to it.

After following along with building Super CatFacts Attack, it will be clear to you how you could build actually useful services using the functionality that Twilio provides. Examples of great apps you could build implementing the concepts described in this tutorial include:

*   Services that do a lot of intensive crunching or network / service based lookups and return you condensed information on demand to your phone via sms
*   Apps that kick off tasks that are too complicated to manage on your phone while you're busy - with a simple sms command. The app would publish the result of its work as a public page and send you the result as a bitly link
*   Voting systems: this project demonstrates how to accept sms messages via Twilio and handle them in your server. You could easily build a voting system or custom sweepstakes event system following the same pattern
*   Mass communication systems: send a text containing special commands to your server, and have your server notify all your relevant friends, contacts, family members more efficiently than you could on your own
*   SMS based games - send texts as commands, game actions, in a wide distirbuted scavenger-hunt-style game

* * *

## Enough Productivity. I DEMAND CATFACTS!

### Super CatFacts Attack Workflow

You're out and about with some friends. You subtly send a text to a special contact you have saved in your phone - the body of your message is the phone number of the friend sitting next to you. The person you're texting isn't a person - it's a private server you own. Your server parses the phone number you sent in your sms - _and launches a CatFacts Attack against it._

Your friend receives a text message from a strange phone number: **Thank you for subscribing to CatFacts! You will now receive fun facts about cats! >o<**

WTF says your friend, after receiving the 10th fact in a row - this time with a message to call about their CatFacts account. **Maybe you should give them a call,** you suggest helpfully.

Your friend follows your advice and calls the CatFacts Call Center, where they get an IVR system that is similarly CatFacts-themed. They get a working menu and can either:

*   Request another CatFact to be immediately delivered to their phone
*   Pull up their account to determine why they were subscribed (it's because they love cats)
*   Request to have their account disabled (which will fail due to technical difficulties)

Hilarity ensues.

## Table of Contents

What you'll find in this post:

* * *

*   [Technical Overview](#technical-overview)
*   [An Important Twilio Precursor](#twilio-precursor)
*   [Handling Inbound SMS In Your Express App](#handling-inbound-sms)
*   [Handling Inbound Calls in Your Express App](#handling-inbound-calls)
*   [Generating Twiml with Node.js](#generating-twiml)
*   [Forking Child Processes (Starting Attacks)](#forking-child-processes)
*   [Keeping Track of Child Processes](#tracking-child-processes)
*   [Murdering Child Processes (Stopping Attacks)](#killing-child-processes)

### Technical Overview

Super CatFacts Attack is a Node.js server that exposes endpoints for receiving and processing commands that are POSTed by Twilio. In turn, SCFA returns valid Twiml to direct Twilio to send SMS messages, respond to telephone calls, and process phone keypad presses.

Blending all of this functionality together seamlessly, Super CatFacts Attack constitutes an epic, always-available pranking service you can quickly deploy to baffle and amuse your friends and family.

### An Important Twilio Precursor

**If you're not familiar with Twilio, read this paragraph first.** Twilio abstracts away telephony integration for developers, allowing devs to use familiar HTTP concepts to send, receive and process SMS messages and phone calls.

When a user sends an SMS message to a Twilio number, Twilio will look up the associated endpoint (that you have built and exposed on a publically available server and specified in your Twilio account dashboard) and make a POST request to that endpoint.

The Twilio POST request contains all the information you'll need as a developer to integrate telephony into your web app or service: the phone number of the sending user, the body of their message, where their number was registered, etc. All of this information is organized nicely by Twilio so that you can access it in your request object. Meanwhile, you can use client libraries (like the 'twilio' node module I'm leveraging in this project) to make valid HTTP requests to Twilio to have Twilio send SMS messages or make phone calls in response as appopriate for your app's workflow.

Twilio also has a concept of Twiml (Twilio Markup Language), whose usage is demonstrated in this project and tutorial. That's really all you need to know for the purposes of this app - but if you want to read more in depth, check out [the excellent official Twilio documentation and examples here.](https://www.twilio.com/docs/quickstart)

### Handling Inbound Twilio SMS in Your Express App

Handling Inbound Twilio-based SMS in your Express app is as simple as defining a route for Twilio to POST to when your associated Twilio number (the one you configure on your Twilio dashboard) receives an SMS message.

```javascript
    /**
     * Handle incoming sms commands
     *
     * Verifies that the requestor is authorized - then determines the request type (start / stop attacking)
     *
     * Finally starts or stops an attack as appropriate
     *
     * @param  {Request} Twilio POST request - generated when a user sends an sms to the associated Twilio number
     * @param  {Response} Express response
     *
     */
    app.post('/incoming-sms', function(req, res){
        //Get the requestor's phone number from the Twilio POST object
        var requestor = req.body.From;

        //If target is currently under attack and is not an admin - and they text this number - give them a particular text response
        if (isTargetBeingAttacked(requestor) && !isAuthorizedUser(requestor)){

            sendResponseSMS(requestor, 'Command not recognized. We will upgrade your CatFacts account to send you facts more frequently. Thanks for choosing CatFacts!');

        } else if (!isAuthorizedUser(requestor)){
            //Do nothing and do not respond if requestor is unauthorized
            return;

        } else {

            //Get body content of sms sent by requestor
            var payload = req.body.Body;

            //Check if this is a stop attack request - returns target number if it is
            var check = isStopRequest(payload);

            if(check){
                //isStopRequest returns the target phone number for valid stop requests
                var target = check;
                //Stop the attack on the supplied number
                handleAdminStopRequest(requestor, target);

            } else {
                //Start an attack on the supplied number
                handleAdminAttackRequest(requestor, payload);
            }

            //Give Twilio a successful response for logging purposes
            res.status(200).send('Finished processing POST request to /incoming-sms');
        }
    });
```

Twilio does a nice job of organizing all the data we need into an easy to use POST body - so we start by grabbing the phone number of the person who sent the SMS command (likely you!).

We can pass this number into some custom authentication functions that inspect config.json to determine whether or not the given user is authorized to issue commands to the server.

We also check whether or not the target is already being attacked or not - while we want to support multiple simultaneous attacks on a variety of targets, we don't want to run multiple simultaneous attacks on one single target. We're insane, not evil.

### Handling Inbound Twilio Calls in Your Express App

Handling inbound calls is pretty similar, only we can use this an opportunity to start working with Twiml. Twilio Markup Language is what you should return on endpoints that Twilio hits in response to your users making a phone call to a Twilio number.

When Twilio connects a phone call, it hits the endpoint you'be specified on your account dashboard and parses the Twiml that you return in order to create the call experience (saying something, playing a sound, generating a menu that the user can dial their way through, etc). We're going to do all of these now. Let's start by defining the route that Twilio will make a POST request to when someone calls our associated Twilio phone number:

```javascript
    /**
     * Handle a user phoning the Super CatFacts Attack Call Center
     *
     * @param  {Request} - POST request from Twilio - generated when a user calls the associated Twilio phone number
     * @param  {Response}
     * @return {Response} - Response containing valid Twiml as a string - which creates the CatFacts call center experience
     */
    app.post('/incoming-call', function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(generateCallResponseTwiml().toString());
    });
```

Our simple route accepts a POST request from Twilio, writes a Content-Type header and sends back a Twiml response, which will lead to the user hearing our menu interface spoken on the phone during their call. Let's now examine how that Twiml response is actually built:

```javascript
    /**
     * Generates valid Twiml that creates the Super CatFacts Attack Call Center menu experience
     *
     * @return {String} response - valid Twiml xml complete with say, play and gather commands
     */
    function generateCallResponseTwiml() {
        var response = new twilio.TwimlResponse();
        response.say("Thank you for calling Cat Facts!", {
            voice: 'man',
            language: 'en'
        })
        .play(config.server_root + '/sounds/shortMeow.wav')
        .say("Cat Facts is the number one provider of fun facts about cats! All of our representatives are currently assisting other cat lovers. Please remain on the feline! In the meantime, please listen carefully as our menu options have recently changed.", {
            voice: 'man',
            language: 'en'
        })
        .gather({
            action: config.server_root + '/catfacts-call-menu',
            finishOnKey: '*'
        }, function(){
            this.say("If you would like to receive a fun cat fact right now, press 1\. If you would like to learn about how you were subscribed to CAT FACTS, please press 2", {
                voice: 'man',
                language: 'en'
            })
            .say("If for some fur-brained reason you would like to unsubscribe from fantastic hourly cat facts, please press 3 3 3 3 4 6 7 8 9 3 1 2 6 in order right now", {
                voice: 'man',
                language: 'en'
            })
        });

        return response;
    }
```

The Node SDK (available in the npm module 'twilio') exposes helpful methods for easily building up Twiml. Once you create the initial Twiml response object, you build up its actual content by calling the various Twiml verb methods (say, play, gather, etc).

Notice that we can play static files served by Express, because we defined our static root when starting our server. We can easily get the path by using the server root as defined in our config.json plus the filename itself. The result is that the user gets perfectly timed cat noises - for a truly authentic experience.

The trickiest verb is **gather**. Similar in concept to the action property of an HTML form, we need to specify the action URL - where Twilio can go to get the response information following the user actually dialing a key for a particular menu item - in order for our IVR menu to work properly. Notice that I've specified a wildcard for the optional finishOnKey parameter. This will cause Twilio to stop listening for inputs after it gets a single keypress, which will make more sense when we next examine the function that actually handles our user's inputs:

```javascript
    /**
     * Handle user inputs during the CatFacts Call Center Menu
     *
     * @param  {Request} req       Express Request
     * @param  {Response} res      Express Response
     *
     * @return {[type]}            Response containing valid Twiml for Twilio to parse
     */
    app.post('/catfacts-call-menu', function(req, res){
        //Get the number the user pressed from the Twilio request object
        var pressed = req.body.Digits;
        var calling_user = req.body.From;

        //Set up headers
        res.writeHead(200, { 'Content-Type': 'text/xml' });

        //Handle whichever number the user pressed
        switch(pressed){
            case '1':
                //User requested a CatFact - pull a random one out of catfacts.json
                var fact = require('./data/catfacts.json').random();
                //Send a random CatFact to the caller
                sendResponseSMS(calling_user, fact);
                //Create a twiml response to build up
                var twiml = new twilio.TwimlResponse();
                twiml.say('One brand spanking new Cat Fact coming right up. We\'re working hard to deliver your fact. Thanks for using CatFacts and please call again!', {
                    voice: 'man',
                    language: 'en'
                })
                //Play a sound that Express is serving as a static file
                .play(config.server_root + '/sounds/angryMeow.wav');
                //Send the response back for Twilio to parse on the fly - and play for the caller
                res.end(twiml.toString());
                break;
            case '2':
                //User wants to know why they were subscribed to CatFacts - Why, because they love cats, of course!
                var twiml = new twilio.TwimlResponse();
                twiml.say('Please wait one moment while I pull up your account', {
                    voice: 'man',
                    language: 'en'
                })
                .play(config.server_root + '/sounds/longMeow.wav')
                .say('Thanks for your patience. You were subscribed to CatFacts because you love fun facts about cats. As a thank you for calling in today, we will increase the frequency of your catfacts account at no extra charge', {
                    voice: 'man',
                    language: 'en'
                })
                .play(config.server_root + '/sounds/angryMeow.wav')
                .say('Have a furry and fantastic day', {
                    voice: 'man',
                    language: 'en'
                });
                //Send account explanation response back to Twilio to parse on the fly - and play for the caller
                res.end(twiml.toString());
                break;
            case '3':
                //User wants to unsubscribe - but we don't like quitters
                var twiml = new twilio.TwimlResponse();
                twiml.say('We understand you would like to cancel your CatFacts account. Unfortunately, we are currently experiencing technical difficulties and cannot process your request at this time. To apologize for the inconvenience, we have upgraded you to a Super CatFacts Account for no extra charge', {
                    voice: 'man',
                    language: 'en'
                })
                .play(config.server_root + '/sounds/angryMeow.wav');
                res.end(twiml.toString());
                break;
            default:
                var twiml = new twilio.TwimlResponse();
                twiml.say('Sorry, we were unable to process your request at this time. Don\'t worry, we will send you complimentary CatFacts as an apology for the inconvenience.', {
                    voice: 'man',
                    language: 'en'
                })
                .play(config.server_root + '/sounds/angryMeow.wav');
                res.end(twiml.toString());
                break;
        }

    });
```

You can get as fancy as you want to when parsing your user's touchtone input within a Twilio-based call menu like this. For my purposes, a simple switch break interface sufficed. By weaving together sounds and speech, you can create rich telephony experiences for your users.

I wanted to support admins sending in multiple attack commands and having the service intelligently manage them all - so that a single admin could simultaneously prank an entire dinner table's worth of suckers.

I achieve this by having a simple script, attack.js, that actually knows how to run an attack. It gets forked by the parent process everytime a valid attack request is received by the server:

```javascript
    /**
     * Processes an authorized admin's attack request and launches the attack
     *
     * Handles tracking the attack child process at the app-level so it can be referenced later / stopped
     *
     * @param  {String} requesting_admin - The phone number of the requesting admin
     * @param  {String} target - The phone number of the target to be attacked
     *
     * @return void
     */
    handleAdminAttackRequest = function(requesting_admin, target) {
        //Ensure target is not already being attacked (we have some degree of decency - no?)
        if (!isTargetBeingAttacked(target)) {
            //Fork a new attack process - passing the requesting admin's phone number and target phone number as string arguments
            var CatfactsAttack = child_process.fork('./attack.js', [requesting_admin, target]);
            //Handle messages sent back from child processes
            CatfactsAttack.on('message', function(m){
                switch(m.status){
                    case 'invalid_status':
                        CatfactsAttack.kill();
                        //Send invalid target sms back to admin
                        sendResponseSMS(m.requesting_admin, 'Oops! ' + target + ' doesn\'t appear to be a valid number. Attack NOT Launched!');
                        break;
                    case 'starting_attack':
                        //Tag the attack child_process with its target number
                        CatfactsAttack.target_number = m.child_target;
                        //Add child_process to app-level array of current attacks
                        beginTrackingAttack(CatfactsAttack);
                        //Send sms confirming attack back to admin
                        sendResponseSMS(m.requesting_admin, 'Attack Vector Confirmed: CatFacts Bombardment Underway! - Text: "downboy ' + m.child_target + '" to stop attack.');
                        break;
                    case 'exhausted':
                        //Remove number from app-level array of numbers being attacked
                        stopTrackingAttack(m.child_target);
                        //Send exhaustion notification sms back to admin
                        sendResponseSMS(m.requesting_admin, 'CatFacts Attack on ' + target + ' ran out of facts! Attack Complete.');
                        CatfactsAttack.kill();
                        break;
                }
            });
        }
    }
```

Notice that we can pass an array of string arguments to the child process when we fork it. The child process can then access these variables and use them privately. The parent process and child process can also message each other back and forth as shown here. This allows us to write a service where the parent properly supervises and manages child processes based upon their self-reported states.

Forking our individual attacks in this way allows us to ensure that every victim gets their own private "attack context", starting with the initial introductory message and always proceeding one after another in the correct order, regardless of how many other people are being attacked by the same server at any given time.

Another key line here happens in the starting_attack case. Notice that I'm "tagging" the child process with the target_number it is actually running its attack on. I'm using this tag as a unique identifier, so that I can look up the child processes later on by their target number when an admin says it's time to stop attacking a given phone.

Now, let's take a look at a rudimentary manner of keeping tabs on these child processes so we can look them up by number later and kill them.

### Tracking Child Processes

Here's a simple way to keep tabs on the various simulatenous attacks that might be running at any given time. Each time we kick off a valid child process CatFacts attack, we store it in an app-level array:

```javascript
    /**
     * Adds given child_process to the app-level array of running attacks so it can be terminated later
     *
     * @param  {Object} child_process - A node child process representing a currently running attack
     *
     * @return void
     */
    beginTrackingAttack = function(child_process) {
        var currentAttacks = app.get('activeAttacks');
        currentAttacks.push(child_process);
        app.set('activeAttacks', currentAttacks);
    }
```
This makes it simple to look up processes later by their target_number property:
```javascript
    /**
     * Helper method that determines whether or not a supplied number is currently under attack
     *
     * @param  {String}  target - the phone number to check for current attacks
     * @return {Boolean} targetIsBeingAttacked - Whether or not the given number is under attack
     */
    isTargetBeingAttacked = function(target) {
        if (target.charAt(0) == '+' && target.charAt(1) == '1'){
            target = target.replace('+1', '');
        }
        var targetIsBeingAttacked = false;
        var currentAttacks = app.get('activeAttacks');
        if (!currentAttacks.length) return;
        currentAttacks.forEach(function(currentAttack){
            if (currentAttack.target_number == target){
                targetIsBeingAttacked = true;
            }
        });
        return targetIsBeingAttacked;
    }
```

When an admin sends a stop command with the number of the victim whose phone should no longer be bombarded, we need to look up the currently running attack using that number, and kill it:

```javascript
    /**
     * Finds a currently running attack by phone number and terminates it in response to an admin stop attack request
     *
     * @param  {String} requesting_admin - The phone number of the admin requesting a stop
     * @param  {String} target_number   - The phone number that should not be attacked anymore
     * @return void
     */
    handleAdminStopRequest = function(requesting_admin, target_number) {
        var currentAttacks = app.get('activeAttacks');
        var foundAttack = false;
        if (!currentAttacks.length) return;
        currentAttacks.forEach(function(currentAttack){
            if (currentAttack.target_number == target_number){
                foundAttack = currentAttack;
            }
        });
        if (foundAttack){
            foundAttack.kill();
            sendResponseSMS(requesting_admin, 'Successfully terminated CatFacts Attack on ' + target_number);
        }
    }
```