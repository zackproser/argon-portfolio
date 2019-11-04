<template>
  <div class="container">
    <div class="row row-grid" v-for="i in Math.ceil(posts.length / 3)" :key="i">
      <post-card v-for="post in posts.slice((i - 1) * 3, i * 3)" v-bind:key="post.slug" :post="post" :ct="getClassType()"></post-card>
    </div>
  </div>
</template>

<script>
import PostCard from '~/components/PostCard.vue'

export default {
  name: 'Exhibit',
  components: {
    PostCard
  },
  methods: {
    getClassType () {
      let c = [
        'default',
        'primary',
        'info',
        'success',
        'danger',
        'warning'
      ]
      return c[Math.floor(Math.random() * c.length)]
    }
  },
  props: {
    prefix: String,
    slug: String,
    posts: Array
  }
}
</script>