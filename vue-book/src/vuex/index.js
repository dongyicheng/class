// 初始化 vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引入 四个文件
import {state} from  './state.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'
// import state from  './state.js'
Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export {store}
