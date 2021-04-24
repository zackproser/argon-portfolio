<template>
  <div class="profile-page">
    <section class="section-profile-cover bg-gradient-success my-0"></section>
    <section class="section section-skew bg-gradient-info">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img
                      alt="Zack Proser profile"
                      v-lazy="'/zack-proser.jpeg'"
                      class="rounded-circle"
                    />
                  </a>
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0">
                  <a href="https://linkedin.com/in/zackproser"
                    ><base-button type="info" size="sm" class="mr-4"
                      ><i class="fab fa-linkedin mr-2"></i>
                      LinkedIn</base-button
                    ></a
                  >
                  <a href="https://github.com/zackproser"
                    ><base-button type="default" size="sm" class="float-right"
                      ><i class="fab fa-github mr-2"></i>GitHub</base-button
                    ></a
                  >
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div
                  class="card-profile-stats d-flex justify-content-center"
                ></div>
              </div>
            </div>
            <div class="text-center mt-5">
              <h2>
                Zack Proser
                <span class="font-weight-light"></span>
              </h2>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>
                    I am a full-stack
                    <nuxt-link class="text-link" to="/software"
                      >software engineer</nuxt-link
                    >
                    and
                    <a href="https://art.zackproser.com" class="text-link"
                      >artist</a
                    >
                    at
                    <a href="https://gruntwork.io/"
                      ><span class="text-primary company-name"
                        >Gruntwork.io</span
                      >.</a
                    >
                    I
                    <a href="https://github.com/zackproser" class="text-link"
                      >open source</a
                    >
                    much of my software and
                    <nuxt-link to="/articles" class="text-link"
                      >write technical tutorials and articles</nuxt-link
                    >.
                  </p>
                  <p>My technical writing has appeared on:</p>

                  <b-button-group>
                    <b-button
                      variant="warning"
                      href="https://blog.cloudflare.com/author/zackp/"
                      >The Cloudflare Blog
                    </b-button>
                    <b-button
                      variant="info"
                      href="https://itnext.io/building-the-ultimate-portfolio-site-with-nuxt-js-and-netlify-beautiful-blazing-fast-100-seod-102913a60cfd"
                      >ITNEXT
                    </b-button>
                    <b-button
                      variant="danger"
                      href="https://levelup.gitconnected.com/hacking-iframe-badges-into-auto-updating-github-profile-images-with-aws-lambda-and-golang-d6fbf78d6f6d"
                      >gitconnected
                    </b-button>
                    <b-button
                      variant="light"
                      href="https://medium.com/swlh/building-a-catfacts-pranking-service-in-golang-5b51e8721fe2"
                      >Start it up
                    </b-button>
                    <b-button
                      variant="success"
                      href="https://blog.gruntwork.io/introducing-git-xargs-an-open-source-tool-to-update-multiple-github-repos-753f9f3675ec"
                      >The Gruntwork Blog
                    </b-button>
                  </b-button-group>

                  <p class="mt-3">
                    I am also a certified AWS Solutions Architect Associate,
                    Hashicorp Terraform Associate and AWS Cloud Practitioner.
                  </p>
                </div>
                <div class="container">
                  <div class="row row-fluid">
                    <div class="col-4">
                      <a
                        href="https://www.youracclaim.com/badges/baf2a178-fbb6-4e3b-bee3-a4e51bf1ecb4/public_url"
                      >
                        <img
                          class="img shadow certification"
                          alt="AWS Solutions Architect Associate"
                          v-lazy="'/aws-solutions-architect-assoc.png'"
                        />
                      </a>
                    </div>
                    <div class="col-4">
                      <a
                        href="https://www.youracclaim.com/badges/db9c63f6-1449-441d-b1b4-19b4fb3c76e5/public_url"
                      >
                        <img
                          class="img shadow certification"
                          alt="Terraform Associate"
                          v-lazy="'/terraform-associate.png'"
                        />
                      </a>
                    </div>
                    <div class="col-4">
                      <a
                        href="https://www.youracclaim.com/badges/94158be5-a0ea-4de4-9c66-5c087fac246e/public_url"
                      >
                        <img
                          class="img shadow certification"
                          alt="AWS Cloud Practitioner"
                          v-lazy="'/aws-cloud-practitioner.png'"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <section class="section pb-0 bg-gradient-warning">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pb-5">
            <nuxt-link to="/testimonials">
              <h1 class="display-3  text-white">Testimonials</h1>
            </nuxt-link>
            <p class="lead  text-white">
              <nuxt-link class="text-link text-white" to="/testimonials"
                >Read what my colleagues have to say</nuxt-link
              >
              about working with me.
            </p>
          </div>
        </div>
      </div>
      <testimonial-carousel></testimonial-carousel>
    </section>
    <section class="section pb-0 bg-gradient-primary">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pb-5">
            <nuxt-link to="/articles">
              <h1 class="display-3  text-white">Technical writing</h1>
            </nuxt-link>
            <p class="lead  text-white">
              I share what I've learned
              <nuxt-link to="/articles" class="text-link text-white"
                >through tutorials and technical deep dives.</nuxt-link
              >
            </p>
          </div>
        </div>
        <recent-writings></recent-writings>
      </div>
    </section>
    <section class="section bg-gradient-info">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 pb-5">
            <h1 class="display-3  text-white">Work experience</h1>
            <p class="lead  text-white">
              I have over {{ yearsExperience }} years of experience in full
              stack development.
            </p>
          </div>
        </div>
        <div class="row row-grid align-items-center">
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">Gruntwork.io</h5>
                      <h4 class="title display-6 text-warning">
                        Software Engineer
                      </h4>
                      <ul>
                        <li>DevOps automation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">Cloudflare</h5>
                      <h4 class="title display-6 text-warning">
                        Software Engineer
                      </h4>
                      <ul>
                        <li>
                          Core engineering team responsible for Cloudflare's
                          control plane
                        </li>
                        <li>Full stack systems design and engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">Cloudmark</h5>
                      <h4 class="title display-5 text-warning">
                        Software Engineer
                      </h4>
                      <ul>
                        <li>Build systems, UI and microservice development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">
                        Johns Hopkins
                      </h5>
                      <h4 class="title display-5 text-warning">
                        Software Engineer
                      </h4>
                      <ul>
                        <li>
                          Bespoke web application development for clinical trial
                          projects
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 order-lg-1">
            <div class="card shadow shadow-lg--hover mt-5">
              <div class="card-body">
                <div class="d-flex-3">
                  <div>
                    <div
                      classs="icon icon-shape bg-gradient-success rounded-circle text-white"
                    ></div>
                    <div class="pl-4">
                      <h5 class="title display-4 text-warning">
                        BrightContext
                      </h5>
                      <h4 class="title display-5 text-warning">
                        Software Engineer
                      </h4>
                      <ul>
                        <li>
                          Employee #9 of realtime stream processing engine
                          startup
                        </li>
                        <li>Acquired by WealthEngine</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import TestimonialCarousel from '~/components/TestimonialCarousel.vue'
import RecentWritings from '~/components/RecentWritings.vue'

export default {
  layout: 'zack-proser',
  components: {
    TestimonialCarousel,
    RecentWritings,
  },
  data() {
    return {
      yearsExperience: Math.abs(
        new Date('January 1 2012').getFullYear() - new Date().getFullYear()
      ),
    }
  },
}
</script>
<style>
img {
  max-width: 100%;
}

.publication-list {
  list-style-type: none;
}

.card-body {
  max-width: 100%;
}
.text-link {
  color: black;
  text-decoration: underline;
}
.text-link:hover {
  color: black;
}
.company-name {
  font-weight: 800;
}
</style>
