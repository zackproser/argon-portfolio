---
title: Speakeasy Golang client for Twilio
category: software
description: Sends SMS messages and makes phone calls
image: speakeasy-blog.png
tags: Golang, Twilio, Open-source
---
![Speakeasy Twilio go](/speakeasy.png)

## Project source

[View and clone the project here](https://github.com/zackproser/speakeasy)

## Project overview

This package is a simple way to add outbound Twilio-powered SMS and Phone calls to your Golang project.

## Getting Started

Grab the package from GitHub:

```bash
# From within your $GOPATH
go get github.com/zackproser/speakeasy
```

Add it to your project:
```go
package main

import (
  "fmt"
  "github.com/zackproser/speakeasy"
)
```
Instantiate Speakeasy with your SID, AuthToken and a valid Twilio number:
```go
  func main() {
    //Instantiate Speakeasy with your account SID, AuthToken and Twilio number
    s := speakeasy.New("AC49a43r78fh717463fce21dsfue6ae", "8211129a9d43c587eftxbdh39c859666", "+555-555-5555")

    //Send an SMS
    res, err := s.SMS("+14158675309", "Hello from Speakeasy")

    if err != nil {
      fmt.Printf("Error sending SMS: %v", err)
    }

    fmt.Printf("Response: %v", res)

    /*
       Response: &{201 CREATED 201 HTTP/1.1 1 1 map[Content-Type:[application/json] Strict-Transport-Security:[max-age=15768000] Connection:[keep-alive] Date:[Sat, 09 Sep 2017 19:39:40 GMT] Twilio-Request-Duration:[0.196] Access-Control-Allow-Credentials:[true] Access-Control-Allow-Origin:[*] Access-Control-Expose-Headers:[ETag] Access-Control-Allow-Headers:[Accept, Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since] X-Powered-By:[AT-5000] Content-Length:[809] Access-Control-Allow-Methods:[GET, POST, DELETE, OPTIONS] Twilio-Request-Id:[RQa8d333f847d8499da056f5b1a1127e9e] X-Shenanigans:[none]] 0xc420298140 809 [] false false map[] 0xc420100000 0xc4200a42c0}
    */

    //Make a phone call
    callRes, callErr := s.Call("+15103267023", "http://twimlets.com/echo?Twiml=%3CResponse%3E%3CSay%3EWelcome+to+speak+easy.%3C%2FSay%3E%3C%2FResponse%3E")

    if callErr != nil {
      fmt.Printf("Error making Call: %v", callErr)
    }

    fmt.Printf("Response: %v", callRes)

    /*
       Response: &{201 CREATED 201 HTTP/1.1 1 1 map[Twilio-Request-Id:[RQ93f0ae3be3f84a0dba4957bcf64643f5] Access-Control-Allow-Methods:[GET, POST, DELETE, OPTIONS] Twilio-Request-Duration:[0.125] Content-Length:[1016] Connection:[keep-alive] Access-Control-Allow-Headers:[Accept, Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since] Strict-Transport-Security:[max-age=15768000] Date:[Sat, 09 Sep 2017 19:46:26 GMT] X-Powered-By:[AT-5000] Access-Control-Allow-Credentials:[true] Content-Type:[application/json] X-Shenanigans:[none] Access-Control-Allow-Origin:[*] Access-Control-Expose-Headers:[ETag]] 0xc42029c140 1016 [] false false map[] 0xc420106000 0xc4200a62c0}
    */
  }
```