if (module.hot) {
    module.hot.accept();
}

import Vue from 'vue';
//引用全局管理资源
import store from './store/index';

import iView from 'iview'; // 导入组件库
//import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);

import VDialog from './components/flydialog/index'

Vue.use(VDialog);

import FlyDialog from 'flydialog';
Vue.use(FlyDialog);

//import App from 'COM/app.vue'; // 路由挂载  
import App from './components/datamanage/index.vue'; // 路由挂载
//理由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import BatchInput from './components/datamanage/BatchInput';
import FamilyInfoInput from './components/datamanage/FamilyInfoInput';
import JitiInfoInput from './components/datamanage/JitiInfoInput';
import LandInfoInput from './components/datamanage/LandInfoInput';
import GroupInfoInput from './components/datamanage/GroupInfoInput';

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/batchInput', component: BatchInput },
    { path: '/familyInput', component: FamilyInfoInput },
    { path: '/jitiInput', component: JitiInfoInput },
    { path: '/landInput', component: LandInfoInput },
    { path: '/groupInput', component: GroupInfoInput }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})



function init(elId) {
    new Vue({
        el: '#' + elId,
        store,
        router,
        render: h => h(App)
    });
}

exports.test = function (str) {
    console.log(str);
};
exports.init = init;