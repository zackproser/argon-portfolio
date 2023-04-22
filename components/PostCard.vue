<template>
  <div class="col-lg-4">
    <div class="card card-list--hover shadow border-0">
      <div class="card-body py-5">
        <img :src="renderPostImage()" class="img-fluid shadow mb-5" />
        <nuxt-link :to="`/blog/${post.slug}`">
          <h6 :class="`text-${ct} display-4 text-uppercase`">
            {{ post.attributes.title }}
          </h6>
        </nuxt-link>
        <p class="description mt-3">
          {{ post.attributes.description }}
        </p>
        <div>
          <span
            v-for="tag in tags"
            v-if="tags.length > 0"
            :class="`badge badge-pill badge-${ct}`"
          >
            {{ tag }}
          </span>
        </div>

        <!-- If the post is an "article" - that means it's hosted externall (off-site), so use it's URL to render a normal link -->
        <!-- Otherwise, we render a relative link to the internal blog post -->
        <div v-if="isArticle == false">
        <nuxt-link :to="generateURL()">
          <div :class="`btn btn-${ct} mt-4`">
            Read
          </div>
        </nuxt-link>
        </div>
        <div v-else>
        <a :href="generateURL()">
          <div :class="`btn btn-${ct} mt-4`">
            Read
          </div>
        </a>
        </div>

          </div>
        </div>
        </a>
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
    ct: String,
  },
  methods: {
     // Generate the correct internal link, unless the post has an explicit external link, in which case use that external URL
    generateURL() {
      return this.post.attributes.category == "article" 
        ? this.post.attributes.href
        : `${this.prefix}/${this.post.slug}`
    }, 
    renderPostImage() {
      return (this.post.attributes.image == "" || this.post.attributes.image == undefined) 
        ? this.selectRandomZacharyArt()
        : this.post.attributes.image
    },
    selectRandomZacharyArt() {
      let images = ["wikka.png", "wakka.png", "wokka.png"]
      // Return a random one of the images 
      return  images[Math.floor(Math.random() * images.length)]
    }
  }, 
  computed: {
    tags() {
      return this.post.attributes.tags
        ? this.post.attributes.tags.split(',')
        : []
    },
    isArticle() {
      return this.post.attributes.category == "article"
    }, 
  },
}
</script>
