<template>
<section :class="`section pb-0 bg-gradient-${this.getClassType()}`">
  <div class="row row-grid">
    <div class="col">
      <div
        class="container card card-lift--hover shadow border-0 mt-5"
      >
      <div class="row">
        <h2 class="display-2 m-5">
          {{ post.attributes.title }}
        </h2>

        <h4 class="post-date">
          {{ post.attributes.date }}
        </h4>
        <div
          class="card-body py-5"
          v-html="post.html"
        />
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  layout: 'zack-proser',
  name: 'SoftwareView',
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