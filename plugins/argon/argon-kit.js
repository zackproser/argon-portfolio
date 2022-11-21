import Vue from 'vue'
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";
import vClickOutside from 'v-click-outside';
import VueAnalytics from 'vue-analytics'

Vue.use(globalComponents);
Vue.use(globalDirectives);
Vue.use(VueLazyload);
// Replace custom click-outside directive with vClickOutside (IOS fix)
Vue.use(vClickOutside);

Vue.use(VueAnalytics, {
  id: 'UA-13188644-29'
})
