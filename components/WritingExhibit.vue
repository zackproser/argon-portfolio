<template>
<section :class="`section pb-0 bg-gradient-${this.getClassType()}`">
  <div class="container">
    <div class="row row-grid" v-for="i in Math.ceil(posts.length / 3)" :key="i">
      <article-card v-for="post in posts.slice((i - 1) * 3, i * 3)" v-bind:key="post.slug" :prefix="prefix" :post="post" :ct="getClassType()"></article-card>
    </div>
  </div>
</section>
</template>

<script>
import ArticleCard from '~/components/ArticleCard.vue'

export default {
  layout: 'default',
  name: 'Exhibit',
  components: {
    ArticleCard
  },
  props: {
    prefix: String,
    slug: String,
    posts: Array
  }
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  padding-bottom: 100px;
}
</style>
