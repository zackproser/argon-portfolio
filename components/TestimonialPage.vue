<template>
    <div>
        <testimonial-static
        v-for="testimonial in testimonials"
        :key="testimonial.title"
        :name="testimonial.name"
        :title="testimonial.title"
        :quote="testimonial.quote"
        :imgSrc="testimonial.imgSrc"
        >
        </testimonial-static>
    </div>
</template>

<script>

import testimonials from '../data/testimonials.json'
import TestimonialStatic from '~/components/TestimonialStatic.vue'

export default {
  name: 'testimonial-page',
  data () {
    return {
      testimonials,
      TestimonialStatic
    }
  }
}
</script>