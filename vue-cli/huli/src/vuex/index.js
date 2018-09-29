import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state.js'
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'


Vue.use(Vuex)
const store = new Vuex.Store({
    state,actions,getters,mutations
})
export {store};