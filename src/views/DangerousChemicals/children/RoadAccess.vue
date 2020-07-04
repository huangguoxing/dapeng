<template>
  <div class="road-access">
    <h3>主要路段通行量排名</h3>
    <img class="undeline" src="../../../assets/images/flow.png" alt="">
    <div class="road-access-chart">

    </div>
  </div>
</template>

<script>
export default {
   name:'RoadAccess'
}
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
      //width: 12.45rem;
      width: 20.89rem;
      height: 5rem;
      background: yellowgreen;
    }
  }
</style>
