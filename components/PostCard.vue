<template>
<div class="col-lg-4">
    <div class="card card-list--hover shadow border-0">
        <div class="card-body py-5">
            <img
                :src="`/${post.attributes.image}`"
                class="img-fluid shadow mb-5"
            />
            <nuxt-link :to="`/software/${post.slug}`">
                <h6 :class="`text-${ct} display-4 text-uppercase`">
                    {{ post.attributes.title }}
                </h6>
            </nuxt-link>
            <p class="description mt-3">
                {{ post.attributes.description }}
            </p>
            <div>
                <span v-for="tag in tags" v-if="tags.length > 0"
                    :class="`badge badge-pill badge-${ct}`"
                >
                    {{ tag }}
                </span>
            </div>
            <nuxt-link :to="`/${prefix}/${post.slug}`">
                <div :class="`btn btn-${ct} mt-4`">
                    Read
                </div>
            </nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'zack-proser',
    name: 'post-card',
    props: {
        post: Object,
        prefix: String,
        ct: String
    },
    computed: {
        tags () {
           return this.post.attributes.tags ? this.post.attributes.tags.split(',') : []
        }
    }
}
</script>