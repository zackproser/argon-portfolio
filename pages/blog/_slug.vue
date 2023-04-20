<template>
  <section :class="`section pb-0 bg-gradient-${this.getClassType()}`">
    <div class="row row-grid">
      <div class="col">
        <div class="container card card-lift--hover shadow border-0 mt-5">
          <div class="row">
            <h2 class="display-2 m-5">
              {{ post.attributes.title }}
            </h2>

            <h4 class="post-date">
              {{ post.attributes.date }}
            </h4>
            <div class="card-body py-5" v-html="post.html" />
            <!-- Render email list subscription form -->
            <div class="card-body py-5">
              <script async src="https://eomail6.com/form/429b0fdc-df30-11ed-a050-811b537f971b.js" data-form="429b0fdc-df30-11ed-a050-811b537f971b"></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import hljs from 'highlight.js'

export default {
  layout: 'zack-proser',
  name: 'BlogView',
  async asyncData({ params }) {
    try {
      let post = await import(`~/posts/${params.slug}.md`)
      return {
        post,
      }
    } catch (err) {
      return false
    }
  },
  mounted() {
    hljs.highlightAll()
  },
  methods: {
    track() {
      this.$ga.page(this.$route.path)
    }
  }
}
</script>
