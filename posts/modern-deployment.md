---
title: Hosting many apps on a few bare DigitalOcean droplets
category: blog
description: How I once ran 7+ apps serving hundreds of thousands of requests per month for $35 in hosting infrastructure
image: wikka.png
---

_Disclaimer: I now work at Cloudflare._

If you maintain several sites or apps of various stacks across hosting providers, making updates to individual projects can become tedious, and your hosting fees can quickly mount beyond what you were originally comfortable paying.

Let’s get organized and employ modern tooling to drive down our hosting costs, automatically update our apps when we do a git push, and globally distribute our content so that our users experience fast loading times.

In this post I’ll step you through creating an easily maintainable, powerful and inexpensive pipeline for your side projects, web applications and client sites. This approach allowed me to bring my hosting costs down to $35 per month by running 7 apps, 3 written in PHP and 4 in Node.js, on 2 DigitalOcean virtual machines, provisioned and maintained by Laravel Forge, and protected and cached by Cloudflare.

This tutorial will cover:

*   using Laravel Forge and deployment scripts to achieve reproducible builds
*   obtaining free SSL certificates with Let’s Encrypt
*   using PM2 to daemonize your node.js applications and automatically restart them
*   configuring nginx to proxy requests to your node backend
*   configuring Cloudflare’s free tier to serve as your DNS, web proxy, and CDN for a free performance boost and analytics
*   configuring StatusCake for free uptime monitoring and alerts

The end result is a streamlined app portfolio, push-button deployments of new changes, and a stack that can handle hundreds of thousands of requests per month, all for $35 in monthly hosting fees.

## Getting set up with Laravel Forge

Laravel Forge is a service that will spin up, configure and manage servers for you. You can connect Forge with your DigitalOcean account, and it will provision servers for you via DigitalOcean’s API. You can also use a custom VPS as your deployment target if you’d prefer that.

Laravel Forge is specifically designed for the deployment and management of PHP servers to run apps built with the Laravel and Symfony web frameworks, but I’ll show you how easy it is to also deploy a node.js application using Forge.

Forge also knows how to connect to your git repository, and you can specify which branch you want Forge to watch when you’re configuring a new site. This means that, once you’ve configured an app, you have a reproducible deployment process.

Laravel forge is $15 per month, but for that subscription fee you get unlimited deployments, and you can even configure your apps for git push deployments using a feature called Quick Deployment. If you enable Quick Deployment, Forge will listen for your repo’s git commit hooks, meaning that all you need to do is push to your master branch and Forge will take care of deploying your latest code to your server automatically.

![laravel-forge-enable-quick-deployment](/do-laravel-cloudflare-screens/enable-quick-deployment.png)

Forge is a great solution if you don’t want to lose any time to provisioning and configuring servers (doing installs, adding ssh keys, etc) but instead want to focus on building apps.

You can sign up for Laravel Forge [here.](https://forge.laravel.com/auth/register)

## Create and add your ssh key

You can give Forge an ssh key, which it will automatically install on every server it provisions for you.

Let’s first create a new ssh key for this purpose - be sure to update this command with your actual email address:
```bash
$ ssh-keygen -t rsa -b 4096 -C “your-email@example.com"
```
I like to name my key after its purpose - but you can name it whatever you want:
```bash
Enter a file in which to save the key (/Users/you/.ssh/id_rsa): laravel-forge
```
If you’re on a mac you can easily copy the contents of your public key in order to add it to Forge via the UI:
```bash
$ cat ~/.ssh/laravel-forge.pub | pbcopy
```
Now navigate to My Account (The drop down menu at top right in the Forge UI) -> SSH Keys and you can save your key to your account:

![Laravel forge add ssh key](/do-laravel-cloudflare-screens/add-key.png)

## Create your first droplet

Laravel Forge integrates with DigitalOcean out of the box, and uses DigitalOcean’s REST API to provision droplets on your behalf. A droplet is a virtual machine that we can use as a host for our applications.

The $10/mo droplet is beefy enough to host a handful of smaller apps or websites and it has the following specs:

![DigitalOcean select droplet](/do-laravel-cloudflare-screens/create-droplet.png)

*   1GB of memory
*   1 core processor
*   30GB SSD Disk
*   2TB of network transfer

If you want, you can enable weekly backups for your droplet while you’re creating it - just note this will slightly increase your monthly fee.

Once Forge provisions a droplet for you, it creates a ‘forge’ user on that VM. This user will own the source files, nginx configurations, etc.

Now that we have our droplet provisioned, let’s test it to ensure everything is working properly by ssh’ing into our machine.
```bash
$ ssh -v -i ~/.ssh/laravel-forge forge@192.242.231.340
```
Let’s now add an entry to our ssh config so that we can easily obtain shell access in the future:
```bash
    Host Node3
      User forge
      IdentityFile ~/.ssh/laravel-forge
      HostName 192.242.231.340
```
And finally let’s test our new config entry:
```bash
$ ssh Node3
```
Most of the time we’ll want to allow Forge to administer the server for us, but sometimes you may want to ssh into your server all the same.

## Create your new site

Now that we have our droplet provisioned and tested and saved as a host in our ssh config, it’s time to add our first site. When we add a site via the Forge UI, a new directory for our source code, as well as a new nginx configuration that maps requests for our new host to this root, will be configured for us automatically.

For the purposes of this tutorial, I’ll use my portfolio site which is a node.js application written with the Express framework. We can leave the Project Type set to General PHP / Laravel:

![Laravel forge cloudflare](/do-laravel-cloudflare-screens/create-site.png)

Meanwhile, we’ll provide Forge with the fully qualified URL to our git repository so that it can pull down our latest source code during a deployment:

![Laravel forge add repo](/do-laravel-cloudflare-screens/add-repository.png)

## Use PM2 to manage your node.js app

PM2 is a very powerful and feature-rich process manager for node.js applications. One of the ways you can configure it to manage your application is to provide a pm2-config.json file in the root of your project, which contains a configuration object describing your application to PM2.

Let’s create a pm2-config.json file in the root of our project:
```javascript
    {
      "apps" : [{
        // Portfolio Application
        "name"        : "Zackproser.com Portfolio App",
        "script"      : "app.js",
        "args"        : [],
       "node_args"   : "",
        "merge_logs"  : true,
        "cwd"         : "/home/forge/zackproser.com/",
        "env": {
          "PORT": "3000"
        },
        "env_production" : {
           "NODE_ENV": "production",
           "PORT": "3000"
        }
      }]
    }
```
This configuration gives our node application a name, which we’ll be able to use later to start and stop our process, defines the entry point as app.js, and allows us to specify which port we want our application to listen on.

PM2 can do a lot, and you can find its complete documentation here. For our purposes, we just need PM2 to start and stop our node applications during deployments, and to monitor them and automatically restart them if they should die for any reason.

Now that we have our pm2-config.json file in the root of our project, we can ssh into our DigitalOcean vm and globally install pm2, so that it can be used to managed all of our node apps:
```bash
$ npm i -g pm2@latest
```
## Configure your deployment script

One of the best features of Laravel Forge is the ability to define a custom deployment script. Use these to run any commands you want - Forge will execute it every time it deploys a new version of your application.

Lets take a look at a deployment script for our node.js express app, now that we can use PM2 to start and stop our application:
```bash
cd /home/forge/zackproser.com
#Pull down latest code
git pull origin master
#Install all node dependencies
npm i
#Stop and kill previous instance of this application
pm2 stop "Zackproser.com Portfolio App"
#Daemonize portfolio application
pm2 start pm2-config.json
```

In this example, we pull the latest code from our project’s master branch, install any node modules, stop any previous instance of the PM2 managed application, which we can do by name since we defined one in our pm2-config.json. This is a handy way to have PM2 manage several different node apps simultaneously. We can even ask pm2 for an easy to read status report:
```bash
$ pm2 status
```
![PM2 status](/do-laravel-cloudflare-screens/pm2-status.png)

## Proxy requests to your node.js backend

When Forge created our site, it automatically created an nginx config for us as well, loaded it onto our server and reloaded the nginx service so our changes would go live.

Forge was primarily designed to deploy PHP apps, but it’s simple enough to get a node application running behind nginx. We just need to take advantage of nginx’s excellent built-in proxy capabilities.

To modify your site’s nginx configuration, while viewing your site page in the Forge UI, scroll down to the bottom of the page and find the Edit Files button - click that and then the Edit Nginx Configuration link that will appear.

You’ll notice that Forge has built the nginx configuration from a template, based partially on our configuration values for this site. You definitely want to leave all of the includes that forge adds before and after the server block - else you risk making your site inoperable.

The section that we’re interested in is the location block that begins with /. For a standard PHP or Laravel site, the default setting of try_files works well. In our case, we’re running a node.js process that’s bound to a specific port on our virtual machine, so we need to tell nginx that, for this particular site, inbound requests should be proxied to the node process running our application:
```nginx
     location / {
            proxy_pass http://192.241.231.340:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
```
Nginx will now pass incoming requests for this hostname to our Express application and return the response it generates to the requesting client.

## Test your deployment process

We’ve got everything configured now. It’s time to ensure everything is working properly by making a small change to our app and letting Forge execute a deployment.

If you have QuickDeploy enabled, make a small change of some kind (perhaps adding a new html meta tag in your header), commit your change and then:
```bash
$ git push origin master
```
If you don’t have QuickDeploy enabled, you can commit your code, push your changes up to your origin repository and then click the Deploy Now button on your site’s page in the Forge UI.

## Obtain your SSL cert with Let’s Encrypt

We should always strive to deliver our web content over SSL, in order to provide our users with a more secure experience. Buying and maintaining certificates for each new site or app used to be expensive, but thankfully today we have [Let’s Encrypt.](https://letsencrypt.org/)

Let’s Encrypt is a certificate authority that provides SSL certificates for free. They do this in order to lower the barrier to entry for people to obtain certificates, and therefore foster more widespread adoption of SSL. Even better, Laravel Forge automates obtaining, configuring, and renewing Let’s Encrypt certificates for us.

All you need in order to make this happen is a registered domain name that you control, which should match your site name in Forge.

In the Site Details menu on the left hand sidebar, click SSL. Next, click LetsEncrypt. This next part is important. Before you click Obtain Certificate, ensure that you provide both your domain name without www, followed by a comma, followed by your domain name with www, as shown in this screenshot:

![LetsEncrypt certificate](/do-laravel-cloudflare-screens/obtain-certificate.png)

When you click Obtain Certificate, Forge will take your domains string and post it back to a service that calls Let’s Encrypt’s API. You need to tell Let’s Encrypt which domains the resulting certificate should be valid for. You should request both versions of your domain (www. and naked) - otherwise some of your users may see certificate errors, security warnings, or be unable to access your site at all.

Once your certificate is obtained, it will show up below the form with a status: Installed, but not yet Active. Click the link to activate your certificate - which will modify your site’s nginx config to configure and turn on SSL termination using your new certificate. Once that step completes, test out your site by visiting:
```bash
https://<your-domain-name>
```
You should see a green lock icon in the top left of your browser’s address bar - with no warning or exclamation point icons. If there are issues, open your browser’s developer tools to view any errors in the console.

One of the most common culprits will be mixed content warnings - which occur if you’re trying to load assets (such as Javascript libraries or SDKs, images, advertisements, animations, etc) over http - even though your site is configured to use SSL. This is a security issue that browsers will complain about. If you see mixed content warnings in your console, you will need to update your application to request those assets over https. You can (change the links from http:// to https://).

You can find more resources for dealing with this common issue [here.](https://support.cloudflare.com/hc/en-us/articles/200170476-How-do-I-fix-the-SSL-Mixed-Content-Error-Message-)

## Use Google PageSpeed to test your site

Google built [a tool](https://developers.google.com/speed/pagespeed/insights/) for testing how performant your site is - and how the overall site performs on both mobile and desktop form factors.

Let's take a look at how our site is measuring up now that we have our app deployed and securely delivered over SSL by going to Google's pagespeed tool and submitting the URL to our site:

![Google PageSpeed tool](/do-laravel-cloudflare-screens/unminified-fails.png)

Not bad, but we can also use Cloudflare’s free plan for a big performance boost.

## Configure Cloudflare’s Free Plan

[Cloudflare](https://www.cloudflare.com) will:

*   Handle our DNS resolution
*   Cache our application and distribute it to the edge (a global network of over 117 data centers at the time of this writing) so that our users get the best possible experience
*   Provide us with detailed analytics

## Create a Cloudflare account and configure your DNS records

Now that our site is up and running and we have automated deployments in place, we can leverage Cloudflare for several benefits out of the box:

Caching and global distribution of our content (so that users get our page from a server that’s close to them geographically)

*   DDoS protection
*   Speedy DNS resolution
*   Web traffic analytics

It usually takes about 5 minutes or less to get up and running with Cloudflare, and the performance boost your site may experience is often significant.

Follow [this guide](https://support.cloudflare.com/hc/en-us/articles/201720164-Step-2-Create-a-Cloudflare-account-and-add-a-website) to quickly configure the free Cloudflare plan and point it at your site.

## Configure Full SSL

Since we took the time to configure HTTPS for our site, we can take advantage of the Full SSL setting in our Cloudflare account.

The benefit of full SSL is that the connection from our web server (our droplet) to Cloudflare, is encrypted, as is the connection from Cloudflare to our end users consuming our content.

Now that our site is stood up, securely delivering content over SSL and protected and accelerated by Cloudflare, let’s see how we’re doing in terms of overall site health, load time, page weight - all of which will factor into how well our site will perform in search results:

![Google PageSpeed improvements](/do-laravel-cloudflare-screens/insight-improvements.png)

We can see that Cloudflare has already given us a lot of the caching and minification best practices for free.

## Set up StatusCake for free monitoring

Now that we have our app configured and deployed, lets set up free monitoring with [StatusCake.](https://www.statuscake.com/) StatusCake will send us an email if any of our monitored sites go down so that we can be alerted to issues and repair them quickly.

## Questions? Comments?

That's it for this walkthrough. If you see anything incorrect, or have questions or suggestions, feel free to email me [here.](mailto:zackproser@gmail.com)