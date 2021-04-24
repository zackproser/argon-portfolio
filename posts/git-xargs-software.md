---
title: git-xargs
category: software
description: Git-xargs allows you to run commands and scripts against many Github repos simultaneously
image: git-xargs-banner.png
tags: Golang, CLI, Productivity, Open-source
---

## Demo

![git-xargs-demo](/git-xargs-demo.gif)

## Intro

have you ever needed to add a particular file across many repos at once? Or to run a search and replace to change your company or product name across 150 repos with one command? What about upgrading Terraform modules to all use the latest syntax? How about adding a CI/CD configuration file, if it doesn’t already exist, or modifying it in place if it does, but only on a subset of repositories you select?

You can handle these use cases and many more with a single git-xargs command. Just to give you a taste, here’s how you can use git-xargs to add a new file to every repository in your Github organization:

```bash

git-xargs \
  --branch-name add-contributions \
  --github-org my-example-org \
  --commit-message "Add CONTRIBUTIONS.txt" \
  touch CONTRIBUTIONS.txt
```

In this example, every repo in the my-example-org GitHub org have a CONTRIBUTIONS.txt file added, and an easy to read report will be printed to STDOUT :

![git-xargs report](/git-xargs-table.png)

## Try it out

git-xargs is free and open-source - so you can grab it here: [https://github.com/gruntwork-io/git-xargs](https://github.com/gruntwork-io/git-xargs)

## Learn more

Read [the introductory blog post](https://blog.gruntwork.io/introducing-git-xargs-an-open-source-tool-to-update-multiple-github-repos-753f9f3675ec) to better understand what git-xargs can do and its genesis story.
