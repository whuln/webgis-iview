import FlyDialog from './FlyDialog.vue'
// 这里是重点
const Fly_Dialog = {
    install: function(Vue,opts){
        Vue.component('fly-dialog',FlyDialog);
    }
}

// 导出组件
export default Fly_Dialog;