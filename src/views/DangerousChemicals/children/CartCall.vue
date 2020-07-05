<template>
  <div class="car-call">
      <h3>车辆报警分析</h3>
       <img class="undeline" src="../../../assets/images/flow.png" alt="">
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
export default {

}
</script>

<style lang="scss">
.car-call{
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
  .select-road{
    width: 7.3rem;
    height: 1.6rem;
    font-size: 0.3748rem;
    border: 2px solid rgba(50,253,246,1);
    border-radius: 2px;
    background: none;
    color: #fff;
  }
  .car-call-chart{
    height: 5rem;
    width: 18rem;
    background: pink;
    margin-top: 0.42rem;
  }
}
</style>
