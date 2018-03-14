<template>
    <div>
        <Checkbox v-model="visiable">图层</Checkbox>
        <div v-show="visiable">
          <Tag  type="border" color="blue">底图</Tag><br>
          <RadioGroup  v-model="activeBmIndex" vertical>
              <Radio label="0">
                  <Icon type="image"></Icon>
                
                  <span>{{titles[0]}}</span>
              </Radio>
              <Radio label="1">
                  <Icon type="network"></Icon>
                  <span>{{titles[1]}}</span>
              </Radio>
              <Radio label="2">
                  <Icon type="ios-photos"></Icon>
                  <span>{{titles[2]}}</span>
              </Radio>
          </RadioGroup>
          <br>
          <Tag type="border" color="blue">专题</Tag><br>
          <Tree class="sublayertree" :data="data2" @on-check-change="onTreeCheckChange" show-checkbox></Tree>
        </div>
    </div>
</template>
<script>
import _ from "lodash";
import {nextTick} from 'vue';
export default {
  data() {
    return {
      visiable: true,
      activeBmIndex: 0,
      activeTmIndex: 0,
      checkAllGroup: ["香蕉", "西瓜"],
      map: this.$store.state.map,
      allSublayers: [],
      initVisibleLyrs:[], //长期持有,不能变     
      visibleLyrs: null
    };
  },

  computed: {
    titles() {
      return this.baseLayers.map(baselayer => {
        return baselayer.title;
      }).items;
    },
    baseLayers() {
      return this.map.basemap.baseLayers;
    },
    tmLayers() {
      return this.map.layers;
    },
    data2() {
      var _data = [],
        _tmLayers = this.tmLayers,
        count = _tmLayers.length;
     //  console.log("count " + count);
      for (let i = 0; i < count; i++) {
        let _layer = _tmLayers.getItemAt(i);       
        _data[i] = this.cacheLayers(_layer);
      }     
      return _data;
    }
  },
  watch: {
    activeBmIndex(newVal, oldVal) {
      // this.map.basemap = this.baseMaps[newVal];
      this.activeBmIndex = parseInt(newVal);
      this.baseLayers.forEach((baselayer, i) => {
        i == this.activeBmIndex
          ? (baselayer.visible = true)
          : (baselayer.visible = false);
      });
      //    console.log(this.$store.state.mapview);                      //测试mapview动态传递
    }
  },
  methods: {
    onTreeCheckChange(checkedItems) {
      var origin_this = this;

    //  console.log("checkedItemschange" );
      if(this.visibleLyrs == null){
        this.visibleLyrs = this.initVisibleLyrs.join(',').split(',');
      } 
      var _a = this.allSublayers,
        old_visible = this.visibleLyrs;

      var new_visible = checkedItems.map(function(item) {
        return item.title;
      });
           
      // console.log(old_visible );
      //  console.log(new_visible);
     
      var v_tobe_false = _.difference(old_visible, new_visible);
      var v_tobe_true = _.difference(new_visible, old_visible);          

      //console.log('要隐藏图层： ' +v_tobe_false +' - 要显示图层： '+ v_tobe_true);

      v_tobe_false.forEach(function(title){
        if(_a[title]){
          _a[title].visible = false;
        }
      });

      v_tobe_true.forEach(function(title){
        if(_a[title]){         
          _a[title].visible = true;
        }
      });

       this.visibleLyrs = new_visible;
    },
    cacheLayers(layer) {    
       // console.log('cachelayer0');
      var _allSublayers = this.allSublayers, // 缓存所有专题（子）图层
        _init_vlyrs = this.initVisibleLyrs;  // 累加，如果为局部变量，则每次生成一个新的数组，结果不累加

      var _layer = layer,
        _obj = {};

      _obj.title = _layer.title;      
      _obj.expand = true;
      _obj.children = [];

      if (_layer.sublayers) {
        let _subLayers = _layer.sublayers,
          subs = _subLayers.length;
        for (let j = 0; j < subs; j++) {
          let _sublayer = _subLayers.getItemAt(j);

          if (!_sublayer.sublayers) {
            let _subObj = {};
            _subObj.title = _sublayer.title;
            if (_sublayer.visible !== 'undefined') {  //检验配置文件是否配置visible
              _subObj.checked = _sublayer.visible;
            }
            _obj.children[j] = _subObj;          

            //  console.log('cachelayer');
            _sublayer.visible == true ? _init_vlyrs.push(_sublayer.title) : "";     // 缓存初始可见图层
            _allSublayers[_sublayer.title] = _sublayer;
          } else {
            _obj.children[j] = this.cacheLayers(_sublayer); //递归缓存所有叶子图层
          }
        }
      } else {
         if (_layer.visible !== 'undefined') {
              _obj.checked = _layer.visible;
              _layer.visible == true ? _init_vlyrs.push(_layer.title) : "";
            }       
        _allSublayers[_layer.title] = _layer;
      }    
     
      return _obj;
    }
  },
  mounted() {
    this.baseLayers.getItemAt(this.activeBmIndex).visible = true;
  }
};
</script>
<style scoped>
    .sublayertree{
        color: #d9ecff;
    }
</style>