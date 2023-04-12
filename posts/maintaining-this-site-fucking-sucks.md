---
title: Maintaining this site fucking sucks 
category: blog
description: Join me as I delve into the infuriating, yet enlightening journey of maintaining my own Javascript-heavy website. Learn how battling DNS issues, dependency chaos, niche CSS pre-processors and constant painful upgrades has led to one of the most rewarding projects I've ever created.
image: wakka.png
tags: javascript, maintenance, tedium, suffering, futility 
---
Maintaining this site FUCKING SUCKS.

You'd think that with all the advances in technology, the fact that I've been doing this for longer than a decade now, and the sheer number of frameworks and tools available, that maintaining a highly customized personal website and blog would be a breeze. It isn't. 

First, let's talk about the DNS management. You would think that something as simple as pointing a domain name to an IP address would be straightforward, but no. There's always some bizarre propagation delay or weird caching issue that makes you question your sanity. 

Oh, you want all your images to be cached at the edge so they're super snappy for everyone visiting your page, but you also want to bust your cache each time you publish a new version of your site? Fuck you! Figure it out and do it yourself. 

GoDaddy DNS, Domain transfers, Cloudflare accounts and cache settings and tier-locked behavior to worry about. Figuring out which device still has that 2FA account on it so that I can log in and change the settings. Pawing through the devtools output as I debug why my images aren't being cached as expected. What a goddamned nightmare.

Then there are the Node.js and Vue.js version upgrades, which feel like a relentless, never-ending battle. I swear, it's as if every single time I sit down to write a blog post, there's a new version of something absolutely critical to my site lurking in the shadows, waiting to pounce. With each upgrade comes the inevitable breaking changes, followed by the torturous debugging sessions that send me on a wild goose chase through the darkest, most obscure corners of Stack Overflow. And just when I think I've tamed the beast, another update appears, accompanied by a fresh set of dependency conflicts, deprecated methods, and newly introduced bugs that leave me questioning my very existence as a developer. Manual labor wasn't *that* bad.

Security upgrades are another beast entirely. Just when I think I've got everything under control, I load up GitHub to review and merge my latest pull request, but I'm beset instead by a dozen new CVE issues that dependabot is trying to patch via its own programmatic pull requests. Cue the panic, followed by the mad dash to patch and test the affected components. The other week I saw a guy drive up to my neighbor's house with a giant powerwashing setup and proceed to clean the entire exterior himself over the course of 4 hours. I could do that, too. 

And let's not even get started on dependency hell. Managing the compatibility between my Ubuntu machine, the C libraries and dependencies needed to create the hyper-performant pre-processor that can convert SASS into raw CSS, the Vue.js version 2 site I built ages ago, and the increasingly complex web of interconnected libraries is like playing a never-ending game of Jenga. In some cases I sit down and run `npm run dev` after changing nothing and end up in a situation where my installed SASS-processing dependency issues prevent the local server from even coming up. Good luck googling for solutions when you're that far out of date on your primary framework!

Of course I had to write my own blogging system. Of course it had to work within Vue 2 and of course I had to use the nuxt config file, which is really a separate complex Node.js program, to do most of the heavy lifting to allow the final product of all this tedium to be at least somewhat reasonably search engine optimized. Of course I didn't document it either, because fuck that guy who's going to deal with it next. 

I know that I could put this burden down. I have a mentor making excellent and sober use of Squarespace for his professional domain - and the results look great. I read his blog posts myself and think that they look good! It doesn't have to be like this.

But here's the thing: despite all the frustration, the hair-pulling, and the curse words muttered under my breath, there's something strangely satisfying about tackling these challenges head-on. In the process of keeping this site running, I've learned even more about full-stack development than I would have otherwise, and, more importantly, I've continued developing callouses as I encounter and solve so many common web-based pain points that are totally relevant to my day job, too. 

Sure, the number of times that I've sat down with a finished blog post that I want to share with the world only to be thwarted last minute by surprise: 

* DNS issues
* Node.js or package.json or Vue.js or Nuxt.js issues or Ubuntu C library issues
* CVEs that force my to bump some obscure dependency past the last version that works in my current setup
* Debugging and customizing pre-built CSS frameworks

...now truly defies my tallying, because maintaining this site fucking sucks!

And that's exactly why I do it. It's one of the best projects I've ever created. 

