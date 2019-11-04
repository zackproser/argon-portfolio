---
title: Wisdomseeker
category: software
description: A wikipedia crawling application
image: wisdomseeker-blog.png
tags: Node.js, Crawler, Wikipedia, Data Extraction
---
![](/wisdomseeker-screens/wisdomseeker-home.png)

Wikipedia is known to be structured in such a way that [many articles ultimately lead to Philosophy](http://www.xefer.com/2011/05/wikipedia) - if you click the first main body link of each article in succession.

Wisdom Seeker performs this task for you automatically and reports on the path it took to reach Philosophy.

It also knows when it is stuck in a loop - and will report loops as well as meandering paths that will never arrive at Philosophy. To try it out, paste a Wikipedia link - Wisdom Seeker's report includes the full links to each page, so you can follow along manually.

## Screenshots

* * *

**_Easy one-step form accepts any Wikipedia link_**

![Wisdom Seeker Node App Succeeds in finding Philosophy Article](/wisdomseeker-screens/wisdomseeker-success.png)

![Wisdom Seeker Node App Gets Stuck in a Loop - And Reports it!](/wisdomseeker-screens/wisdomseeker-loop.png)

## Key Features

* * *

*   Visits Requested Page and Pathfinds to Philosophy Article
*   Is Aware of Being Stuck in a Loop
*   Reports Loops and Meandering Paths That Will Never Lead to Philosophy
*   Reports Full Path with Links So You Can Follow Manually

## Technical Details & Takeaways

* * *

Wisdom Seeker was a fun app that explored an interesting quirk of Wikipedia that I was not familiar with previously.

The biggest challenge in building this app was selecting the exact first link within the body paragraph, given that each Wikipedia page has so many links.

Ultimately, a combination of aggressive jQuery style selectors and regex filtering of retrieved HTML did the trick.