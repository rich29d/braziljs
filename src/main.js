import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyA097CPoelJ-MeREWAcxGui0StAClHKfUs',   
  }
}));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
