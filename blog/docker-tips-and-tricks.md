---
title: Docker tips and tricks
category: blog
description: Helpful shortcuts and cli tips for Docker
image: wakka.png
---
Here are some helpful tips I've discovered while working with Docker:

### Get just the image or container IDs

The -q flag is your friend when you're scripting out Docker commands. It stands for "quiet" and you can use across multiple Docker commands. For example:

```bash
docker ps -q

z57uyf7022ds
f65f7022988d
sd38r7f70229
csji37022988
```

This makes the q flag ideal for composing commands where the IDs of a group of images or containers into another Docker command like so:

**Stop all running Docker containers**
```bash
docker stop $(docker ps -q)
```
**Tail the logs of all running containers**
```bash
docker logs -f $(docker ps -q)
```
**Remove all stopped containers**
```bash
docker rmi $(docker ps -aq)
```
### Use xargs

You can also use xargs when building multi-step Docker commands:

**Docker stop running containers, if they exist**
```bash
docker ps -q | xargs -r docker stop
```
By passing the xargs --no-run-if-empty or -r flag we are stating that the command, in this case Docker stop, should only be executed if the previous pipe generated output, which is to say if there actually are any Docker containers running.

## Space management

One of the things you're likely to come up against when working with Docker is the amount of space that orphaned or unused images, layers and containers take up. Eventually you will get some strange error message during a build that you follow to a realization that your local Docker installation has already chewed through all the disk space that was alloctated for it to use.

**Run containers with the -rm flag**

Running containers while passing the -rm flag will remove the container once you've exited. This makes it ideal for when you're running containers locally in order to test your builds, and will help you keep a handle on the disk space Docker is using.

### Cron job: remove all old containers

Your Dockerized staging hosts will eventually encounter the same problem. I like to create cron jobs that run to regularly prune unused Docker images:

Here's a good one that comes from [Jérôme Petazzoni](https://twitter.com/jpetazzo/status/347431091415703552)
```bash
docker ps -a | grep 'weeks ago' | awk '{print $1}' | xargs docker rm
```
You can put that in a script and have a cron job run it once a week on your staging host.

### Transfer a Docker image without using a registry

Did you know that you can export a Docker image to a tar file for sharing, whenever you don't have the use of a registry for pushing and pulling images?

The Docker save command takes a Docker image id and can output a tarfile like so:
```bash
    docker save a3df > latest.tar
```
## Utility Scripts

### Docker staging script

Speaking of using docker save to export tarfiles, here's a handy Docker staging script I wrote that only requires a single linux machine. If you are developing your Dockerized app locally on your machine, you can run this script to stage your latest work for you automatically.

This script assumes that your host is running Docker and that you have ssh configured. Change the STAGING_IP variable to your machine's address:
```bash
    #!/usr/bin/env bash

    # This script will build and stage a docker image on a linux box

    echo "This will stage the branch: $(git rev-parse --abbrev-ref HEAD
    )"

    stage ()
    {
      STAGING_IP=127.0.0.1

      echo "Building docker image. Standby..."

      # grab docker
      IMAGE_ID=$(docker build . | grep "Successfully built " | cut -d ' ' -f 3)

      TARBALL="$IMAGE_ID.tar"

      echo "Exporting container for transfer, standby..."

      docker save $IMAGE_ID > $TARBALL

      echo "Created tarball of docker image: $TARBALL"

      echo "Transferring Docker image to staging. Please standby..."
      scp $TARBALL root@docker-staging:/var/stage

      echo "Running Docker image on staging. Please standby..."

      # This runs a command over ssh on your VM to load your Docker image, stop any running Docker images and then run your new image in detached mode
      ssh docker-staging "cd /var/stage/ && docker load < $TARBALL && docker ps -q | xargs -r docker stop && docker run -d -p 80:80 -p 443:443 $IMAGE_ID"

      echo "Cleaning up local tarball..."
      rm $TARBALL

      echo "Staging complete!"
      open http://$STAGING_IP
    }

    while true; do
        read -p "Do you want to continue?" yn
        case $yn in
            [Yy]* ) stage; break;;
            [Nn]* ) exit;;
            * ) echo "Yes or no?";;
        esac
    done
```
This is a handy bash script for including in your project's source code, especially if your project has more than one developer working on it.

This script will:

*   Docker build in the current directory
*   capture the resulting Docker image ID
*   Docker save the image to a tarfile
*   scp the tarfile to your vm
*   Load the tarfile into your vm's Docker daemon
*   Docker stop whatever images are currently running on your vm
*   Docker run your new image
*   Open your staging machine's IP address in a browser tab

### Referencing images and containers with shorthand

Did you know that you can often reference a Docker image or container using just the first 3 characters of its ID?
```bash
docker images

z57uyf7022ds

docker run -it -p 80:80 z57
```
### Use Docker prune

As of Docker 1.13, you can use Docker's prune command. Here's [a stackoverflow answer](https://stackoverflow.com/questions/32723111/how-to-remove-old-and-unused-docker-images) detailing its usage.

This would also be a good candidate for a cron job that regularly frees up resources.