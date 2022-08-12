import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    month :184
  },
  getters: {
  },
  mutations: {
    INCREASE_MONTH(state){
      state.month +=1;
    }
  },
  actions: {
  },
  modules: {
  }
})
