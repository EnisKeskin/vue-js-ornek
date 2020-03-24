import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Trial from './components/Trial.vue'
import Index from './components/Index.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Index, },
    { path: '/trial', component: Trial },
    { path: '/trial/:id', component: Trial }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
