<template>
<div class="col-lg-4">
    <div class="card card-list--hover shadow border-0">
        <div class="card-body py-5">
            <div :class="`icon icon-shape icon-shape-${ct} rounded-circle mb-4`">
            	<i class="ni ni-book-bookmark"></i>
            </div>
	    <a :href="`${post.attributes.href}`" target="_blank">
                <h6 :class="`text-${ct} display-4 text-uppercase`">
                    {{ post.attributes.title }}
                </h6>
            </a>
            <p class="description mt-3">
                {{ post.attributes.description }}
            </p>
	    <h6 :class="`text-${ct} text-uppercase`">{{ post.attributes.publication }}</h6>
            <div>
                <span v-for="tag in tags" v-if="tags.length > 0"
                    :class="`badge badge-pill badge-${ct}`"
                >
                    {{ tag }}
                </span>
            </div>
	    <a :href="`${post.attributes.href}`" target="_blank">
                <div :class="`btn btn-${ct} mt-4`">
                    Read
                </div>
	    </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'zack-proser',
    name: 'article-card',
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
