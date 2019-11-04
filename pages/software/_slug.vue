<template>
<section class="`section pb-0 bg-gradient-${ct}`">
  <div class="container">
    <div class="row row-grid">
      <div class="col">
        <div
          class="post-view__container container card card-lift--hover shadow border-0 mt-5"
          xs="12"
          sm="12"
          md="10"
          lg="10"
          xl="10"
        >
        <div class="row">
          <h2 class="display-2 mt-5 mb-5 ml-2">
            {{ post.attributes.title }}
          </h2>

          <h4 class="post-date">
            {{ post.attributes.date }}
          </h4>
          <div
            xs="12"
            sm="12"
            md="10"
            lg="10"
            xl="10"
            class="post-view__content card-body py-5"
            v-html="post.html"
          />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  layout: 'argon-demo',
  name: 'SoftwareView',
  props: {
    ct: String
  },
  async asyncData({ params }) {
    try {
      let post = await import(`~/posts/${params.slug}.md`)
      return {
        post
      }
    } catch (err) {
      return false
    }
  }
}
</script>

<style>
.post-view__content {
  padding: 15px;
  background-color: #fff;
}
.post-title {
  color: red;
}
</style>