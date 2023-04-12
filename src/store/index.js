import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    state,
    mutations,
    user,
    actions,
    getters,
})


export const store = new Vuex.Store({
    state: {
      count: 0, // 初始状态
    },
    
    mutations: {
      increment(state) {
        state.count++; // 改变 state 的值
      },
      decrement(state) {
        state.count--; // 改变 state 的值
      }
    }
  });