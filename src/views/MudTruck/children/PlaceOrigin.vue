<template>
  <div class="place-origin">
     <div class="place-title">
       <span class="place-from">来源地</span>
       <span class="drive-in">驶入</span>
       <span class="drive-out">驶出</span>
     </div>
     <TitleUpperLine></TitleUpperLine>
     <div class="place-chart" ref="placeChart" :style="getStyles(688, 1788)">

     </div>
  </div>
</template>

<script>
import echarts from "echarts";
import echartsRem from "../../../../utils/echartRem.js";
import TitleUpperLine from '../../../components/content/TitleUpperLine'
export default {
  name: "sharkChart",
  components: {
    TitleUpperLine
  },
  data() {
    return {
      echart: null,
      styles: ""
    };
  },
  methods:{
     getStyles (h, w) {
       return `height : ${echartsRem(h)}px;width : ${echartsRem(w)}px;`
     },
     resizeHandle () {
       let dom = this.$refs.placeChart;
       dom.style = this.getStyles(688, 1788)
       this.echart.resize()
     }
  },
    mounted(){
     window.addEventListener('resize', this.resizeHandle)
     this.echart = echarts.init(this.$refs.placeChart);
     let option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

    this.echart.setOption(option);
    // console.log(echartsRem(500),65555555)
  }
};
</script>

<style lang="scss">
    .place-from{
      display: inline-block;
      // font-size:0.97rem;
      // font-weight:bolder;
      // color:rgba(255,255,255,1);
      color: #ffffff;
      font-size:0.87rem;
      font-weight:bolder;
      padding-right:9.2rem;
      margin-top: 1.79rem;
    }
    .drive-in{
    display: inline-block;
    width: 3rem;
    height: 1.1rem;
    background: #00f298;
    border-radius: 4px 0px 0px 4px;
    font-size: 0.42rem;
    font-weight: 500;
    color: #080808;
    text-align: center;
    line-height: 1.1rem;
  }
  .drive-out{
    display: inline-block;
    width: 3rem;
    height: 1.1rem;
    background: #00f298;
    opacity: 0.3;
    border-radius: 0px 4px 4px 0px;
    font-size: 0.42rem;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    line-height: 1.1rem;
  }
  .place-chart{
    width: 17.89rem;
    height: 6.88rem;
    background:pink;
  }
</style>
