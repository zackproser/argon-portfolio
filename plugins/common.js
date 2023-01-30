import Vue from 'vue'

Vue.mixin({
  methods: {
    getClassType() {
      // This does some things
      let c = ['default', 'primary', 'info', 'success', 'danger', 'warning']
      return c[Math.floor(Math.random() * c.length)]
    },
  },
  mounted() {
    let element = document.querySelector('.navbar-collapse')
    element.classList.remove('show')
  },
})
