<template>
  <div class="danger">
    <DpHeader><div>危化品</div></DpHeader>
    <div class="danger-chart">
        <div class="danger-left">
           <TodayFlow></TodayFlow>
           <Entrance></Entrance>
           <PlaceOrigin></PlaceOrigin>
        </div>
        <!-- <div class="danger-right">
           <TodayFlow></TodayFlow>
        </div> -->
   </div>
  </div>
</template>

<script>
import DpHeader from '../../components/content/DpHeader'

import TodayFlow from './children/TodayFlow' 
import Entrance from './children/Entrance' 
import PlaceOrigin from './children/PlaceOrigin' 
export default {
  name:'DangerousChemicals',
  components:{
    DpHeader,
    TodayFlow,
    Entrance,
    PlaceOrigin
  }
}
</script>

<style lang="scss">
 .danger-chart{
   display: flex;
   justify-content: space-between;
   padding:0 2.28rem 0 1.25rem;
 }
 .danger-left{
   width:21rem;
   //background: pink;
 }
 .danger-right{
   width:12.76rem;
   background: pink;
 }
</style>
