---
title: Why I've been successful lately, and what I'm planning to do about it
category: blog
description: In the past 3 years, I've been promoted 3 times. I reflect on the habits and activities that helped me improve the most. 
image: gruntwork-promotions.png
tags: career, work, promotion, development, learning
---

For the past 3 years, I've been working at [Gruntwork](https://gruntwork.io), a DevOps startup that accelerates  your launch into AWS by giving you best-practice architectures defined in Terraform, and standing them up in your accounts in about a day. 

In those three years, I have been promoted three times. 

![Gruntwork promotions](/successful/gruntwork-promotions.png)

More importantly, my skill and confidence in writing Golang has improved significantly, and as a result I've experienced: 

1. more opportunities to make more satisfying and impactful contributions at work
2. deeper job satisfaction (likely as a result of #1)
3. the ability to make more interesting open-source contributions across work and personal projects
4. increased capacity to help out my teammates when pair coding, to propose alternative approaches
5. massively increased confidence and speed in reviewing community and teammates' pull requests
6. massively increased confidence and speed in developing solutions that are more efficient, simple, reliable and easier to change than the ones I used to develop 

In this post, I reflect on the techniques and habits that have delivered the highest return on my investments of time and effort: the winning strategies I plan to continue employing in the future because they make me more effective and content at work. 

## TLDR 

* I hired a professional coach
* I got certified - again and again
* I forced myself into cross-sensory practice 
* I stoked my curiosity to propel me forward
* I read like crazy
* I constantly raised my hand to hop on the pain train 
* I left documentation behind - with an attitude 
* I maintained a second brain
* I maintained a personal portfolio
* I made a bunch of open-source contributions
* I had hard conversations
* I did code kata
* I kept tabs on general language developments
* I continued to evolve my development setup

## I hired a professional coach
___

When I started at Gruntwork, I had three major avenues for getting feedback on my work that I could use to improve: 

1. Structured performance reviews 
2. Comments colleagues left on my pull requests while reviewing my code 
3. Direct queries I'd eventually come to make of colleagues that I trusted while pair-coding with them (What should I do to improve? What tools / methodologies / books do you think I should look into?)

This feedback was helpful, but infrequent. 

I wanted to go deeper into Golang development and to receive feedback more frequently. I had found a language I loved working with and that I wanted to master. I wanted to carve out dedicated space for more effective practice.

To this end, I hired a coach. At Gruntwork we have excellent benefits, my favorite probably being the wellness / learning budget, which is a (very) generous monthly stipend you can use for books, coaching, conferences or anything health and family related. 

I researched my options online and ultimately settled on hiring [Bitfield Institute](https://bitfieldconsulting.com/golang/bit). In so doing, you get to work with [John Arundel](https://www.linkedin.com/in/bitfieldconsulting/), who is a highly experienced developer and successful author of several books on Golang development, testing and tooling.

John also happens to be a delight to work with. You start out by reading a few of his books and working through the examples and exercises. Along the way you'll also get assigned some Golang projects to start working on. 

Here's the first project I worked on after starting with Bitfield.  [Procrastiproxy](https://github.com/zackproser/procrastiproxy) is a simple proxy you can configure to reject requests to specific domains within any window of hours you wish. You could drop it somewhere in your network and have it reject your attempts to access reddit or twitter or your favorite news site between 9am and 5pm, for example. 

As you develop these projects on the side, John will review your work and provide feedback, including detailed code reviews. This is where I began to unlock massive value from working with John. These initial code reviews were unlike the drive-by `LGTM` that we've all left and received, or cursory glances and some random questions to feign engagement in your pull request. 

These were serious, deep code reviews. I questioned the entire project setup by the time I was done reading John's comments. "Why did I think that adding more was better, especially when it came to configuration of my services?",  I asked myself. 

John taught me to value simplicity and to look to the standard library and consider cleaner solutions from the outset. To think more deeply about the interactions that others will have with my software as users and maintainers. 

To think deeply about whether or not something was truly clear from its name, and whether or not the code generally "looked happy", which is a separate consideration from whether or not your program is correct. 

Working through these code reviews, reading John's books and building these projects under John's tutelage has tremendousy improved my capabilities as a developer. As a result, I find more satisfaction and enjoyment in my work.

It's my favorite part of the week or month when I get to pair with John, so having a coach also helps me to maintain a virtuous cycle of enjoying learning more about what I do, which causes me to do what I do slightly better, which ultimately makes work more enjoyable. 

The other thing about working with John that was tremendously helpful for me was the work therapy: hearing that someone more experienced and skilled than you are encounters and has to contend with the same annoyances, difficulties, technical warts and sharp edges, organizational headaches, etc is validating and encouraging. 

It's the human, emotional aspect of mentorship, being mirrored as a developer, that helps you to feel that you're generally on the right track. 

## I got certified - again and again
___

In my experience, cloud certifications tend to divide folks. Proponents of certifications will emphasize the learning: studying for certs can help you to fill in the gaps in your knowledge such that you can make more effective use of the technologies you're being certified for. 

Detractors tend to point out that a finger pointing at the moon is not the moon; that there's an entire cottage industry assisting folks who do not have significant development backgrounds in cramming to pass certifications, even though they lack the foundational skills necessary to put their certification knowledge to good use by delivering working software in a professional setting. 

It's entirely possible to be certified in a bunch of fancy technologies that you have absolutely no clue how to use. Doesn't this negate the entire value proposition of certification programs in the first place?

In my case, I reasoned that I wanted to build up a significant grouping of relevant and generally well-respected certfications for two main reasons:

1. I was planning on building up all the knowledge being tested for by the certifications anyway. I'm speaking about Terraform and AWS certifications here.
2. In any future competitve employment situation, and in future business negotiations, I want the extra chips to bargain with. If you're already sold on the idea that I'm generally competent and not a bullshitter, then my having the certifications is a reasonably solid signal that I'll be effective when working with the technologies I'm certified for

In any event, in my personal experience, preparing for these certfication exams has provided the real value for me, and I have benefited from using other people's courses and materials. So far, [Adrian Cantrill](https://cantrill.io/) provides the highest quality [AWS training](https://learn.cantrill.io/) I have come across. 

In my case, I picked up the following AWS certifications: 

- [Cloud Practitioner](https://www.credly.com/badges/df691558-e926-4d11-93ca-c15e1707c954/public_url)
- [Solutions Architect Associate](https://www.credly.com/badges/baf2a178-fbb6-4e3b-bee3-a4e51bf1ecb4/public_url)
- [Developer Associate](https://www.credly.com/badges/6b6bcd25-c114-40ec-988c-d85118a62413/public_url) 
- [SysOps Administrator Associate](https://www.credly.com/badges/a8867c79-5eef-4231-a939-6e4e2993ca4b/public_url)

I found that my confidence in working with AWS services skyrocketed after completing the Solutions Architect Associate, but your mileage may vary. 

## I forced myself into cross-sensory practice  
___

When I reflect on getting certified, I find that the real value for me was having structured time set aside to play around witht he various AWS services to better understand them, and to leverage what I'm currently calling layered or cross-sensory learning:

At a high level, I find myself roughly following this pattern with my own learning:

![layered learning phases](/successful/layered-learning-phases.png)

The primary source in this case could be a textbook or book on Go that I'm excited about, such as [The Power of Go Tools](https://bitfieldconsulting.com/books/tools) or [Concurrency in Go](https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/). Or it could be a YouTube video or a tutorial on somebody's blog. It could be the powerpoint slides / videos of one of Adrian's Cantrill's AWS certification courses.

I'll read the primary source once or twice initially, get a general sense of things, try to build a mental model I can use to ask and answer questions about the subject matter. 

Next, I'll look for opportunities and barring any, invent some, to use my new fledgling and abstract knowledge in an implementation: either in a side project, or an open-source project I contribute to, or the next work task, if appropriate. 

If I've been reading up on Go channels and different usage patterns, for example, I'll create a local repo and create a bunch of different examples and experiments in different folders. 

Once I get that working, I'll tweak it in a couple of ways to play around with channels, the order of operations and channel closes, contexts, cancellations, etc. 

By the time I've gotten this far in implementing or attempting to implement something, I've encountered: 
* at least several UX snags or ambiguities that make usage of this thing or language painful. These are useful data points 
* A couple of questions about behaviors that I'll want to further explore or understand more completely 
* bugs, possibly or limitations in documentation 
* my own ignorance - repeatedly 

These are all inputs that can be split out into separate notes and followed up on separately, but the key point is that they propel the overall inquiry and learning forward by opening up new pathways for additional connections. 

The more I studied for certifications, the more I came to realize how totally ineffective it was to simply try watching videos whenever I had some free time. It was just not a meaningful return on investment.

Reading the code snippet in the textbook is a start. A very shaky start.

Typing it out into your machine is better. Modifying the resulting program after you type it out is even better. Tweaking it and re-running it until you understand it is better still. Ideally, once you've achieved this, you can continue modifying the proof of concept to explore adjacent ideas or solidify other concepts you recently learned. 

Watching the AWS certification course powerpoint slides on how S3 works is start, but finding the Go SDK for S3 next and writing up a simple program to put items in your bucket is better. 

Extending this program to flex all the various S3 API calls you just learned about is better still. Writing up a blog post explaining everything you did and learned along the way, and using that post to teach a friend or colleague next is better still.

Buying the course is not the same as having already invested all the sweat equity (effort and likely, frustration) required to actually understand the key concepts the course teaches. Plan accordingly in terms of time.

Buying the textbook is not the same as having worked through the textbook in order to understand the examples, including all the bugs, issues, edge cases, missing binaries, operating system incompatibilities, etc, etc that will necessarily stand between you and having the end result you desire.

You have to flex the material to really understand it. You have to get kinesthetic with it - actually go through the pain to get the dependencies installed and the runtime on your machine. Actually get your code implementing your weird angle or idea that you're trying to validate to compile. All of the extra things you'll have to figure out along the way are very relevant to your daily work, too. 

## An example output of this cross-sensory learning
___

As one real example of an artifact that came out of this process of iterative and layered exploration, here's [the open-source CI/CD pipeline I built](https://github.com/zackproser/aws-react-golang-sam-codepipeline) using AWS CodePipeline and AWS serverless application model (SAM) and defined in CloudFormation. 

After I published the code, I wrote up [a tutorial walking through its usage here](https://zackproser.substack.com/p/how-to-build-a-reactjs-and-lambda).

Why CloudFormation? Because I use Terraform all day and wanted to understand the experience of working with one of its alternatives. 

## I stoked my curiosity to propel me forward
___

In a previous section, I say that I "forced myself into cross-sensory practice". That's a bit heavy handed and not totally accurate. I've also found that it's critical to maintain your motivation by allowing your curiosity to drive you forward to further discovery and learning. 

It's ideal if you are excited to try out that slick looking new Go library to see if it can solve some of your problems in a more elegant way. Always keep a running list of projects, tools and experiments you are excited to try out.

Recently, for me this role has been nicely filled by everything that [the Charm organization](https://charm.sh/) is putting out on GitHub. In short, their popular and beautiful projects Bubbletea, Glamour, Lipgloss and others are making developing ambitious, gorgeous and responsive applications for the terminal a delight. 

That didn't mean it was necessarily easy - I still had to wrap my head around how Bubbletea programs are structured and how they work. 

I wrote a couple of internal proof of concepts (POCs or POS, depending on whether or not you can see the code) using Bubbletea, one that contemplated offering a piece of our sign-up flow via an SSH connection using Charm's Wish project to serve Bubbletea applications over SSH.  

In my free time, I also created: 

1. [Teatutor](https://github.com/zackproser/teatutor), an app for creating quizzes that people can take over SSH. It's not finished - it still needs to be genercized so that it's easy for users to launch and maintain their own quizzes, but it was a good excuse to practice using Bubbletea more.

2. [unicode-cli](https://github.com/zackproser/unicode-cli), a completely unremarkable practice repo. The point is that it was an experiment I used to solidify some piece of my mental model around how Bubbletea programs worked. 

## I read like crazy
___

I keep an external list for organization and motivation purposes. I happen to use Goodreads for this. It's nice to be able to wing your friend your recent reading history with a single link when you're discussing books or trying to figure out what to read next. 

I read about work. I read about working. I read about organization, note taking and learning. I read about difficult conversations, the common dysfunctions of teams and how to improve things at work.

I read about [the War of Art](https://stevenpressfield.com/books/the-war-of-art/). 

I find that I get a handful of helpful different ideas from each book that stick with me.

These ideas have in some cases helped me to dissolve mental blocks that I dragged around for years. Keeping up this habit, I expect, will therefore continue to pay dividends. 

Reading also compounds over time, and you can feel it every time you encounter an idea you already understand, or a piece of knowledge that you already acquired from a recent reading of a different source, or additional details to hang on the scaffold of a concept you already acquired. 

Nowadays whenever anyone I'm close to or work with recommends or mentions a book, I pick it up immediately and queue it for future reading.

## I constantly raised my hand to hop on the pain train 
___

In order to grow we need to be stretched, and one of the worst things a creative person can do is become comfortable. 

The more patterns you expose yourself to, the more you'll find places for them in the software you're building. Meanwhile, confidence is borne of demonstrated ability, so the more complex software tasks / fixes / enhancements / refactors / designs you handle - the better you'll be able to handle those in the future. The more difficult deployments you do, the more calloused you become to difficult deployments (for better and for worse). 

At work, this meant that I always raised my hand to take on deployments even though the process was difficult, ill-defined, complex, tedious to repair and demanding both general development knowledge and deep specialty knowledge of several topics and technologies.  

Before we had matured and grown the process and team, deployments could stretch out your days and evenings and demoralize you with a seemingly endless stream of blockers, obstacles, random blips, AWS changing behaviors and quotas out from under you without documenting or announcing them, weird edge cases and strange customization requests that complicated everything further. 

This is speaking just to the technical side of things, before getting into the at least equally complex side of managing all of the humans involved on both sides (or three sides, if we're working with a partner) and all their competing emotions and needs. 

It was hard and frustrating. It was reliably stressful to work on, to pick up responsibility and to answer for a given deployment, to see it through start to finish and to be the person looked to internally and externally to pull it off each time. And the longer I did it, the stronger I got. As a previous manager observed, "struggle brings strength".

When one deployment was finally closed out, as arduous as that one had been, once I had finished writing up the retrospective and filed all the issues to close it out, I would always raise my hand for the next one that became available, even if it fell on the next day. 

My only regret is that I didn't do even more deployments. 

## I left documentation behind - with an attitude 
___

The attitude being: "I don't want to have to explain this ever again - not even to one more person."

Because, inevitably, your co-workers or your customer will need to know where that new secret you uploaded is, how the new feature processes records and where the updated endpoint lives - and they will need to know it exactly when you're in the middle of the next interview or 1 on 1 or important strategy meeting. 

For this reason, I want my doc to be so thorough, clear, replete with helpful information, organized with a table of contents and free of mispellings that I can just return a single link to my requestor and feel confident that I've given them everything they need to unblock themselves. 

When I think selfishly in this way - that the documentation is actually for me - it greatly increases my motivation to leave clear and helpful artifacts behind. 

I know that the probability is high that *I could be* the next person who needs that information, about 2 years from now, after we've stopped using the tech stack in question as a company. So, I try to be kind to my future self. 

## I maintained a second brain
___

I use [Obsidian](https://obsidian.md/). and roughly follow the philosophies outlined by: 
1. [Getting things done](https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity)
2. [How to Take Smart Notes ](https://www.amazon.com/How-Take-Smart-Notes-Technique-dp-3982438802/dp/3982438802/ref=dp_ob_title_bk)

How to Take Smart Notes is a real gem. Even though I had encountered many of the ideas iit set forth before, this book was the first for me that truly demonstrated the many benefits of the Zettelkasten system. I read this book with increasing euphoria and excitement.

I feel that I've only begun to scratch the surface of the eventual productivity and learning enhancements I'm going to unlock by continuing to maintain and consult with a second into the future.

I use Obsidian Sync to keep my notes synced across my phone, laptop and desktop (Android + Linux) it works flawlessly, allowing me to write out blog posts directly into obsidian on my phone so that I can polish them a bit when I'm on my laptop next and publish them directly to the web in vanilla markdown. 

This subject is meaty enough to deserve it's own future deep dive post. For now, I'll say that having a central place for all my notes, for every "open loop" in my life, and having a low friction, fun methodology for continuously iterating on ideas, notes and posts until they're ready to publish is a boon for me.

## I maintained a personal portfolio
___

I keep my personal portfolio at [https://zackproser.com](https://zackproser).

I'll expand on my thoughts around maintaining a portfolio in a different post, but for now I'll constrain myself to the highlights of why I believe doing this is worth the effort: 

It's a good excuse to remain plugged in to another tech stack. I have done a good bit of frontend development in the past, but for the past few years my focus has been on IaC, systems automation, CLIs, Go, Bash, Python, AWS + cloud, etc. All the same, I like to remain at least somewhat plugged into the frontend world. I like to be able to build my own UIs when needed - and knowing the general ecosystem, its popular projects and their upsides and pain points makes me more well rounded and a better complement to any team members who *are* primarily working on the frontend day to day. 

It serves as a single place on the internet that you control which you can use to show off your past work and your skill set. Run it on your own domain so the bastards can't hold you down. Never gone through maintaining your own domain before? Dealing with DNS? Adding your own subdomains over time and configuring HTTPS? All the more reason to run your own site, to gain this experience. 

It's a good excuse to learn (and care) about common web performance issues, such as asset bundling and fingerprinting, good CI/CD practices for quick iteration and resolution, preview environments, caching, geo-aware customer routing, analytics, etc, etc, etc. As ever, some of the things that end up being true competitive edges for me at work are things I figured out screwing around with one of my many side projects. It doesn't really matter if your site is extremely popular or not, building experience with these common issues, common workarounds, solutions and tech stacks is - at the end of the day, just that: experience. It makes you more effective, marketable and expensive

It can be a good way to cross-pollinate with and to fuel or enhance your blogging efforts. It's not for everyone, and there are plenty of good arguments for why you should just use a simple provider like Squarespace to build and maintain a separate blog, but, speaking for myself, having done all the brain damage to get posts working the way I wanted in my site increased my motivation to post my own content on my site, as well as my own satisfaction in seeing my content live on a site and system I built

## I made a bunch of open-source contributions
___

Handily enough, at Gruntwork we have a lot of Golang repositories that we maintain: command line interfaces (CLIs), and various bespoke tools for automating Kubernetes needs, for example. 

I had plenty of options to choose from, and mostly concentrated on [cloud-nuke](https://github.com/gruntwork-io/cloud-nuke) last year, our open-source tool for cleaning up AWS accounts quickly and easily by finding and deleting resources for you. 

But I was also able to work on additional improvements for [git-xargs](https://github.com/gruntwork-io/git-xargs) and to add some login helper commands to our [gruntwork](https://github.com/gruntwork-io/gruntwork) command line tool (which happened to leverage my recently acquired Bubbletea knowledge).

I had spent enough time with cloud-nuke to know that it could benefit from UI enhancements that made it easier to read the logged output of every operation it took. I was able to use [pterm.sh](https://pterm.sh/) to make the output much nicer to read. Doing this also involved adding a new subsystem that was capable of tracking every individual operation in AWS and presenting the final results in a nice table format. 

Prior to my changes, cloud-nuke output a flat list of log lines to `STDOUT` that may or may not include the information you need to actually understand what happened to which resource. 

Here's a video demo showingthe UI looks after my enhancements:

[![asciicast](https://asciinema.org/a/525446.svg)](https://asciinema.org/a/525446)

I mention this because working on open-source can be excellent for many reasons: 
1. It's a way to give back to the community - it's a small form of thanks for everyone who ever took the time and effort to publish a tutorial or stack overflow answer that taught or helped me when I was starting out
2. open-source development can improve your resume and raise your professional profile. Significant open-source contributions or a history of maintaining popular open-source repositories are strong hiring signals for many organizations
3. You can find real-world problems and software to work on - which can be more effective than following along in text books where you don't have a lot of domain knowledge yet

## I had hard conversations
___

Left to their own devices, other people will fuck up your career progression at every single opportunity they get. In some cases it's because they're malicious or jealous - but this applies even to the excellent managers, owners and founders who care about you and have your back.  

The key is *left to their own devices*. Even those looking out for you, wanting you to succeed and trying their best to support you *cannot read your mind*. 

If you haven't already, recently and repeatedly been having conversations with ALL the relevant stakeholders about where you are in your progression, where you want to go and what changes, improvements, new skills will be required to get you there, then that promotion is not happening. 

Even though you did all the things and some extra. 

Even though you also built those handy utilities tools that one team is now using. 

Even though you taught Sparky how to refactor their JavaScript to use ES6 every Friday afternoon. 

If you haven't had several discussions with your manager and possibly their managers too, building a clear, shared understanding of the impact you're making and where you want to go career wise, then that promotion that's a no-brainer in your mind is not happening. 

Worse still, if you miss the boat this review cycle, it will still require a couple rounds of conversations next time around to align you and your management and any other stakeholders that have influence into whether or not you get promoted. This means that, even if you don't expect or want a promotion for about a  year or more out from today, you still need to start discussing it today. 

Nobody is going to care as much about your career progression as you are. This means it's your responsibility to: 

1. Figure out where you want to go 
2. Regularly request feedback about the delta between your current and your desired roles
3. Regularly do the hard work, put in the sweat equity, to develop and demonstrate your new skills and capabilities successfully, to actually deliver real and meaningful business value (not simply an artifact you can point to that uses your new skill set but does not move the needle for the business. This is commonly conflated with impact - but they are different things)
4. Regularly document succinctly and clearly what you did, so that your impact does not slip under the radar of the committtee / person making the promotion decisions
5. Regularly ensure the key stakeholders see / understand your documented improvements and contributions 

Of course, like everyone else I learned all this the hard way. 

So now I can say that ever since I began having difficult conversations about compensation, work roles and work load, my career progression has greatly improved, and I found alignment with my workplace's needs and my own, which also reduced my overall frustration day to day.

## I did code kata
___

For extra practice, I used [exercism.io](https://exercism.io) and others like [codecrafters.io](codecrafters.io). These are great supplemental exercises because they'll help build your muscle memory for language syntax, common algorithims and patterns.

I tend to create an open-source repository where I'll iterate on my solutions - for my own edification and in case it's helpful to anyone else in the future: 

- [Exercism](https://github.com/zackproser/exercism)
- [Algo practice](https://github.com/zackproser/algo-practice)

## I kept tabs on general language developments
___

Just need a decent mailing list for this - I like [Golang Weekly](https://golangweekly.com/)

## I continued to evolve my development setup
___

In my previous iteration, I was using vanilla vim with vim-go. That was a large improvement over my JetBrains / GoLang IDE setups. 

More recently I started experimenting with Neovim and Astronvim. Good excuses to learn more about vim, neovim and lua. 

Seeing the differences between Vimscript and the Lua approach is interesting. Having everything work "out of the box" in an IDE-like experience but in neovim is interesting. 

Learning how to tweak my configuration so that `go build` is run on the file everytime I hit `backslash + b` is both fun and helpful to my workflow.

My setup and configuration is currently in flux. I continue to experiment with various tweaks and enhancements as I learn more. 

## Thanks for reading! 

Those are the highlights. I hope this post has been helpful or interesting to you in some way.
