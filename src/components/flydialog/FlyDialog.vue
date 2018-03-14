<template>
    <div ref="fly_dialog" class="fly_dialog" :style="[mystyle, styleObj ]" v-show="isVisible">
        <!--<div id="mask" class="mask"></div>-->
        <div class="dialog_head" @mousedown="mousedown" @mouseup="mouseup">
         <span class="title">{{title}}</span>   <span class="close_button" @click="close">X</span>
        </div>
        <div class="dialog_content">
            <slot>
                只有在没有要分发的内容时才会显示。
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fly-dialog",
        data() {
            return {
                isVisible: false,
                isDraging: false,
                mx: 0,
                my: 0,
                dx: 0,
                dy: 0,
                moveX: 0,
                moveY: 0,
                styleObj:{
                    left:'1px',
                    top:'1px'
                }
            }
        },
        props: {
            title: {
                type: String,
                default: '标题'
            },
            mystyle: Object
        },
        mounted() {
/*
            function autoCenter() {
                //获取可见窗口大小
                var bodyW = document.documentElement.clientWidth;
                var bodyH = document.documentElement.clientHeight;
                //获取对话框宽、高
                var elW = origin_this.$el.offsetWidth || 0;
                var elH = origin_this.$el.offsetHeight || 0;

                origin_this.styleObj.left = (bodyW - elW) / 2 + 'px';
                origin_this.styleObj.top = (bodyH - elH) / 2 + 'px';
            };
           // autoCenter();
            //窗口大小改变时，对话框始终居中
            // window.onresize = function () {
            //     autoCenter();
            // };


//             //设置拖动范围
//             var pageW = document.documentElement.clientWidth;
//             var pageH = document.documentElement.clientHeight;
//             var dialogW = g('dialog').offsetWidth;
//             var dialogH = g('dialog').offsetHeight;
//             var maxX = pageW - dialogW;       //X轴可拖动最大值
//             var maxY = pageH - dialogH;       //Y轴可拖动最大值
//             moveX = Math.min(Math.max(0,moveX),maxX);     //X轴可拖动范围
//             moveY = Math.min(Math.max(0,moveY),maxY);     //Y轴可拖动范围
//
//             g('dialog').style.left = moveX +'px';       //重新设置对话框的left
//             g('dialog').style.top =  moveY +'px';        //重新设置对话框的top*/

          console.log("fly-dialog, mounted");
          console.log("style = " + this.mystyle);

          this.styleObj.left = this.mystyle.left;
          this.styleObj.top = this.mystyle.top;
          // var origin_this = this;
          // document.onmousemove = function(e) {
          //
          //   var e = e || window.event;
          //   var x = e.pageX;      //移动时鼠标X坐标
          //   var y = e.pageY;      //移动时鼠标Y坐标
          //   // console.log("ex, ey");
          //   // console.log(x);
          //   // console.log(y);
          //   if(origin_this.isDraging){        //判断对话框能否拖动
          //     origin_this.moveX = origin_this.dx + x - origin_this.mx;      //移动后对话框新的left值
          //     origin_this.moveY = origin_this.dy + y - origin_this.my;      //移动后对话框新的top值
          //     origin_this.styleObj.left = origin_this.moveX +'px';       //重新设置对话框的left
          //     origin_this.styleObj.top =  origin_this.moveY +'px';     //重新设置对话框的top
          //
          //   };
          // };
        },
        methods: {
            close() {
                this.isVisible = false;
            },
            show() {
                console.log("show");
                this.isVisible = true;
            },
            mousedown(e) {
                var e = e || window.event;
                this.mx = e.pageX;      //点击时鼠标X坐标
                this.my = e.pageY;      //点击时鼠标Y坐标
                this.dx = this.$refs.fly_dialog.offsetLeft;
                this.dy = this.$refs.fly_dialog.offsetTop;
                this.isDraging = true;      //标记对话框可拖动
                // console.log("mx, my, dx, dy : ");
                // console.log(this.mx);
                // console.log(this.my);
                // console.log(this.dx);
                // console.log(this.dy);

                document.onmousemove = this.mousemove;
            },
            mousemove(e) {
                var origin_this = this;

                var e = e || window.event;
                var x = e.pageX;      //移动时鼠标X坐标
                var y = e.pageY;      //移动时鼠标Y坐标
                // console.log("ex, ey");
                // console.log(x);
                // console.log(y);
                if(origin_this.isDraging){        //判断对话框能否拖动
                    origin_this.moveX = origin_this.dx + x - origin_this.mx;      //移动后对话框新的left值
                    origin_this.moveY = origin_this.dy + y - origin_this.my;      //移动后对话框新的top值
                    origin_this.styleObj.left = origin_this.moveX +'px';       //重新设置对话框的left
                    origin_this.styleObj.top =  origin_this.moveY +'px';     //重新设置对话框的top

                };
            },
            mouseup(e) {
                this.isDraging = false;
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .fly_dialog {
        /*height: 100px;*/
        /*width: 100px;*/
      position: absolute;
      left: 1px;
      top: 1px;
      -moz-user-select: none;
      -webkit-user-select: none;
      background-color: #FFF;
      z-index: 6000;
      border: 1px #5b6270 solid;

      display: flex;
      flex-flow: column nowrap;
    }

    .dialog_head {
        flex: 0 0 30px;
        /*height: 30px;*/
        background: #5b6270;
        text-align: left;
        line-height: 30px;
        color: whitesmoke;
        cursor: move;
        font-size: 18px;
    }
    .dialog_content {
      flex: 1 1 auto;
      padding: 10px;
      /*height: 300px;*/
      /*height: 100%;*/
      overflow: auto;
    }
    .title{
      float: left;
    }

    .close_button {
      width: 30px;
      cursor: pointer;
      float: right;
      /*background: #363636;*/
      text-align: center;
      margin: 0 auto;
    }

    .close_button:hover {
      background: black;
    }


</style>
