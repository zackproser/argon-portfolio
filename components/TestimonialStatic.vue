<template>
  <div class="testimonial-item">
    <!-- Testimonial Content -->
    <div class="testimonial-content">
      <div class="testimonial-text">
        <p>"{{ quote }}"</p>
      </div>
    </div>
    <!-- /Testimonial Content -->
    <!-- Testimonial Author -->
    <div class="testimonial-credits">
      <!-- Picture -->
      <div class="testimonial-picture">
        <img :src="imgSrc" :alt="imgAlt">
          </div>
        <!-- /Picture -->
        <!-- Testimonial author information -->
        <div class="testimonial-author-info">
          <p class="testimonial-author">{{ name }}</p>
          <p class="testimonial-firm">{{ title }}</p>
        </div>
      </div>
      <!-- /Testimonial author information -->
    </div>
</template>

<script>

export default {
  name: 'testimonial-wikka',
  props: ['imgSrc', 'imgAlt', 'quote', 'name', 'title']
}

</script>

<style>

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