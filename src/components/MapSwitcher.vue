<template>
    <div>
        <Checkbox v-model="visiable">图层</Checkbox>
        <br>
        <RadioGroup v-show="visiable" v-model="activeBmIndex" vertical>
            <Radio label="0">
                <Icon type="image"></Icon>
               
                <span>影像</span>
            </Radio>
            <Radio label="1">
                <Icon type="network"></Icon>
                <span>矢量</span>
            </Radio>
            <Radio label="2">
                <Icon type="ios-photos"></Icon>
                <span>地形</span>
            </Radio>
        </RadioGroup>
    </div>
</template>
<script>
export default {
  data() {
    return {
      visiable: true,
      activeBmIndex: 0,
      map: this.$store.state.map,
      baseMaps: this.$store.state.baseMaps
    };
  },
  watch: {
    activeBmIndex(newVal, oldVal) {       
      this.map.basemap = this.baseMaps[newVal];
    //    console.log('activeBmIndex change');
    //    console.log(this.$store.state.mapview);
    }
  },
  mounted(){
    //   console.log('MapSwitcher mounted');
    //   console.log(this.$store.state.mapview);
  }
};
</script>