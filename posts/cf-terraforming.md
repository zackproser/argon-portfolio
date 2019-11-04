---
title: Cf-terraforming state exporter tool
category: software
description: cf-terraforming allows you to instantly replicate your Cloudflare account and zone state into valid terraform state files
image: wikka.png
tags: Open-source, Golang, Cloudflare, CLI
---
[Get the source code](https://github.com/cloudflare/cf-terraforming)

[Read the blog post](https://blog.cloudflare.com/introducing-cf-terraform/)

Cf-terraforming is a command line utility written in Go that lets you download your Cloudflare API resources into [Terraform HCL config format.](https://www.terraform.io/docs/configuration/syntax.html)

This makes it ideal for users who want to migrate their Cloudflare setup into Terraform but don't want to write all the config files from scratch.

We're currently extending cf-terraforming to export and save terraform state as well, which will streamline the process of migrating even further.

## Example usage

* * *

Let’s say you’re migrating your Cloudflare configuration to Terraform and you want to describe your Spectrum applications. You simply call cf-terraforming with your credentials, zone, and the spectrum_application command, like so:

```bash
go run cmd/cf-terraforming/main.go --email $CLOUDFLARE_EMAIL --key $CLOUDFLARE_TOKEN --account $CLOUDFLARE_ACCT_ID spectrum_application
```

Cf-terraforming will contact the Cloudflare API on your behalf and define your resources in a format that Terraform understands:

```bash
resource"cloudflare_spectrum_application""1150bed3f45247b99f7db9696fffa17cbx9" {
    protocol = "tcp/8000"
    dns = {
        type = "CNAME"
        name = "example.com"
    }
    ip_firewall = "true"
    tls = "off"
    origin_direct = [ "tcp://37.241.37.138:8000", ]
}
```

## Technical details and takeaways

* * *

Cf-terraforming required us to become intimately familiar with Terraform's HCL format as well as Terraform's state management system.

It works by wrapping [Cloudflare Go](https://github.com/cloudflare/cloudflare-go) and contacting the Cloudflare API on the user's behalf.

For command flag parsing and CLI scaffolding we used the excellent [Viper](https://github.com/spf13/viper) and [Cobra](https://github.com/spf13/cobra) libraries.

There are two modes you can run cf-terraforming in: the default mode will generate Terraform HCL for the resources you specify. The second mode allows you to export the actual Terraform state file contents for your given resources.

In order to pull this off, we made use of [Cobra's pre and post run hooks.](https://github.com/spf13/cobra#prerun-and-postrun-hooks) This allows us to encapsulate state generation logic within each command, and leave the state file scaffolding to a post run function.