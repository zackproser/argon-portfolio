---
title: Pageripper
category: software
description: A super fast link extractor in react.js with a Golang backend
image: pageripper-screens/pageripper-blog.png
tags: React, Golang, Data Extraction, Web App, Heroku
---
**_Click the image to try the app!_**

[![Zack Proser Pageripper app](/pageripper-screens/pageripper-splash.png)](https://pageripper.net)

[Get the code](https://github.com/zackproser/go-react-ripper)

[Use the app](https://pageripper.net)

I wanted to create an app with a Golang backend that also served its own react UI.

Golang is an excellent choice because of its speed and its [powerful HTML parsing package](https://godoc.org/golang.org/x/net/html)

* * *

## Overview

Enter a URL and hit enter and the app fetches the page, instantly extracts all links therein, and does some light analysis on the links to determine the ranking of domains that the page links out to.

You can then download all the links in CSV format with a single button click.

![Pageripper golang react app](/pageripper-screens/pageripper-report.png)


* * *

## Technical details and takeaways

Go's channels are ideal for extracting links, doing analysis on them and signaling that the overall processing job is complete.
