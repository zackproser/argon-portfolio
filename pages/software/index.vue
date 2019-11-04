<template>
  <div>
    <exhibit prefix="software" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import Exhibit from '~/components/Exhibit.vue'

export default {
  name: 'Software',
  components: {
    Exhibit
  },
  props: ['slug'],
  async asyncData() {
    const resolve = require.context('~/posts/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        return Object.assign(resolve(key), { slug })
      })
      .filter((post) => post.attributes.category == 'software')
    return {
      posts: imports
    }
  }
}
</script>

<style>
.post-view__content p img:nth-of-type(1) {
  margin-top: 30px;
}
</style>
