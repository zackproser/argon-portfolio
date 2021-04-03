<template>
  <div>
    <exhibit prefix="articles" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import Exhibit from '~/components/WritingExhibit.vue'

export default {
  layout: 'zack-proser',
  name: 'Articles',
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
      .filter((post) => post.attributes.category == 'article')
    return {
      posts: imports
    }
  }
}
</script>
