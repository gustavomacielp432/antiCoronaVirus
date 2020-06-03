import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';


import VueRouter from 'vue-router'
import { routes } from './routes/routes'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDRYA4kZPf8A9E5E-_Oj7csLiRmppBRSV8',
    libraries: 'places',
  },
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
