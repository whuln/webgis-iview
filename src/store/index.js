import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    login: 0,
    map: null,
    mapview:null,
    mapUrl:'http://10.4.148.5:6080/arcgis/rest/services/yrgp/',
    baseMaps: [
      {
        url:'YRGP_MAP_YX_L06L12',
        type:'MapServer'
      },{
        url:'YRGP_DATA_YX_JIAMAKOU',
        type:'ImageServer'
      }
    ],
    tmMaps: [],
    fullExtent: { xmin: 95, ymin: 32, xmax: 120, ymax: 42, wkid: 3857 },
    initialExtent: { xmin: 95, ymin: 32, xmax: 120, ymax: 42, wkid: 3857 },
    centerP: { x: 107.5, y: 37, wkid: 3857 },
    spatialReference:3857,
    tools: [],
    controls: [],
    initZoom: 6,
    minZoom: 5,
    maxZoom: 15
  },
  mutations: {
    LOGINSTATE(state, loginState) {
      // 变更状态
      state.login = loginState;
    },
    INITMAP(state, map) {

      if (state.map == null) {
        console.log('before map initialize...');
        state.map = map;
        console.log('map has been initialized first time');
      } else {
        console.warn("map has been initialized");
      }
      //state.map == null? state.map = map :  console.warn("map has been initialized");

    }

  }
});

module.exports = store;