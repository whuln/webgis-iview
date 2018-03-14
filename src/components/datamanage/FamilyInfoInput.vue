<template>
    <div> 户信息录入
        <div class="button callout_button" @click="onPopup"><a href="#">弹出对话框</a></div>
        <fly-dialog title="标题1" ref="vdialog" :mystyle="mystyle">
            <Button @click="onBtnClick">Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br>
        </fly-dialog>
        <fly-dialog title="组信息录入" ref="vdialog1" :mystyle="mystyle">
            <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>
        </fly-dialog>
        <!--<div id="mount-point"></div>-->
    </div>
</template>

<script>
    import VDialog from "../flydialog/FlyDialog";
    import Vue from 'vue';
    export default {
        components: {VDialog},
        name: "family-info-input",
        data() {
            return {
                dlgVisible: false,
                mystyle: {
                    color:'red',
                    left:'200px',
                    top:'200px'
                },
                color1: '#409EFF',
                color2: null
            }
        },
        mounted(){
            // 创建构造器
//             var Profile = Vue.extend(VDialog);
// // 创建 Profile 实例，并挂载到一个元素上。
//             var vm = new Profile();
//             vm.$mount('#mount-point');
//             vm.show();
        },
        methods: {
            onPopup(){
                console.log("Popup");
                //this.dlgVisible = !this.dlgVisible;
                this.$refs.vdialog.show();
                this.$refs.vdialog1.show();
            },
            onBtnClick(){
                alert("onBtnClick");
            }
        }
    }
</script>

<style scoped>
    .button{width: 200px; height: 50px; border-radius: 20px; text-align:center;line-height: 50px;}
    .callout_button{background:#FF5B5B;margin:0 auto; }
    .callout_button:hover{background: red;}
</style>