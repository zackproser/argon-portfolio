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
                                    <base-button type="default" size="sm" class="float-right"><i class="fab fa-github mr-2"></i>GitHub</base-button>
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
                            <div class="h6 mt-4 font-weight-800"><i class="ni business_briefcase-24 mr-2"></i>Software Engineer</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>I am a full-stack software engineer currently working at Cloudflare.</p>
                                    <a href="#">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
        <section class="section pb-0 bg-gradient-warning">
            <h4 class="display-4 text-white m-4">Working with me</h4>
            <testimonial-carousel></testimonial-carousel>
        </section>
    </div>
</template>
<script>
import TestimonialCarousel from '~/components/TestimonialCarousel.vue'

export default {
  layout: 'argon-demo',
  components: {
      TestimonialCarousel
  }
};
</script>
<style>
</style>
