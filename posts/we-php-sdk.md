---
title: Wealthengine PHP SDK
category: software
description: I wrote Wealthengine's first PHP SDK
image: wikka.png
tags: PHP, SDK, Open-source, API
---
[WealthEngine's API](http://dev.wealthengine.com) allows you to look up anyone's wealth in realtime.

[Get the code](https://github.com/zackproser/WealthEngine-PHP-SDK)

I wrote the first PHP SDK against WealthEngine's API that handles validation of parameters before making API calls.

As a developer, all you need to do is clone the SDK into your project and instantiate the WeAPI object with your ApiKey.

## Key Features

* * *

* Allows you to specify your desired API environment when instantiating the class
* Validates parameter objects before making API calls
* Returns errors, status code and response body

## Technical Details & Takeaways

* * *

WealthEngine did not have a PHP SDK available at the time, so I just wrote my own and decided to share it.

You can find a link to it on [the official WealthEngine documentation page](http://dev.wealthengine.com/api), under the SDKs section.