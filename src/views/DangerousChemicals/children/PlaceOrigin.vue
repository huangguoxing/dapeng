<template>
  <div class="place-origin">
     <div class="place-title">
       <span class="place-from">来源地</span>
       <span class="drive-in">驶入</span>
       <span class="drive-out">驶出</span>
     </div>
     <img class="undeline" src="../../../assets/images/flow.png" alt="">
     <div class="place-chart">

     </div>
  </div>
</template>

<script>
export default {

}
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
      padding-right:11.6rem;
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
   .undeline{
     width: 12.48rem;
     height: 0.18rem;
     padding-bottom: 0.63rem;
     margin-top: 0.32rem;
    }
  .place-chart{
    width: 20.89rem;
    height: 6.88rem;
    background:pink;
  }
</style>
