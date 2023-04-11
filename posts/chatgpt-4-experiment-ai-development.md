---
title: Can ChatGPT-4 and GitHub Copilot help me produce a more complete side project more quickly?
category: blog
description: As a Senior Software Engineer, I'm always looking for ways to refine my skills and optimize my workflow. This weekend, I experimented with integrating ChatGPT-4 into my developer toolkit alongside GitHub Copilot, which I've been using for several months. The goal? To see if these AI-powered tools could help me complete a side project more quickly. 
image: chatgpt4-experiment.png
tags: AI, development, productivity, neovim, ChatGPT
---
![ChatGPT 4 Pair coding experiment](/chatgpt4-screens/ChatGPT4-pairing-code-initial-request.png)
  
Over the years, I've embarked on [countless weekend side projects](https://github.com/zackproser) to explore new technologies, [refine my skills](https://www.youtube.com/@zackproser), and simply enjoy the creative process. As a Golang developer with a penchant for keyboard-driven development, I have learned to combine command line tools, IDEs, and text editors to maximize productivity and deliver results efficiently. 

This weekend, I decided to see what, if any, speed boost I could unlock by weaving in ChatGPT-4 to my developer workflow and using it alongside GitHub Copilot, which I've been experimenting with for several months now. By the end of this post, you'll gain insights into the current state of these tools and how a Senior Software Engineer found them to be helpful, and in some cases, very helpful. 

First off, I needed a simple project idea that could be tackled quickly. Enter [`sizeof`](https://github.com/zackproser/sizeof), the CLI project I developed during this experiment. Drawing from my experience with command line tools and efficient development practices, sizeof is designed to help developers build an intuitive understanding of the relative sizes of various inputs, strings, web pages, and files. It leverages the popular [charmbracelet bubbletea library](https://github.com/charmbracelet/bubbletea) to create an interactive TUI (Terminal User Interface) that displays this information in a visually appealing manner. The sizeof project is open-source and available at [https://github.com/zackproser/sizeof](https://github.com/zackproser/sizeof).

`sizeof` is really simple. Here's a quick demo gif that shows how it works: 

![sizeof demo gif](/chatgpt4-screens/sizeof-demo.gif)

One of the key strengths of large language models (LLMs) like ChatGPT-4 is their ability to generate reasonable starting points for various tasks. For instance, they excel at producing CircleCI configurations and READMEs, as they've essentially "seen" all possible variations. Leveraging this capability, I requested a starting point for the command line interface, which enabled me to dive into the development process quickly and start iterating on the initial code.

![Asking ChatGPT 4 to generate the README](/chatgpt4-screens/ChatGPT4-pairing-readme-gen-first-request.png)

Here I am asking ChatGPT for the initial README, and because I'm pretty sure it's seen most of my writing already, I can ask it to do its best to write it the way I would. As you can see in its response, it's going so far to include the HTML badges I tend to include in my open source projects. It also reflects my tendency to include a Table of Contents in any document I create!

It goes without saying, this is very useful and something I'd love to be able to do in an even more streamlined manner. I still edited the final README by hand in Neovim and made all my own edits and tweaks, but I'll have landed this side project much faster for not having to do everything from scratch each time.

Likewise, I essentially described the blog post and asked ChatGPT-4 for the first draft. By asking ChatGPT-4 to generate a first draft based on my desired talking points, I obtained a solid foundation to extend and edit. This greatly accelerated the writing process and allowed me to focus on refining the content.

My impressions of the quality of its responses is generally favorable. I experience about zero friction in explaining myself to ChatGPT 4 - and getting it to do exactly what I want. Because it is aware of the previous context, I can ask it insanely useful things like this: 

![ChatGPT4 please regenerate this document in a different language](/chatgpt4-screens/ChatGPT4-pairing-readme-regen-markdown.png)


ChatGPT 4 really shines when asked to perform tedious tasks that you'd normally do yourself or hand to your copywriter when preparing a post for publishing online. Here I am asking ChatGPT 4 to effectively save me a chunk of time. Its first response was excellent so getting the copy I needed for LinkedIn and Twitter took me as long as it would have taken to effective type or speak my description of the task into being. 

![ChatGPT 4 writing my LinkedIn and Twitter copy](/chatgpt4-screens/ChatGPT4-pairing-socials.png)

Where is GitHub Copilot in all of this? Nowhere, essentially. For the most part, while working with ChatGPT4, there was nothing of value that GitHub Copilot had to add, and I find its code suggestions painfully clumsy and incorrect, which is more a testament to the speed at which these LLM models are currently being developed and advanced. Copilot X, which is forthcoming at the time of this writing and leverages ChatGPT 4 under the hood, will be of significantly more interest to me depending on its pricing scheme.

Despite the clear advantages, there were some challenges when using ChatGPT-4.  One of these was the developer experience. I want a seamless integration of this, and likely, a bunch of other current and forthcoming models right in my terminal and likely right in Neovim. 

While open-source developers have created an impressive array of neovim and vim plugins, as well as experimental web applications that integrate ChatGPT into development workflows, achieving a first-class developer experience remains elusive, at least for me. 

I have found a couple of open source developers putting forth some really awesome tools very quickly. Here's some of the best things I've found so far, which is by no means exhaustive: 

* [YakGPT](https://github.com/yakgpt/yakgpt) - Allows you to run a local server that hits the OpenAI API directly (bypassing their UI) and allowing you to do speech to text and text to speech. It's the closest thing to hands-free ChatGPT that I've seen so far. 
* [ChatGPT.nvim](https://github.com/jackMort/ChatGPT.nvim) - ChatGPT in Neovim

Context switching is the current main friction point I experienced during my experiment. Using ChatGPT-4 effectively required a fair amount of transitioning between my terminal driven development environment and the web browser for a clunky, often buggy UI experience a la Open AI's native web client. As someone who strives for optimized workflows and minimized friction, I found this cumbersome and disruptive to my work. What I really want is close to what YakGPT is already making possible: I want a super-intelligent daemon that I can task with background research or questions that require massive information digestion, or tedious things like figuring out a valid starting point for a CircleCI configuration for my new repository. 

It seems I haven't yet discovered the magic key to integrate these tools seamlessly into my workflow, but at the rate things are advancing and given the amount of attention this space is currently getting, I expect this to continue to evolve very rapidly. I can imagine the workflow that at this point is not far off, where I could extend my own capabilities with several AI agents or models. I haven't yet found the Neovim plugin that I want to roll forward with and tweak to my liking. 

I've noticed issues with ChatGPT API status needing to be reflected somehow within the terminal: essentially, signaling to the user that the ChatGPT plugin isn't dead, just waiting on data. I fully expect all of these minor UX quirks to dissipate rapidly, and I expect to be leveraging some kind of LLM model regularly within my personal workflow in the months to come.

Finally, the desire to integrate AI-powered interfaces with other tools and platforms emerged, and made me wonder what kind of interface would be ideal here. As a developer and writer, I use various applications, such as Obsidian for building my second brain. Leveraging my experience in combining different tools, I'm now eager to see similar AI-powered interfaces integrated into these other contexts to further streamline my productivity and creative processes.



