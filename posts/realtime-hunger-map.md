---
title: Realtime Hunger Map
category: software
description: An app that aggregates and plots tweets about hunger and mealtime from around the world on a map
image: twitter-map-blog.png
tags: Mapping, Twitter, Geography, Realtime
---
[![Twitter Realtime Map](/twitter-map-screens/map-splash.png)](https://realtimehungermap.com)

## Intro

* * *

I built this realtime Twitter visualization using the Twitter streaming API, Node.js, the Google Maps API, and [Socket.IO](https://socket.io), and then [I open-sourced it](https://github.com/zackproser/tweet-map).

I used this app to deploy [a demo instance on realtimehungermap.com](http://realtimehungermap.com). It aggregates tweets from around the world by filtering the Twitter streaming API for tweets on the topic of eating, hunger and meals. By using Socket.IO, I am able to make a single connection to the Twitter streaming API with my app - that is then broadcasted out to every connected client.

Hunger is just one potential topic. It's possible to use this app to display Tweets of any subject in this app. Simply edit a single configuration file to customize the Twitter topics, the look and feel of the app, its static content and more.

## Screenshots

* * *

**_Aggregates Tweets From All Over The World_**

![Twitter Node.js Socket IO Map](/twitter-map-screens/twitter-hunger-map-homepage.png)

**_See Tweets Aggregated by Location_**

![Twitter Map Supports Every Country](/twitter-map-screens/twitter-hunger-map-many-tweets.png)

**_Get Notified of Your Target Subject in Real-time_**

![Twitter Google Maps Zoom In](/twitter-map-screens/twitter-hunger-map-tweet.png)

**_View Time Based Trends Easily_**

![Twitter Map With Location Based Aggregation](/twitter-map-screens/twitter-hunger-map-worldwide.png)

## Key Features

* * *

*   Node.js, Socket.IO, Google Maps API
*   Aggregates Tweets by Location
*   Zoom Out to See Time-based Trend Information
*   Applicable to Any Subject on Twitter

## Technical Details & Takeaways

* * *

I spent a lot of time becoming very familiar with Twitter's API while working at BrightContext. I realized it would be relatively easy to create a compelling display by querying the Twitter Streaming API for tweets on a given subject and aggregating them by location.

After creating a stream of tweets in Node.js, I inspect them for geodata. Most tweets don't have accurate geolocation data. Therefore, I pick off the placename from the tweet hand them off to Google's Geolocation API for geocoordinates that can then be drawn on the map.

The really exciting thing about this app is that by changing a few lines of code the map could report on any subject being discussed on Twitter at any given time. I chose hunger because it's active enough to make for an interesting visual display.