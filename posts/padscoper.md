---
title: Padscoper
category: software
description: A demonstration of how to use a special algorithm for determining distance between two addresses
image: padscoper-blog.png
tags: practice, geography, node.js
---
[![Padscoper Real Estate Search App](/padscoper-screens/padscoper-splash.png)](https://padscoper.herokuapp.com/)

* * *

[Get the code](https://github.com/zackproser/padscoper)

[Padscoper](https://padscoper.herokuapp.com) is a demo real estate property search app. I features a REST API that uses the Haversine formula for determining the distance between two lat, long coordinates. Users can search for properties within a 20 mile radius of the address they supply on the frontend UI.

The address is then handed off to the Google Geocoder service to be reverse geocoded into lat, long coordinates which are then POSTed to the backend. A list view of properties within 20 miles are then displayed to the user. I built this application in 2 days, start to finish.

Since this is currently a demonstration app, there is a single hard-coded list of 20 properties in the SF bay area. **You can use the address "535 mission st San Francisco" to obtain a list of properties nearby in order to try out the application.**

## Screenshots

* * *

![Padscoper List](/padscoper-screens/padscoper-list-results.png)

## Key Features

* * *

*   Uses the Haversine formula for determining the distance between two lat,long coordinates
*   Express app that serves JSON via a backend REST API
*   Leverages Google's Geocoding service to reverse geocode address searches on the frontend

## Technical Details & Takeaways

* * *

This was a fun project to build because I was able to learn more about the various methods for calculating the distance between two geographic locations.