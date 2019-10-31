<template>
    <section>
        <div class="container mt-5">
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
    </section>
</template>

<script>
import testimonials from '../data/testimonials.json'
import TestimonialStatic from '~/components/TestimonialStatic.vue'

export default {
    components: {
        TestimonialStatic
    },
    data () {
        return {
            testimonials
        }
    }
}

</script>