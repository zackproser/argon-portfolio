---
title: Twitter Username Extractor
category: software
description: Rips lists of usernames from Twitter lists and exports them for you
image: extractor-blog.png
tags: Twitter, Data Extraction, Node.js, Passport js, Open-source
---
![Twitter Username Extractor](/extractor-screens/extractor-homepage.png)

* * *



This is one of my favorite apps. I went over the top with bloody sound effects and created a custom gif animation in Photoshop of a Twitter bird getting liquidated by the insatiable gears of progress. In the meantime, it solves a real problem that used to plague me often when working at a big data processing startup.

How do I get ALL of the Twitter handles of EVERY person in congress? How do I extract a list of NYTimes Journalists and their Twitter handles?

Not too long ago Twitter introduced official lists, which allowed you to go to one place on Twitter to see accounts grouped together logically - but for obvious reasons there is no export functionality or way to get a handle on this data.

What's more is that traditional screen scraping is complicated by Twitter's endless scrolling ajax-powered UI. I built the Username Extractor to simply destroy all of these obstacles and get my users the data they need - all while treating them to excessive blood splatter, chainsaw noises, and bird-screeching courtesy of HTML5 audio. Hundreds of monthly users seems to enjoy it well enough.

## Screenshots

* * *

**_The Extractor leverages oAuth_**

![Twitter Username Extractor Uses oAuth](/extractor-screens/extractor-oauth.png)

**_Delightful animations_**

![Twitter Username Extractor Processing Animation](/extractor-screens/extractor-processing.png)

**_Blood splatter shows you the app is working hard_**

![Twitter Username Extractor Blood Effects](/extractor-screens/extractor-blood.png)

**_Get Back a Comma-delimited String of Usernames_**

![Twitter Username Extractor Extracted Data Shown](/extractor-screens/extracted-names.png)

## Key Features

* * *

* Uses oAuth to get access to user's bucket of API requests (for ultimately more scraping fun)
* HTML5 audio & jQuery blood-splatter effects while you wait
* App returns your list of names in a comma-delimited string
* App handles both official twitter lists and random HTML webpages

## Technical Details & Takeaways

* * *

I feel pretty happy about the way this app turned out. I decided I wanted it to handle both Official Twitter Lists as well as random Websites people might want to extract Twitter Usernames from. This means that when someone pastes their desired URL into the form, I must first detect if it's an official Twitter list or a third-party website. I do this with some simple regular expressions - but then things get a little more interesting.

If the user passes me the URL to an official Twitter list - I can detect that easily enough, but how do I then determine the list ID so I can start requesting the right data from the Twitter REST API? Some careful inspection of Twitter's markup revealed that the list ID is embedded in every official list page. The app makes a request to the Twitter URL and picks through the HTML to find the list ID. With this in hand, it is able to make calls to the REST API to get back user data.

There's one final wrinkle though. These lists can be really long and contain many users. The Twitter User, when represented in a JSON object has enough fields to make it fairly large. Sending a list of 700 giant user objects would be impractical.

Instead, Twitter makes use of an interesting workaround called pagination. In each response, you get a "cursor" that indicates the "page" of the response that you are on with your current request. You have to manage these cursors properly to keep building up response data while requesting the next set.

Sometimes users might only be interested in getting the usernames out of a given website. Someone may have blogged about 100 hilarious Twitter accounts to follow. If the app is given a non-Twitter URL, the app downloads the page and uses a voracious regex to gather up all the Twitter Usernames found. Overall, building this app was a great experience and a lot of fun.