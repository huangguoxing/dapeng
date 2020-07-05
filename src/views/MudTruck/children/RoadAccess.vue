<template>
  <div class="road-access">
    <h3>主要路段通行量排名</h3>
     <TitleUpperLine></TitleUpperLine>
    <div class="road-access-chart" ref="accessChart" :style="getStyles(500, 1650)">

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
       let dom = this.$refs.accessChart;
       dom.style = this.getStyles(500, 1650)
       this.echart.resize()
     }
  },
    mounted(){
     window.addEventListener('resize', this.resizeHandle)
     this.echart = echarts.init(this.$refs.accessChart);
     let option = {
       grid:{
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
       },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' 万元<br/>'
            }
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ['大米', '玉米', '蔬菜', '鸡蛋', '坚果']
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
                formatter: function(value) {
                    if (value >= 10000) {
                        return (value / 10000).toLocaleString() + '万';
                    } else {
                        return value.toLocaleString();
                    }
                },
            },
            data: [50000000, 22000000, 10000000, 5000000, 1]
        }],
        series: [{
                name: '金额',
                type: 'bar',
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgb(57,89,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgb(46,200,207,1)'
                        }]),
                    },
                },
                barWidth: 20,
                data: [50000000, 22000000, 10000000, 5000000, 1]
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                data: [50000000, 50000000, 50000000, 50000000, 1],
                itemStyle: {
                    normal: {
                        color: 'rgba(24,31,68,0)',
                        barBorderRadius: 30,
                    }
                },
            },
        ]
    };
    this.echart.setOption(option);
    // console.log(echartsRem(500),65555555)
  }
};
</script>

<style lang="scss">
  .road-access{
    h3{
    font-size:0.87rem;
    font-weight:bolder;
    color:rgba(255,255,255,1);
    }
    .undeline{
     width: 12.48rem;
     height: 0.18rem;
     padding-bottom: 0.63rem;
     margin-top: 0.32rem;
    }
    .road-access-chart{
      width: 16.5rem;
      height: 5rem;
      background: pink;
    }
  }
</style>
