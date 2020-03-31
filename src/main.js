import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Dashboard from './components/Dashboard.vue'
import Index from './components/Index.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: Index, },
    { path: '/dashboard', component: Dashboard },
    { path: '/dashboard/:id', component: Dashboard }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
