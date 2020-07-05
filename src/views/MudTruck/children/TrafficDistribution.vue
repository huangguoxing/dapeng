<template>
  <div class="traffic-distribution">
     <h3>主要路短通行量时间分布</h3>
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
      <div class="traffic-distribution-chart" ref="distributionChart" :style="getStyles(500, 1650)">

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
       let dom = this.$refs.distributionChart;
       dom.style = this.getStyles(500, 1650)
       this.echart.resize()
     }
  },
    mounted(){
     window.addEventListener('resize', this.resizeHandle)
     this.echart = echarts.init(this.$refs.distributionChart);
     let option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','a','b','c','d','e','f'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220,10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };
    this.echart.setOption(option);
    // console.log(echartsRem(500),65555555)
  }
};
</script>

<style lang="scss">
  .traffic-distribution{
    margin:1.01rem 0 0 0; 
    h3{
      color: #ffffff;
      font-size:0.87rem;
      font-weight:bolder;
    }
    .undeline{
     width: 12.48rem;
     height: 0.18rem;
     padding-bottom: 0.63rem;
     margin-top: 0.32rem;
    }
   .chack-change{
      display: flex;
      .hours,.days,.month{
        display: inline-block;
        width: 2rem;
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
        margin-right: 3rem;
      }
      .select-road{
        width: 7.3rem;
        height: 1.2rem;
        font-size: 0.3748rem;
        border: 2px solid rgba(50,253,246,1);
        border-radius: 2px;
        background: none;
        color: #fff;
      }
    }
    .traffic-distribution-chart{
      width: 16.5rem;
      height: 5.39rem;
      background: pink;
      margin-top: 0.4rem;
    }
  }
     
</style>
