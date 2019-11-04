import Vue from 'vue'

Vue.mixin({
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
    }
})