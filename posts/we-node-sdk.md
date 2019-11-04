---
title: WealthEngine's first node.js SDK
category: software
description: I wrote WealthEngine's first node.js SDK
image: wokka.png
tags: Node.js, SDK, Open-source, API
---
[WealthEngine's API](http://dev.wealthengine.com) allows you to look up anyone's wealth in realtime. I will be using WealthEngine's data in a forthcoming Node.js SaaS product.

I decided to write [an SDK around WealthEngine's RESTful API](https://github.com/zackproser/WealthEngine-Node-SDK) that handles validation of parameters before making API calls.

You can [get the code here](https://github.com/zackproser/WealthEngine-Node-SDK).

As a developer, all you need to do is clone the SDK into your project and instantiate the WeAPI object with your ApiKey.

## Key Features

* * *

* Is fully asynchronous and supports all available endpoints
* Validates parameter objects before making API calls
* Returns errors, status code and response body

## Technical Details & Takeaways

* * *

WealthEngine's API represents a crucial piece of a forthcoming SaaS product I'm building in Node.js.

I wanted to modularize interactions with the API so that calling the API could be done seamlessly from anywhere within my application that needed WealthEngine functionality.

WealthEngine did not have a Node.js SDK available at the time, so I just wrote my own and decided to share it. You can find a link to it on [the official WealthEngine documentation page](https://dev.wealthengine.com/api), under the SDK's section.
