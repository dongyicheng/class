// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './vuex' // from './vuex/index.js' 默认直接找index.js
// import 'http://at.alicdn.com/t/font_848761_s77a10acb5.css' //不支持引入线上的css
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入 vue swiper 插件
import 'swiper/dist/css/swiper.css'
//引入 vue swiper css 文件
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

import axios from 'axios'
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ba6fc48f1d0f1653d091ba2';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
