<template>
<div class="container pb-5">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row row-grid">
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i class="ni ni-book-bookmark"></i>
                    </div>
                    <h6 class="text-primary text-uppercase">Super CatFacts Service in Golang and K8s</h6>
                    <p class="description mt-3">I built a ridiculously over-engineered CatFacts service in Golang as an example of a clean and maintainable web service. Then I deployed it to Google Cloud via Kubernetes.</p>
                    <h6 class="text-success text-uppercase">medium</h6>
                    <div>
                      <span class="badge badge-pill badge-primary">Golang</span>
                      <span class="badge badge-pill badge-primary">Kubernetes</span>
                      <span class="badge badge-pill badge-primary">Tutorial</span>
                    </div>
                    <a href="https://medium.com/swlh/building-a-catfacts-pranking-service-in-golang-5b51e8721fe2?source=friends_link&sk=8b97968fa6fdbf51cbb0bd3b5983c674" class="btn btn-primary mt-4">Read</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape icon-shape-success rounded-circle mb-4">
                      <i class="ni ni-books"></i>
                    </div>
                    <h6 class="text-success text-uppercase">Cf-terraforming Terraform export utility</h6>
                    <p class="description mt-3">We wrote a Golang CLI that lets you export your Cloudflare resources into Terraform config and state files.</p>
                    <h6 class="text-warning text-uppercase">Cloudflare blog</h6>
                    <div>
                      <span class="badge badge-pill badge-success">Golang</span>
                      <span class="badge badge-pill badge-success">CLI</span>
                      <span class="badge badge-pill badge-success">Terraform</span>
                    </div>
                    <a href="https://blog.cloudflare.com/introducing-cf-terraform/" class="btn btn-success mt-4">Read</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-5">
                    <div class="icon icon-shape icon-shape-warning rounded-circle mb-4">
                      <i class="ni ni-book-bookmark"></i>
                    </div>
                    <h6 class="text-warning text-uppercase">Dogfooding Cloudflare Workers</h6>
                    <p class="description mt-3">We wrote a worker and put it in front of api.cloudflare.com and dash.cloudflare.com to handle graceful TLS deprecation and to help test the platform.</p>
                    <h6 class="text-warning text-uppercase">Cloudflare blog</h6>
                    <div>
                      <span class="badge badge-pill badge-warning">Javascript</span>
                      <span class="badge badge-pill badge-warning">Serverless</span>
                      <span class="badge badge-pill badge-warning">Workers</span>
                    </div>
                    <a href="https://blog.cloudflare.com/dogfooding-edge-workers/" class="btn btn-warning mt-4">Read</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'recent-writings'
}
</script>