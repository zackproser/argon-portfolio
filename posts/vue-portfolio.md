---
title: This very website
category: software
description: I regularly rewrite my entire portfolio site to improve it and stay up on new frontend technologies. The current iteration is a nuxt.js project
image: portfolio-screens/zackproser-com-blog.png
tags: Vue.js, Portfolio, Bootstrap
---
[Get the code](https://github.com/zackproser/nuxt-portfolio)

I built my portfolio website to my own specifications, using:
* [Vue.js](https://vuejs.org)
* [BootstrapVue](https://bootstrap-vue.js.org)

## My requirements

I rewrite my portfolio from scratch every couple of years. Each iteration has its strengths and pain points, and in doing this over and over again I've come to refine exactly what I wanted out of my personal site's codebase:

* Fast to add new content
* 100% static site
* Good looking and legible on most form factors
* Snappy and entirely cacheable
* Free to host
* Streamlined deployment process

After mulling these attributes over for a few weeks, I decided upon my guiding principles: **_simple, elegant and extensible_**.

I'm content with what I achieved in the end. I'll now expand a bit upon each requirement, why it was important to me and how I ensured my solution satisfied it.

## Fast to add new content

I write a lot of software, blog posts, tutorials, sites, and random apps. I also draw and paint. When I finish a project, if I think it could be generally useful or interesting, I like to share it. I wanted it to be trivial to add a new post: nothing more involved than writing a new markdown file and adding some images.

To achieve this, I wired together a custom markdown parsing pipeline, that allows me to write indvidual articles within either my software or blog collection, and have them perfectly formatted in an index view and a detail view.

Vue.js excels at forcing you to think in terms of robust components that can be built once and reused effortlessly across multiple views. Both my blog and software page leverage my Exhibit.vue component, which knows how to render a list of markdown posts in the overview and single post states.

### Offloading tasks to the ideal handlers

I might want to have a resume-like document or link on my site, but I do not need to re-implement LinkedIn or constantly re-generate PDF files. So I link to my LinkedIn profile and keep all of my employment history there.

I want all of [my artwork](https://instagram.com/zackproser) to be easily accessible from my site, but I don't need to re-implement a janky slideshow or lightbox presentation. So I link off to my instagram account and keep all my art there.

However, I want the exact blog experience that I want. I want the exact software showcase experience that I want. I want the exact landing page that I want, etc. These, I built myself.

## 100% static site

Static sites don't break. Having alerts fire because your portfolio site fell over when you're at work or busy with something else is infuriating. I wanted to build this site once, push it out, and only ever push incremental content updates after that.

Vue.js is a solid choice for this. You can build rich and robust single page applications, but the final build process still gives you a single index.html file that loads a single js bundle and a single css bundle.

## Good looking and legible on most form factors

Enter BootstrapVue. Vue.js syntax wrapping Bootstrap 4 components.

## Snappy and entirely cacheable

I don't need to accept form POSTs from the general public because I don't care what anyone else has to say. I don't need a backend, an API, or a database. Just an HTML file, a javascript file and a css file.

I put Cloudflare in front of my site, and tell both [Netlify](https://www.netlify.com/) and Cloudflare to aggressively cache everything, including my HTML. When I finish pushing out a release, I just purge the cache.

## Free to host

Another benefit of making this a simple static site is that Netlify will host it for me for free, since I open sourced [the project repo](https://github.com/zackproser/vue-portfolio-site).

## Streamlined deployment process

By open sourcing this codebase on GitHub, I get free hosting and deployments via Netlify. I can then add Cloudflare in front (which could also be free) for even better performance and resilience against attacks and downtime.

This means that all I need to do in order to publish a new version of my site is to get everything working locally, commit my changes, run ```$ npm run build```, commit the /dist folder changes in a release commit, and push everything up to GitHub.

Netlify picks up my push and deploys the latest /dist folder to production. Finally, I'll purge my Cloudflare cache, and my latest version is live to the world. I can do a release in about 30 seconds, start to finish.
