import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
// 初始化map, mapview, baseMaps
import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import BaseMap from "esri/Basemap";
import MapView from "esri/views/MapView";
import TileLayer from "esri/layers/TileLayer";
import BasemapGallery from "esri/widgets/BasemapGallery";
import LocalBasemapsSource from 'esri/widgets/BasemapGallery/support/LocalBasemapsSource';

//地图配置
const mapconfig = {
    baseMapUrl:'http://10.4.148.5:6080/arcgis/rest/services/yrgp/',
    baseLayerInfos: [
      {
        url:'YRGP_MAP_YX_L06L12',
        type:'MapServer',
        title:'影像'
      },{
        url:'YRGP_MAP_SL_L06L12',
        type:'MapServer',
        title:'矢量'
      },
      {
        url:'YRGP_MAP_DX_L06L12',
        type:'MapServer',
        title:'地形'
      }
    ],
    tmMapInfos: [],
    fullExtent: { xmin: 95, ymin: 32, xmax: 120, ymax: 42, wkid: 3857 },
    initialExtent: { xmin: 95, ymin: 32, xmax: 120, ymax: 42, wkid: 3857 },
    centerP: { x: 107.5, y: 37, wkid: 3857 },
    spatialReference:3857,
    tools: [],
    controls: [],
    initZoom: 6,
    minZoom: 5,
    maxZoom: 15
};

    //根据配置数据，初始化baselayers, basemaps, map
    let  _map,      
         _baseLayerInfos = mapconfig.baseLayerInfos,
         _baseMapUrl = mapconfig.baseMapUrl,
         _baseLayers = [],
         _baseMaps = [], 
         lyr_count = _baseLayerInfos.length;

   // console.log(" lyr_count : " + lyr_count);
    for(let i=0; i< lyr_count; i++){
      _baseLayers[i] = new TileLayer({
          url:
            _baseMapUrl+ _baseLayerInfos[i].url +"/"+ _baseLayerInfos[i].type
        });
      _baseMaps[i] = new BaseMap({
          baseLayers: [_baseLayers[i]],
          title: _baseLayerInfos[i].title         
        });
    }

    // Create a Map instance
     _map = new EsriMap({
      basemap:  _baseMaps[0]     
    });
   
//Vuex 全局变量
const store = new Vuex.Store({
  state: {
    login: 0,
    map: _map,
    mapview: null,
    baseMaps: _baseMaps
  },
  getters:{

  },
  mutations: {
    LOGINSTATE(state, loginState) {
      // 变更状态
      state.login = loginState;
    },    
    INITMAPVIEW(state, view) {

      if (state.mapview == null) {
        console.log('before mapview initialize...');
        state.mapview = view;
        console.log('mapview has been initialized first time');
      } else {
        console.warn("mapview has been initialized");
      }
      //state.mapview == null? state.mapview = view :  console.warn("mapview has been initialized");

    }
  }
});

module.exports = store;