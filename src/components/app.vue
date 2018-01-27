<template>   
   <div class="layout">
        <Layout class="layoutCon">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" class="sideMenu">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>查询</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        <Icon type="search"></Icon>
                        <span>标注</span>
                    </MenuItem>
                    <MenuItem name="1-3">  
                        <Icon type="settings"></Icon>
                        <span>书签</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                    <span class='logoTitle'>黄河基础地理信息公共服务平台</span>
                </Header>
                <Content id="viewDiv" :style="{margin: '2px', background: '#fff', minHeight: '260px'}">
                    
                </Content>
            </Layout>
        </Layout>
    </div>
</template>   
<script>
import MapImageLayer from "esri/layers/MapImageLayer";
import EsriMap from "esri/Map";
import BaseMap from "esri/Basemap";
import MapView from "esri/views/MapView";
import TileLayer from "esri/layers/TileLayer";
export default {
  data() {
    return {
      isCollapsed: false,
      baseMaps: this.$store.state.baseMaps,
      mapUrl: this.$store.state.mapUrl
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  },
  mounted() {
    console.log('basemaps');
    console.log(this.baseMaps);
    //create a basemap
    var baseLayer1 = new TileLayer({
      url:
        "http://10.4.148.5:6080/arcgis/rest/services/yrgp/YRGP_MAP_YX_L06L12/MapServer"
    });
    var basemap1 = new BaseMap({
      baseLayers: [baseLayer1]
    });
    // Create a Map instance
    var map = new EsriMap({
      basemap: basemap1
    });
    // Create a MapView instance (for 2D viewing) and set its map property to
    // the map instance we just created
    var view = new MapView({
      map: map,
      container: "viewDiv"
    });
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
  @include bk-blue;
  box-shadow: 0 1px 1px rgba(20, 252, 221, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.sideMenu {
     @include  bk-gray-wall;
  }
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
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
</style>