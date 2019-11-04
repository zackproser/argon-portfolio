---
title: CanyonRunner HTML5 Game
category: software
description: A complete game playable on web and mobile, built with the Phaser.js gaming framework
image: canyonrunner-blog.png
tags: Game, HTML5, Javascript, Open-source
---
**_Click the image to play now!_**

[![Zack Proser CanyonRunner](/canyonrunner-screens/CanyonRunner-Title-Screen.png)](https://objective-newton-10ea2c.netlify.com/)

## Intro

Building CanyonRunner was my favorite development experience in recent memory. Making my first game means coming full circle to when I first started playing video games at age 3.

My intent with CanyonRunner was to build a simple, solid HTML5 game that works on desktop and mobile, features a story and all the basic game systems you'd expect such as a progress saving system, top scores, different game dynamics on each level and two different endings.

Including the time spent learning the new framework, building CanyonRunner took me exactly 76 days of a few spare working hours here and there each day.

## Screenshots

**_Intense Aerial Dogfights. Fight Off Marauding Bandits_**.

![CanyonRunner Game Aerial Dogfight with Rockets](/canyonrunner-screens/CanyonRunner-Aerial-Combat.png)


**_Wind Your Way Through the Eerie Story_**


![CanyonRunner Chapter Screen](/canyonrunner-screens/CanyonRunner-Chapter-Screen.png)

**_Intense Environmental Effects_**

![CanyonRunner Environmental Effects](/canyonrunner-screens/CanyonRunner-Environmental-Effects.png)

**_Auto-detects Mobile agents and renders a touchpad_**

![CanyonRunner Chapter Screen](/canyonrunner-screens/CanyonRunner-Mobile-Touchpad.png)

**_Catchy Music Keeps The Pace Throughout The Game_**

![CanyonRunner Musical Score](/canyonrunner-screens/CanyonRunner-Success.png)

**_Save System Keeps Your Score & Progress_**

![CanyonRunner Save System](/canyonrunner-screens/CanyonRunner-Title-Screen.png)

**_Multiple Endings For Higher Replay Value_**

![CanyonRunner Game Two Different Endings](/canyonrunner-screens/CanyonRunner-Two-Different-Endings.png)

## Key Features

* Desktop & Mobile Ready
* TopScore, TopTime & Level Progress Save System
* 3 Different Levels with Unique Game Mechanics
* 2 Endings - Depending on How Quickly You Complete The Game

## Technical Details & Takeaways

CanyonRunner is built with the excellent HTML5 gaming engine [Phaser](http://phaser.io/), which I cannot recommend highly enough. It was fun learning about the basic physics patterns behind 2D side-scrollers.

Ultimately, I learned the most about compressing and packaging assets correctly for fast delivery to mobile devices. I used a single spritesheet and a single audiosprite to drastically reduce the number of http requests required to load the game on a mobile device.

We all know it's annoying to be in the middle of a game and lose your progress because something comes up. I was able to take advantage of localStorage to create player-specific objects that are written to at various points throughout the game.

This system also allows for the final determination of which ending a player will receive. When the final level is successfully completed, the game inspects the player object and determines how long it took the player to complete the game. Depending upon this total time calculation, they are shown one of two possible "Game States".

Regardless of which ending they get, the player has a chance to share their gaming experience on Twitter - via a built-in button that autopopulates a Tweet for them and includes a link back to the hosting site - helping to drive more social traffic for myself and my sponsors.