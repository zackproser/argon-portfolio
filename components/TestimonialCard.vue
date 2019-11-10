<template>
  <b-carousel-slide img-blank>
    <div class="container">
        <div class="row">
          <div class="col-12 mb-5">
                <div class="card card-lift--hover shadow border-0">
                    <div class="card-body py-5">
                        <img :src="imgSrc" :alt="imgAlt" class="rounded-circle">
                        <h6 class="display-4 mt-4 text-warning text-uppercase">
                            {{ name }}
                        </h6>
                        <h6 class="display-4 text-warning">
                            {{ title }}
                        </h6>
                        <p class="lead m-4">
                          <span style="color: Tomato">
                            <i class="fa fa-quote-left mr-2"></i>
                          </span>
                            {{ quote }}
                          <span style="color: Tomato;">
                            <i class="fa fa-quote-right ml-2"></i>
                          </span>
                        </p>
                        <nuxt-link class="text-warning " to="/testimonials">View all Testimonials</nuxt-link>
                    </div>
                </div>
            </div>
        </div><!--/row-->
    </div><!--/container-->
  </b-carousel-slide>
</template>

<script>

export default {
  name: 'testimonial-card',
  props: ['imgSrc', 'imgAlt', 'quote', 'name', 'title']
}

</script>

<style>
p {
    color: black;
}

.testimonial-item {
  width: 100%;
}

.testimonial-credits {
  margin-top: 10px;
  display: block;
  position: relative;
}

.testimonial-author {
  display: inline-block;
  font-size: 18px;
  font-family: Oswald, Helvetica, sans-serif;
  color: #222;
  margin: 0;
  font-weight: 500;
}

.testimonial-author-info {
  display: inline-block;
  position: relative;
  padding-left: 92px;
}

.testimonial-content {
  width: 100%;
  height: auto;
}

.testimonial-content .testimonial-text {
  padding: 1.4em 1.8em;
  font-style: italic;
  background-color: #fcfcfc;
  border-radius: 6px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border: 2px solid #e5e5e5;
  width: 100%;
  position: relative;
  margin: 0;
  z-index: 1;
}

.testimonial-content .testimonial-text p {
  margin: 0;
  color: #000;
}

.testimonial-picture {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin: 0;
  top: -40px;
  border-radius: 40px;
  z-index: 1;
}

.testimonial-picture img {
  width: 100%;
  border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  border: 2px solid #ddd;
}

div.carousel-caption {
    position: initial !Important;
    padding-top: 0px;
}

img.img-fluid.w-100.d-block {
    display: none !Important;
}

</style>