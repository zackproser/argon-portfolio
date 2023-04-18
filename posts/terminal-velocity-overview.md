---
title: Terminal velocity - how to get faster as a developer 
category: blog
description: I obssess a decent amount over my own developer producity and my customized tmux, neovim and awesome window manager linux setup, and now I pass my best learnings on to you
image: wikka.png
tags: developer, productivity, keyboard, tmux, neovim 
---
*"You could be the greatest architect in the world, but that won't matter much if it takes you forever to type everything into your computer."* [**Hugo Posca**](https://www.linkedin.com/in/hugoposca/)

# Why read this article? 
When you're finished reading this article, you'll understand the *why* and *how* behind my custom development setup, which has subjectively made me much faster and happier in my day to day work.

Here's a screenshot of my setup, captured from a streaming session. 

![Zachary Proser's custom developer workflow](/my-custom-development-setup.png)

If you'd like to view my setup in action, you can view [my YouTube channel](https://youtube.com/@zackproser).

In this blog post, I'm going to show you exactly what I type in my terminal, and exactly how I navigate my filesystem and work on projects with high fidelity demos, such as this one: 

![tmux is your friend](/tmux-flow.gif)

# Why do I care about this so much?

I believe that when it's fun and efficient to do your work and interact with your tools and devices, you're more productive and happier.  Therefore, one of the reasons this topic energizes me is that it's an investment into making something that I do intensively for many hours per week as pleasurable and efficient as it reasonably should be. 

But there's also another important reason I've been wanting to put out this blog post for a long time now. Many developers throughout my career have assisted me, and taken time out of their day to stop what they're doing and show me a better way. 

My current skill level is a product of my constant practice and the sum total of every new technique and pattern someone more experienced took the time to relay to me.  

I am now finally producing this post as a means of saying thanks and paying forward the same favor to anyone who could benefit from this information.

In this post, I share the most important things I've learned so far on my journey, which is by no means complete. I am no expert, but another student. 

# The fundamentals must be speedy
There are certain actions you'll perform a great number of times in your career as a software developer. You'll do them a number of times today, even! All of these things need to be extremely fast for you to execute. Fast like scratching an itch is - there's the impulse to be somewhere, and your fingers find the place effortlessly. **No exceptions!**

* **Navigating to** code, locally or in the browser. This means finding the correct repository and jumping into it very quickly, with minimal keystrokes.
* **Understanding or mapping code**. This means being able to see a symbol outline (variables, functions, classes, consts, etc) of a given file and see all the files in the project arranged hierarchically
* **Quick pattern and string searching** which allows you to answer the many questions that naturally arise as you're working with code

These tasks are each important enough in their own right; we'll treat each separately. 

### Navigating to code, locally

I work at a company with many (> 150) repositories currently. I manage this by cloning all the repositories to my development machine (using a script) and optionally running another script to step into each repository and perform a git pull.

Maintaining all the repositories I'll reasonably touch locally on my machine allows me to take full advantage of powerful command line tools like `fzf` and `ripgrep`.

I haven't yet felt the need to, but I could further optimize this by creating a cron job to run the update script each morning before I start work, so that I'm always looking at the latest code.

Once I started managing my code locally, `fzf` particularly began to shine as a tool for jumping quickly to any directory on my system. As a fuzzy-finder, `fzf`  can do much more than that, but if you use it only for quick jumps to different directories, you'll still be deriving a great deal of value from it.   

#### `fzf` in action

![fzf demo - jumping to any directory very quickly](/fzf.gif)

#### Navigating to code, in the browser

For general keyboard-based browsing, I use the Vimium plugin for Firefox. Here's a quick (<1min) video of me navigating an actual pull request on GitHub and demonstrating how easy (and quick) it is to: 

* Comment on any line 
* Jump to any file changed in the pull request 
* Expand and use even the special functions behind an ellipses menu
* Start editing a file within a pull request, if desired

<iframe width="560" height="315" src="https://www.youtube.com/embed/gRa3vEOPK_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

For GitHub navigation specifically, I've been using [Octotree](https://www.octotree.io/)

![fzf is ideal for quickly jumping to directories](/fzf.gif)

### Finding files, code or arbitrary strings on your local machine 

Whether you're working on a new feature, trying to orient yourself to a new codebase or performing upgrades across several repositories, you're naturally going to have a lot of questions about your source code come up: 

* Which versions of this software are currently deployed? 
* How many places does that string we need to replace occur? 
* Did that same typo we've seen elsewhere occur in this code? 

And many, many more. You'd be surprised how many of these questions [`ripgrep`](https://github.com/BurntSushi/ripgrep) can answer for you. I recommend learning as many of the flags for `ripgrep` as you can. I picked up ripgrep a few years ago and it remains one of the things I run constantly throughout the day to get my work done more efficiently.

![ripgrep is ideal for finding arbitrary strings across files](/ripgrep.gif)

# Reflow your workspace to fit your work

I may execute many different tasks during the course of a day: write a new feature in one language, fix up some flaky or slow tests in another, write an RFC in markdown, create new configuration files, perform a deployment, etc. 

The main idea is that my workspace is a fluid thing that can shift and scale up or down in order to accomodate the task at hand. If I'm writing code that needs to know the docker image ID of a particular image I built recently, 

I can pop open a new tmux pane and run whatever Docker commands I need to get that information. Because each pane is a shell, I can script against and further process my output with any and every unix tool to get exactly what I want. 

Let's make this more concrete with an example. In the following demo gif, I use neovim to edit code, which means my editor is just another tmux pane. In this case, I'm writing some code that needs a Docker image ID. I need only create a new split and do my Docker work there. When I have the Docker image ID I need, I can close the extra pane, recovering the full screen's real estate for my focused coding task.

![tmux is your friend](/tmux-flow.gif)

In my day to day work, I might have between 3 and 8 different terminal panes open on a single screen, depending on the task. Panes show up to do some work and get and output that can be easily piped to any other pane. Panes whose work is finished can get closed down, recovering screen real-estate for other tasks.  I constantly reflow my workspace to my work.

If I need to fire off an arbitrary network request I can do that with curl. 

*Key tools*
* Tmux
* Awesome Window Manager

### Desktops - with an s
Awesome Window Manager allows me to organize my work across two external monitors into 9 Windows each. This is extremely handy and something I use everyday. 

Here's a rough idea of how I divide up my Windows to provide you with some inspiration, but everyone is likely going to settle on an arrangement that makes them happy: 

1. Comms (Slack, email)
2. Notes / Second brain (Obsidian.md)
3. Spotify 
4. Zoom call
5. Main tmux window for editing code, with all sessions stored as tmux sessions
6, 7, and 8 are my utility windows. I currently run my StreamDeck UI and logs across these 
9. Browser windows for whatever I'm actively working on 

Having these windows divided up in this way simplifies context-switching throughout the day for me. I always know exactly which window has which kind of application running in it, so it's snappy and natural to switch back and forth between them as needed, even while pair-coding or on a Zoom call. 

## What I learned the hard way from doing it wrong myself and watching others struggle
A lot of what junior engineers struggle with is is navigation and mise-en-place type work: 
* *Finding the exact code in the exact branch in the exact repo we're discussing right now* on the Zooom call. How quickly can you convert an understanding of which code you're discussing to the exact line pulled up in your vim buffer?
* *Arranging their development workflow, IDE, windows, other tooling, etc* quickly, in order to transition quickly to a new task, ticket, bug, item. For example, when transitioning to work on a task that requires finding a local Docker image and running it in your test code, you might need to launch your Docker GUI and search for your image by name. Then use whatever UI functionality or hotkeys might be available to copy that image ID and then tab or window over to your IDE in order to insert that Docker image ID into some code.
* *The ability to return to your sessions at any point* - even if they involve separate projects, languages, etc. 

# Keep your hands on the keyboard

That's what most of this really boils down to. 

In general, don't use the mouse. Browse the web using your keyboard. Yes, it will suck initially and be uncomfortable and cause you to be slower overall. This will not last long if you stick with it. I'm now much faster using Vimium to handle even semi-complex tasks like reviewing a large pull request on GitHub, because I can use Vimium to jump directly to the HTML nodes I want, rather than having to drag a mouse across the screen multiple times. There's a demo of me doing exactly this just a bit further on in this article.

# Systems that scale

There are certain synergies you unlock by using these specific tools together for a long enough period of time for them to become a part of your muscle memory: 

Vim motions are extremely efficient means of navigating text documents like articles, programs and web pages. Learning Vim requires effort like most things worth doing, and it takes time for you to truly absorb the motions. However, this investment is certainly one worth making, because it buys you uniform ease of navigation and text processing across any context that speaks Vim-motions, which could be more than you realize!

* Learning vim hotkeys means you can use: 
	* vim
	* neovim
	* the vim hotkeys integration in Obsidian.md
	* Vimium, for browsing the web efficiently with your keyboard. 


