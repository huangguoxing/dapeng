<template>
  <div class="entrance">
      <div class="entrance-title">
        <span class="entrance-ranking">出入口排名</span>
        <span class="entrance-distribution">出入口时间分布</span>
        <span class="drive-in">驶入</span>
        <span class="drive-out">驶出</span>
      </div>
      <TitleUpperLine></TitleUpperLine>
      <div class="chack-change">
        <span class="hours">时</span>
        <span class="days">日</span>
        <span class="month">月</span>
        <select name="" id="" class="select-road">
          <option value="">深葵路</option>
          <option value="">大马路</option>
          <option value="">小马路</option>
          <option value="">深葵路</option>
        </select>
      </div>
      <div class="entrance-chart" ref="entrance" :style="getStyles(688, 2089)">
     
      </div>
       <!-- <div class="sharkChart"  ref="sharkingChart" :style="getStyles(462, 1169)">
  </div> -->
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
       let dom = this.$refs.entrance;
       dom.style = this.getStyles(688, 2089)
       this.echart.resize()
     }
  },
    mounted(){
     window.addEventListener('resize', this.resizeHandle)
      this.echart = echarts.init(this.$refs.entrance);
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
  .entrance{
    .entrance-ranking{
      font-size:0.5rem;
      color:rgba(255,255,255,1);
      padding-right: 0.89rem;
    }
    .entrance-distribution{
      color: #ffffff;
      font-size:0.87rem;
      font-weight:bolder;
      padding-right:3.29rem;
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
    .chack-change{
      display: flex;
      .hours,.days,.month{
        display: inline-block;
        width: 3rem;
        height: 1.2rem;
        border: 2px solid #32fdf6;
        border-radius: 4px 0px 0px 4px;
        background: #32FDF6;
        font-size: 0.42rem;
        text-align: center;
        line-height: 1.2rem;
      }
      .days{
        border-radius:0 0;
        border:2px solid rgba(50,253,246,1);
        border-right: none;
        background:none;
        color: #FFFFFF;
      }
      .month{
        border-radius:0px 4px 4px 0px;
        background:none;
        border:2px solid rgba(50,253,246,1);
        color: #FFFFFF;
        margin-right: 6.4rem;
      }
      .select-road{
        width: 7.3rem;
        height: 1.6rem;
        font-size: 0.3748rem;
        border: 2px solid rgba(50,253,246,1);
        border-radius: 2px;
        background: none;
        color: #fff;
      }
    }
    .entrance-chart{
      width: 20.89rem;
      height: 6.88rem;
      background: pink;
      margin-top: 0.4rem;
    }
  }
</style>
