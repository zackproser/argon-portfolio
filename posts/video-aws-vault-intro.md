---
title: Video - Mastering Fast, Secure AWS Access with open source tool aws-vault 
category: blog 
description: aws-vault is a powerful open source tool that allows you to define your AWS accounts as configuration, with your credentials stored safely in your operating system's secret store. It also handles multi-factor authentication (sending your TOTP token) and is a much more efficient way to access multiple AWS accounts.
tags: aws, cloud, command-line
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/G9eIAb0B-zs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In this YouTube video, I demonstrate how to use the open-source Golang tool, aws-vault, for securely managing access to multiple AWS accounts. aws-vault stores your permanent AWS credentials in your operating system's secret store or keyring and fetches temporary AWS credentials from the AWS STS endpoint. This method is not only secure but also efficient, especially when combined with Multi-Factor Authentication.

In this video, I demonstrate the following aspects of aws-vault:

  * Executing arbitrary commands against your account: The video starts by showing how aws-vault can be used to execute any command against your AWS account securely. By invoking aws-vault with the appropriate profile name, you can fetch temporary AWS credentials and pass them into subsequent commands, ensuring a secure way of managing AWS access.

  * Quick AWS account login: Next, I show how to use aws-vault to log in to one of your AWS accounts quickly. This feature is particularly helpful for developers and system administrators who manage multiple AWS accounts and need to switch between them frequently.

  * Integration with Firefox container tabs: One of the most exciting parts of the video is the demonstration of how aws-vault can be used in conjunction with Firefox container tabs to log in to multiple AWS accounts simultaneously. This innovative approach allows you to maintain separate browsing sessions for each AWS account, making it easier to manage and work with different environments.

The video emphasizes how using aws-vault can significantly improve your command line efficiency and speed up your workflow while working with various test and production environments. 
If you're a developer or system administrator looking to enhance your AWS account management skills, this YouTube video is for you. 


