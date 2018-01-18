<template>
    <!-- <div class="app">
        <div id=map>
            <p >map container</p>
        </div>
     
        <div id=toolBar>
             <Button type="primary">Primary</Button>
        </div>    
        <div id=showArea></div>      
    </div> -->
      <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="search"></Icon>
                        <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        <Icon type="settings"></Icon>
                        <span>Option 3</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    Content111
                </Content>
            </Layout>
        </Layout>
    </div>
</template>   
<script>
//import toolBar from "./toolbar/index";
// export default {
//   data() {
//     return {
//       msg: "Hello from vue-loader,dgdf",
//       visiable: false
//     };
//   },
//   components: {
//    // toolBar
//   },
//   computed: {
//     count() {
//       return 'p';
//     }
//   },
//   methods: {
//     show: function() {
//       this.visible = true;
//       console.log("this is the first iview button!");
//     }
//   },
//   mounted() {
//     this.$store.commit("INITMAP", { load: 1 });
//   }
// };

 export default {
        data () {
            return {
                isCollapsed: false
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            }
        }
    }
</script>
<style scoped lang="scss">
p {
  display: block;
  margin: 0px;
  padding: 0px;
  border: 0px;
}
.app {
  display: block;
  margin: 0px;
  padding: 0px;
  border: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(97, 226, 161);

  #map {
    width: 100%;
    height: 100%;
    background-color: rgb(243, 139, 139);
  }

  #toolBar {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: 50%;
    height: 50px;
    background-color: rgb(58, 212, 187);
    z-index: 1;
  }

  #showArea {
    position: absolute;
    top: 10px;
    right: 5px;
    width: 200px;
    height: 80%;
    background-color: rgb(238, 30, 210);
    z-index: 0;
  }
}

.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>