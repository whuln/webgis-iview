import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
      login : 0,
      map : null
    },
    mutations: {
        LOGINSTATE (state, loginState) {
        // 变更状态
        state.login = loginState;
      },
        INITMAP(state, map) {
             
          if(state.map == null){
            console.log('before map initialize...');  
            state.map = map;
            console.log('map has been initialized first time');  
          }else{
              console.warn("map has been initialized");
          }
          //state.map == null? state.map = map :  console.warn("map has been initialized");
         
      }

    }
  });
module.exports = store;
