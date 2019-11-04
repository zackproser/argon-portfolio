---
title: Goodneighbor Twitter AI Platform
category: software
description: I built a generalized Twitter AI platform capable of running any account better than a human can
image: goodneighbor-screens/goodneighbor-blog.png
tags: Twitter, AI, Node.js
---
![ Goodneighbor Twitter AI Platform ](/goodneighbor-screens/fayshongurl.png)

## Project source

I have open-sourced this project [here.](https://github.com/zackproser/goodneighbor) You are free to use it as you see fit.

## Overview

I created a platform that allows you to launch and manage 100% autonomous Twitter accounts on any subject, and easily modify and configure them on the fly. After two years of working on this project on and off, I've decided to open-source it, write this retrospective, and move on to bigger and better. Read on if you'd like to hear about some of the lessons learned in creating an ambitious AI project.

## Project genesis

The genesis of this project occurred when I was working for [BrightContext](https://techcrunch.com/2014/04/16/brightcontext-acquired-by-wealthengine-to-bring-big-data-to-marketers/), taking a train to New York with [Steven Fusco](https://twitter.com/sfusco) and [Hunter Powers](https://twitter.com/TheHunter) for a business trip. In what came to be a semi-annual train-based hackathon, we created the Twitter Pricecheck Bot, a node service that would listen for tweets containing a #pricecheck hashtag and then pass the items / strings in the tweet to the AWS product search API to return a price check.

So, if you tweeted:

```@pricecheckbot #pricecheck men's leather wallet```

the bot would respond with a couple of leather wallets for sale on Amazon.com, along with links to the items. Why did we build this? Because we were able to use the AWS product API to form affiliate links to these products.

The idea was that we'd provide a handy and easy to use service via Twitter, for anyone trying to do impromptu comparison shopping on the go, and in return we'd get a small piece of the action.

Amazon's affiliate program has an interesting characteristic in that it is tiered: the more referrals you make, the higher the flat percentage rate cut of each sale that you earn. Hence, once you start delivering significant regular conversions, your overall stake in the profits increases.

Our hackathon pricecheck bot lived a brief and tormented life, cut short by blanket API abuse bans and account suspensions, as we neglected to follow Twitter policies regarding replying to users programmatically in our haste to deliver our service to the public, and before our train ride ended.

Here's a screenshot of that bot, not really working well (though it did when we originally launched it):

![Goodneighbor Pricecheck Bot](/goodneighbor-screens/price-check-bot.png)

Following our short-lived experiment, I continued working at [BrightContext](https://techcrunch.com/2014/04/16/brightcontext-acquired-by-wealthengine-to-bring-big-data-to-marketers/), where I had occasion to become very familiar with Twitter's REST and streaming API's, since our stream-processing engine had a native Twitter connector, and because Twitter at the time was one of the few publicly available high-speed data streams.

## Designing a more complete solution

It occurred to me that Twitter was a highly constrained environment. The number of discrete actions a human Twitter user could take while using the platform was low: you're either tweeting, retweeting, following, or unfollowing.

Your content might be ruining the world and making everyone around you dumber in a shocking myriad of ways, but the point is that you can't actually do many different things on Twitter.

The true keys to creating a sufficiently believeable Twitter feed that would pass a 15 second scan would then be:

*   A coherent set of topics of interest
*   Lack of repetitive behavior (no repeated tweets)
*   Seeming randomness (don't tweet exactly every 30 minutes)
*   Sufficient discretion not to engage with spam (no retweeting random crap)

I began to explore my coalescing interests in AI, self-healing software and the potential reach that a successful Twitter presence could bring to bear on Amazon's unique tiered affiliate program by creating a Twitter bot in node.js that could play the long game.

## Requirements for totally autonomous Twitter agents

A successful Twitter avatar would need to appear intelligent. It would need to provide value, so that people would follow it. It would need to avoid the most obnoxious and obvious bot behaviors, since those quickly cause most Twitter bots to stand out and get unfollowed. It would need to be resilient to network congestion, unexpected fatal errors and unforeseen issues.

**This meant that the software would need to know when an avatar that should be running was not, and how to restart it correctly on its own.**

It would need to be able to say interesting things, on its own, and not repeat itself. It would need to avoid the unique cesspool of human spite, contrarianism, partisanship and hatespeech that Twitter has become the most succinct expression of, if it were to truly attain to some kind of digital longevity. This meant it would need the ability to spot-check content it encountered in the wild and pass judgment upon it.

This meant it would need to be able to read quality content on its own, so that it could share it later.

It would need to be able to make passing comments on this content when sharing it, and it would need to keep track of what it had already said, for the entirety of its life, because human Twitter users rarely repeat themselves, and because the Twitter API actually rejects duplicate status updates - which almost always indicate either spammy behavior or a programming error.

It would need to avoid detection by the anti-bot measures Twitter was punching up in tech outlet stories, likely in response to direct pressure from investors and a marketplace that was realizing a significant portion of Twitter accounts might be programs that would never be interested in the display ads Twitter was trying to build its path to viability upon. This meant it would have to behave with a certain degree of randomness and unpredictability.

## The vision

1.  Create a platform that manages Twitter accounts concerned with any topic, and successfully builds their follower count over time, with zero human intervention
2.  Create several hundred Twitter accounts
3.  Configure AWS affiliate codes for each Avatar
4.  As Avatars tastefully work in tweets about Amazon products their respective followers would find interesting, earn passive income from Amazon's affiliate program
5.  Leverage Amazon's affiliate program's tiered earnings capabilities to increase revenue

![UrbanPlanner34 Twitter Bot](/goodneighbor-screens/urbanplanner34-4.png)

## The outcome

I accomplished item #1. And in the process I learned a great deal and got more experience, which informed my day to day work.

There were no direct riches flowing from this project, though I believe the potential for the original play is still there.

The items Avatars shared with their audiences did prove out the concept of affiliate marketing via Twitter.

This is an early diagram I created once I had all of the major components in place and had the system running several avatars simultaneously who were working properly and adding followers:

![Goodneighbor Architecture](/goodneighbor-screens/Goodneighbor-schematic.png)

## The Manager App

An interface for administrators, behind configurable HTTP Basic Auth. All of the power of the Goodneighbor platform is exposed through this UI, and is designed for non-technical users.

![Goodneighbor Overview](/goodneighbor-screens/goodneighbor-overview.png)

Each avatar on the system is shown in this index view. If you set an Avatar as enabled, the system will auto-recover the Avatar should it encounter any fatal errors.

For each avatar, you can click into its config panel to modify every aspect of its behavior.

![Goodneigbor avatar configuration](/goodneighbor-screens/fashiongerry-config-1.png)

Once you're looking at a specific Avatar's configuration panel, every behavior the Avatar has is exposed for easy modification:

![Goodneighbor avatar config 2](/goodneighbor-screens/fashiongerry-config.png)

## The implementation

Two years of on and off development and constant learning; Node. Express. Modules. ES6. Mongo. Linux. Process management. Oauth. Three top to bottom rewrites. Error messages.

Successes, small and medium. The software running. The software running for months on end without being restarted. The avatars gaining followers. The avatars saying "Thank You" correctly. The manager app working. The manager app being served responsively and behind Basic Auth so I could pull it up on my phone and demo it to friends.

An account being added to the system for a friend. The account gaining followers. One of my avatars reaching 12,000 followers. The platform eventually becoming so resilient and stable that I forgot it was running for months.

Remembering it was and checking the avatars to see they were still purring along, slowly increasing their follower counts while continuing to build high quality Twitter feeds on their assigned topics.

But more than anything, there were errors and stack traces. Debugging OAuth, and the libraries that implemented it. Debugging interactions with Twitter's streaming API. Debugging interactions with Twitter's REST API.

Debugging Mongo and connectivity in node. Debugging the single nastiest self-inflicted bug I have ever seen in my time management library where Javascript happily did math on a string and an integer with no complaints, leading to slightly off calculations that drove me insane for weeks.

## The Avatars

I've included a sampling of Avatar data from production for several long-running Avatars. These are not all of the Avatars I have running, but the ones that I'm sharing:

| Name | Interests | Followers |
|------|-----------|-----------|
| [fayshongurl](https://twitter.com/fayshongurl)   |    Girls' fashion       |   12,000    |
| [Urbanplanner34](https://twitter.com/urbanplanner34)   |    Urban planning       |   690      |
| [Spayce Nutt](https://twitter.com/spaycenutt)     |    Aeronautics, space       |    62       |
| [Fashiongerry](https://twitter.com/fashiongerry)     |   Men's fashion        |      519     |
| [Clouddev2455](https://twitter.com/clouddev2455)     |   Software development        |    59       |
| [Gadgetfreak9](https://twitter.com/gadgetfreak9)     |   Consumer technology        |     124      |
| [Zorby3](https://twitter.com/Zorby3)     |     Test account       |    184       |
| [Motorheadd5](https://twitter.com/motorheadd5)    |   Cars        |    49       |
| [Musicmasta2](https://twitter.com/Musicmasta2)     |  Music         |  133         |
| [McgavinFooty](https://twitter.com/McgavinFooty) | Sports | 62 |

There's a great deal of variance in the speed at which different Avatars add new followers. Some factors I've noticed over time include:

*   The level of engagement of the accounts listening on the given hashtags
*   The combination of hashtags the Avatar is publishing content on
*   The degree to which content the Avatar is sharing is retweetable. Does it contain images?

## Architectural takeaways

What I have open-sourced is the third top to bottom rewrite of the system. If I were going to rewrite it once more I would do it completely differently.

The main reason I have the manager app forking off new processes for each Avatar, which is quite expensive and not very scalable, is that originally each Avatar needed to maintain its own streaming API connection with Twitter, in order to receive updates that were relevant to its account.

But ultimately I realized this work was totally unnecessary: you can just as easily get high quality tweets (as candidates for retweets or follows) from Twitter's search API. Once I made this cut over, there was no longer any advantage to maintaining separate processes for each Avatar - it was in fact extreme overhead.

The fourth rewrite would be a much simpler scheduling interface. It would still keep Avatar specific data in mongo, but would only need to run a single process that would orchestrate API calls on behalf of Avatars. It would be much more scalable and not require any of the error prone process-management behavior I hacked into the current iteration.