<template>
  <div class="road-access">
    <h3>主要路段通行量排名</h3>
     <TitleUpperLine></TitleUpperLine>
    <div class="road-access-chart">

    </div>
  </div>
</template>

<script>
import TitleUpperLine from '../../../components/content/TitleUpperLine'
export default {
   name:'RoadAccess',
   components:{
     TitleUpperLine
   }
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
      width: 18rem;
      height: 5rem;
      background: yellowgreen;
    }
  }
</style>
