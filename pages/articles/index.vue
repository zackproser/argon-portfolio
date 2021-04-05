<template>
  <div>
    <article-exhibit prefix="articles" :posts="posts" />
  </div>
</template>

<script>
import ArticleExhibit from '~/components/WritingExhibit.vue'

export default {
  layout: 'zack-proser',
  name: 'Articles',
  components: {
    ArticleExhibit
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
