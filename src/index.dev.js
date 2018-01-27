  if (module.hot) {
    module.hot.accept();
  }
import EsriMap from 'esri/Map';

import Vue from 'vue';
//引用全局管理资源
import store from './store/index';

import iView from 'iview'; // 导入组件库  

//import 'iview/dist/styles/iview.css'; // 导入样式  

Vue.use(iView);

//import App from 'COM/app.vue'; // 路由挂载  
import App from './components/app.vue'; // 路由挂载  

function init(elId) {
  new Vue({
    el: '#' + elId,
    store,
    render: h => h(App)
  });
}

// init('app');
// console.log("init ok");
console.log(EsriMap);
exports.test = function(str){console.log(str); };
exports.init = init;