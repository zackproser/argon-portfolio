---
title: A powerful and open source content optimizer
category: software
description: Learn how I leveraged natural language processing technology to build a full-stack app that suggests improvements to your writing
image: optimizer-blog.png
tags: PHP, NLP, API, Web App
---
![Article Optimizer App](/optimizer-screens/symfony-optimizer-splash.png)

## Intro

The Article Optimizer was my first full-scale web app. I built it several years ago to familiarize myself with form-processing in PHP, and within a few months it had grown into a full-scale public web app which now enjoys usage by hundreds of unique visitors per month.

## Screenshots

**_Example report_**

![article-optimizer-report](/optimizer-screens/article-optimizer-example-report.png)

## Key Features

* Uses Sentiment Analysis APIs for Better Recommendations
* Home-brewed Keyword Density Analysis
* Performs Affiliate Marketing for Various Related Services
* Suggests Publishing Outlets Via Affiliate Links
* Finds Related High-Traffic Keywords That You Are Not Using But Should Be
* Automatically Finds On-topic Copyright-free Images to Use In Your Article
* Permanently Writes Your Report to the Server
* Provides Bit.ly Links To Your Report
* Home-brewed Report E-mailing System
* Blog and Free WordPress Plugins Drive Additional E-mail Subscriptions and Traffic

## Technical Details & Takeaways

The joy of deploying your first complete application. In building the Article Optimizer I taught myself how to use RESTful APIs, work with the file system, deploy apps to remote servers using Git and make AJAX requests in order to improve page load times.

When I started building this app, I was not a developer but an online content marketer. I distilled everything I knew about driving traffic, providing value, converting visitors and driving social traffic into the core of the app.

I enjoyed using jQuery extensively on the front-end to build custom validation and user detection functionality. I use cookies on the homepage to determine whether or not the visitor is a returning user. If they are not, they will get see a modal when they try to submit their article that asks for their e-mail address.

First I verify the format of their e-mail with a complex regular expression, then add them to a mailchimp e-mail marketing list via the mailchimp API. If they receive the first intoductory e-mail and confirm their desire to be on the marketing list, they will begin to receive a timed set of campaign e-mails once every two weeks on average, encouraging them to continue using the system or to purchase one of the affiliate products.

Once you submit your content through the system, you are immediately presented with your customized report. After multiple rounds of optimization, I got the report rendering time down to under 2 seconds. Users see breakdowns of their keyword density with suggestions, as well as projected earnings, related high-traffic keywords they should include, and on-topic copyright-free images they can include in their article with a single click.

I feel proud of the balance I have struck with the Article Optimizer, in the sense that it provides a tremendous amount of value for free. Users are not required to sign-up for the newsletter. They can continue using the tool as long as they want to generate their reports.

Every report is permanently written to the server, giving content producers an easy means of sharing the report as verification of the quality of their writing with whomever they choose. They can also share their report via pinterest, facebook or Twitter as a means of driving more traffic to themselves and the app.
