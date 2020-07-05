<template>
  <div class="traffic-distribution">
     <h3>主要路短通行量时间分布</h3>
     <img class="undeline" src="../../../assets/images/flow.png" alt="">
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
      <div class="traffic-distribution-chart">

      </div>
  </div>
</template>

<script>
export default {

}
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
    .traffic-distribution-chart{
      width: 18rem;
      height: 6.88rem;
      background: pink;
      margin-top: 0.4rem;
    }
  }
     
</style>
