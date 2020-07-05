<template>
  <div class="car-call">
      <h3>车辆报警分析</h3>
      <TitleUpperLine></TitleUpperLine>
       <div>
          <select name="" id="" class="select-road">
            <option value="">超速行驶</option>
            <option value="">快速行驶</option>
            <option value="">急速行驶</option>
          </select>
       </div>
       <div class="car-call-chart">

       </div>
  </div>
</template>

<script>
import TitleUpperLine from '../../../components/content/TitleUpperLine'
export default {
    name:'CarCall',
    components: {
    TitleUpperLine
  }
}
</script>

<style lang="scss">
.car-call{
  h3{
    font-size:0.87rem;
    font-weight:bolder;
    color:rgba(255,255,255,1);
    margin-top: 1rem;
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
  .car-call-chart{
    height: 5rem;
    width: 16.5rem;
    background: pink;
    margin-top: 0.42rem;
  }
}
</style>
