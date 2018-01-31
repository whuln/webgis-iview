import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
// 初始化map, mapview, baseMaps
import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import BaseMap from "esri/Basemap";
import MapView from "esri/views/MapView";
import TileLayer from "esri/layers/TileLayer";
import WMSLayer from "esri/layers/WMSLayer";


//地图配置
const mapconfig = {
  //baseMapUrl:'http://10.4.148.5:6080/arcgis/rest/services/yrgp/',   
  // baseLayerInfos: [
  //   {
  //     url:'YRGP_MAP_YX_L06L12',
  //     type:'MapServer',
  //     title:'影像'
  //   },{
  //     url:'YRGP_MAP_SL_L06L12',
  //     type:'MapServer',
  //     title:'矢量'
  //   },
  //   {
  //     url:'YRGP_MAP_DX_L06L12',
  //     type:'MapServer',
  //     title:'地形'
  //   }
  // ],
  baseMapUrl: 'http://10.34.0.12:6080/arcgis/rest/services/',
  baseLayerInfos: [{
      url: 'AHSLIMG',
      type: 'MapServer',
      title: '影像'
    }, {
      url: 'AHSL_ZH0717',
      type: 'MapServer',
      title: '矢量'
    },
    {
      url: 'AHSL_DX',
      type: 'MapServer',
      title: '地形'
    }
  ],
  tmLayerInfos: [{
    url: 'YRGP_DATA_SL',
    type: 'MapServer',
    title: '矢量数据',
    visiable: true,
    sublayers: [{
        id: 0,
        visible: true
      },
      {
        id: 1,
        visible: false
      },
      {
        id: 2,
        visible: false
      },
      {
        id: 3,
        visible: false
      },
      {
        id: 4,
        visible: false
      },
      {
        id: 5,
        visible: false
      },
      {
        id: 6,
        visible: false
      },
      {
        id: 7,
        visible: false
      },
      {
        id: 8,
        visible: false
      },
      {
        id: 9,
        visible: false
      },
      {
        id: 10,
        visible: false
      },
      {
        id: 11,
        visible: false
      },
      {
        id: 12,
        visible: false
      }
    ]
  }],
  fullExtent: {
    xmin: 95,
    ymin: 32,
    xmax: 120,
    ymax: 42,
    wkid: 3857
  },
  initialExtent: {
    xmin: 95,
    ymin: 32,
    xmax: 120,
    ymax: 42,
    wkid: 3857
  },
  centerP: {
    x: 107.5,
    y: 37,
    wkid: 3857
  },
  spatialReference: 3857,
  tools: [],
  controls: [],
  initZoom: 6,
  minZoom: 5,
  maxZoom: 15
};

//根据配置数据，初始化baselayers, basemaps, map
var _map,
  _baseLayerInfos = mapconfig.baseLayerInfos,
  _tmLayerInfos = mapconfig.tmLayerInfos,
  _baseMapUrl = mapconfig.baseMapUrl,
  _baseLayers = [],
  _baseMap = null,
  _tmLayers = [],
  lyr_count = _baseLayerInfos.length,
  tmlyr_count = _tmLayerInfos.length;


// console.log(" lyr_count : " + lyr_count);
for (let i = 0; i < lyr_count; i++) {
  _baseLayers[i] = new TileLayer({
    url: _baseMapUrl + _baseLayerInfos[i].url + "/" + _baseLayerInfos[i].type,
    title: _baseLayerInfos[i].title,
    visible: false
  });
}

_baseMap = new BaseMap({
  baseLayers: _baseLayers
});
// Create a Map instance
_map = new EsriMap({
  basemap: _baseMap
});

//初始化并添加专题图
// var _tmLayer1 = new MapImageLayer({
//   url:'http://10.4.148.5:6080/arcgis/rest/services/yrgp/YRGP_DATA_SL/MapServer',
//   title:'矢量图层',
//   visible:true,
//   sublayers:[
//     // {id: 0, visible:true, title:'layer0'},
//     // {id: 1, visible:true, title:'layer1'},
//     // {id: 2, visible:true, title:'layer2'},
//     // {id: 3, visible:true, title:'layer3'},
//     // {id: 4, visible:true, title:'layer4'},
//     // {id: 5, visible:true, title:'layer5'},
//     // {id: 6, visible:true, title:'layer6'},
//     // {id: 7, visible:true, title:'layer7'},
//     // {id: 8, visible:true, title:'layer8'},
//     // {id: 9, visible:true, title:'layer9'},
//     // {id: 10, visible:true, title:'layer10'},
//     {id: 11, visible:true, title:'layer11'},
//     {id: 12, visible:true, title:'layer12'}
//   ]
// });  
var _tmLayer1 = new MapImageLayer({
      url: 'http://10.34.0.12:6080/arcgis/rest/services/AHSL_ZTSL0905/MapServer',
      title: '矢量图层',     
      sublayers: [ {
        title: "水利工程",
        id: 10,        
        sublayers:[
          {
                title: "水闸",
                id: 11,              
                sublayers: [{
                    title: "大一型水闸",
                    visible: true,
                    id: 12,
                    classCode: "2702011"
                  },
                  {
                    title: "大二型水闸",
                    visible: true,
                    id: 13,
                    classCode: "2702012"
                  },
                  {
                    title: "中型水闸",
                    visible: true,
                    id: 14,
                    classCode: "2702013"
                  },
                  {
                    title: "小一型水闸",
                    visible: false,
                    id: 15,
                    classCode: "2702014"
                  },
                  {
                    title: "小二型水闸",
                    visible: false,
                    id: 16,
                    classCode: "2702015"
                  },
                  {
                    title: "橡胶坝",
                    visible: false,
                    id: 17,
                    classCode: "2702017"
                  },
                  {
                    title: "水闸（仅清查数据）",
                    visible: false,
                    id: 18,
                    classCode: "2702016"
                  }
                ]
             }
        ]
    
        }
       ]      
      });


      _tmLayers[0] = _tmLayer1;
      // console.log('sublayers : ' + _tmLayer1.sublayers.length);    
      _map.layers.add(_tmLayers[0]);

      //Vuex 全局变量
      const store = new Vuex.Store({
        state: {
          login: 0,
          map: _map,
          mapview: null
        },
        getters: {

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