<template>   
   <div class="layout">      
            <Layout class="layoutCon">
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span="22">  <span class='logoTitle'>泾河东庄移民数据管理系统</span></Col>
                        <Col span="2"><a class="a_white" href="data-engine.html" target="_blank">数据管理</a></Col>
                    </Row>

                </Header>
                <Content id="viewDiv" :style="{margin: '0px', background: '#fff', minHeight: '260px'}">
                    
                </Content>
            </Layout>    

      <!--    自定义控件            -->
      <div class="switcher">
        <map-switcher></map-switcher>        
      </div>
    </div>
</template>   
<script>
import MapView from "esri/views/MapView";
import MapSwitcher from "./MapSwitcher";

export default {
  data() {
    return {
      map:this.$store.state.map,
      mapview:null,
      baseMaps:this.$store.state.baseMaps     
    };
  },
  components:{
    'map-switcher':MapSwitcher
  },
  computed: {
  
  },
  methods: {
    
  },
  watch:{   
  },
  created(){    
     
  },
  beforeMount(){
     
  },
  mounted() {
        // Create a MapView instance (for 2D viewing) and set its map property to
     var _view = new MapView({
      map: this.map,
      container: "viewDiv",
    });

    _view.ui.remove('attribution');
    _view.ui.move("zoom", "top-right");
 //初始化vuex中全局变量, mapview 仅会被初始化一次    
    this.$store.commit('INITMAPVIEW',_view);
      //   console.log('app mounted');
      // console.log(this.$store.state.mapview);
  }
};
</script>
<style scoped lang="scss">
  @import "./common-css.scss";
.layout {
  height: 100%;
  width: 100%;
  border: 1px solid #aed0f7;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  @include bk-dark;
  box-shadow: 0 1px 1px rgba(20, 252, 221, 0.1);
}

// ----- costumize ----- //
.logoTitle{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  //font-size: 3vh;
  @include font1;
  color: aliceblue;
}

.layoutCon{
  height: 100%;
  width: 100%;  
}
.switcher{
  position: absolute;
  top: 80px;
  left: 5px;
  background-color: whitesmoke;
  //  color: #d9ecff;
}
</style>