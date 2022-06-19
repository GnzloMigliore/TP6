import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      isHard: true,
      isHardNavigator: true,
      colors: [],
      colorCount: 6,
      mensajeDisplay: "",
      colorHeaderVar: "",
      },    
    actions: { },
    mutations: { },
  });
  