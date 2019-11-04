<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a fhref="#">
                                        <img v-lazy="'/zack-proser.jpeg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="https://linkedin.com/in/zackproser"><base-button type="info" size="sm" class="mr-4"><i class="fab fa-linkedin mr-2"></i> Connect</base-button></a>
                                    <a href="https://github.com/zackproser"><base-button type="default" size="sm" class="float-right"><i class="fab fa-github mr-2"></i>GitHub</base-button></a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">

                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>Zack Proser
                                <span class="font-weight-light"></span>
                            </h3>
                            <nuxt-link to="/software">
                                <div class="h6 mt-4 font-weight-800">
                                <h6 class="text-warning display-4">Software Engineer</h6>
                                </div>
                            </nuxt-link>
                            <a href="https://art.zackproser.com">
                                <div class="h6 mt-4 font-weight-800">
                                <h6 class="text-success display-4">Artist</h6>
                                </div>
                            </a>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>I am a full-stack <nuxt-link class="text-link" to="/software">software engineer</nuxt-link> and <a href="https://art.zackproser.com" class="text-link">artist</a> currently working at <a href="https://cloudflare.com"><span class="text-warning">Cloudflare</span>.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section pb-0 bg-gradient-warning">
            <testimonial-carousel></testimonial-carousel>
        </section>
        <section class="section bg-gradient-info">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <h5 class="display-3 text-white text-center">Work Experience</h5>
                </div>
                <div class="row row-grid align-items-center">
                    <p class="text-white font-weight-800">I have over {{ yearsExperience }} years of experience in full stack development.</p>
                </div>
                <div class="row row-grid align-items-center">
                    <div class="col-lg-12 order-lg-1">
                        <div class="card shadow shadow-lg--hover mt-5">
                            <div class="card-body">
                                <div class="d-flex-3">
                                    <div>
                                        <div classs="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                                        <div class="pl-4">
                                            <h5 class="title display-4 text-warning">Cloudflare</h5>
                                            <h4 class="title display-6 text-warning">Software Engineer</h4>
                                            <ul>
                                                <li>Core engineering team responsible for Cloudflare's control plane</li>
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
                                        <div classs="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                                        <div class="pl-4">
                                            <h5 class="title display-4 text-warning">Cloudmark</h5>
                                            <h4 class="title display-5 text-warning">Software Engineer</h4>
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
                                        <div classs="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                                        <div class="pl-4">
                                            <h5 class="title display-4 text-warning">Johns Hopkins</h5>
                                            <h4 class="title display-5 text-warning">Software Engineer</h4>
                                            <ul>
                                                <li>Bespoke web application development for clinical trial projects</li>
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
                                        <div classs="icon icon-shape bg-gradient-success rounded-circle text-white"></div>
                                        <div class="pl-4">
                                            <h5 class="title display-4 text-warning">BrightContext</h5>
                                            <h4 class="title display-5 text-warning">Software Engineer</h4>
                                            <ul>
                                                <li>Employee #9 of realtime stream processing engine startup</li>
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

export default {
  layout: 'zack-proser',
  components: {
      TestimonialCarousel
  },
  data () {
      return {
          yearsExperience: Math.abs(new Date("January 1 2012").getFullYear() - new Date().getFullYear())
      }
  }
};
</script>
<style>
img {
    max-width: 100%;
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
</style>
