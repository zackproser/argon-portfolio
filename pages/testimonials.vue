<template>
    <section>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-12 col-lg-12 mb-5 mb-lg-0">
                    <div v-for="i in Math.ceil(testimonials.length / 3)" :key="i">
                        <testimonial-static
                        v-for="testimonial in testimonials.slice((i - 1) * 3, i * 3)"
                        :key="testimonial.title"
                        :name="testimonial.name"
                        :title="testimonial.title"
                        :quote="testimonial.quote"
                        :imgSrc="testimonial.imgSrc"
                        >
                        </testimonial-static>
                    </div>
                </div>
            </div><!--/row-->
        </div><!--/container-->
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