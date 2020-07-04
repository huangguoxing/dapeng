<template>
  <div class="entrance">
      <div class="entrance-title">
        <span class="entrance-ranking">出入口排名</span>
        <span class="entrance-distribution">出入口时间分布</span>
        <span class="drive-in">驶入</span>
        <span class="drive-out">驶出</span>
      </div>
      <img class="undeline" src="../../../assets/images/flow.png" alt="">
      <div class="chack-change">
        <span class="hours">时</span>
        <span class="days">日</span>
        <span class="month">月</span>
        <option value="">
           <select name="" id="">深葵路</select>
        </option>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .entrance{
    .entrance-ranking{
      font-size:0.5rem;
      color:rgba(255,255,255,1);
      padding-right: 0.89rem;
    }
    .entrance-distribution{
      font-size:0.87rem;
      font-weight:bolder;
      color:rgba(255,255,255,1);
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
    .undeline{
     width: 12.48rem;
     height: 0.18rem;
    }
    .chack-change{
      display: flex;
      .hours,.days,.month{
        display: inline-block;
        width: 1.8rem;
        height: 0.9rem;
        border: 2px solid #32fdf6;
        border-radius: 4px 0px 0px 4px;
        background: #32FDF6;
        font-size: 0.42rem;
        text-align: center;
        line-height: 0.9rem;
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
      }
    }
  }
</style>
