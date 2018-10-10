// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'swiper/dist/css/swiper.css';
import {store} from './vuex';
import axios from 'axios';
axios.defaults.baseURL=' https://www.easy-mock.com/mock/5baa3862afd56b7fe77cc9b1/huli';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



