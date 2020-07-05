<template>
  <div class="danger">
    <DpHeader><div>危化品</div></DpHeader>
    <div class="danger-chart">
        <div class="danger-left">
           <TodayFlow></TodayFlow>
           <Entrance></Entrance>
           <PlaceOrigin></PlaceOrigin>
        </div>
        <div class="danger-right">
          <RoadAccess></RoadAccess>
          <TrafficDistribution></TrafficDistribution>
          <CartCall></CartCall>
          <TrackQuery></TrackQuery>
        </div>
   </div>
    <Warning></Warning>
    <ThreeNav></ThreeNav>
  </div>
</template>

<script>
import DpHeader from '../../components/content/DpHeader'
import Warning from '../../components/content/Warning'
import ThreeNav from '../../components/content/ThreeNav'

import TodayFlow from './children/TodayFlow' 
import Entrance from './children/Entrance' 
import PlaceOrigin from './children/PlaceOrigin' 

import RoadAccess from './children/RoadAccess'
import TrafficDistribution from './children/TrafficDistribution'
import CartCall from './children/CartCall'
import TrackQuery from './children/TrackQuery'
export default {
  name:'DangerousChemicals',
  components:{
    DpHeader,
    Warning,
    ThreeNav,
    TodayFlow,
    Entrance,
    PlaceOrigin,
    RoadAccess,
    TrafficDistribution,
    CartCall,
    TrackQuery
  }
}
</script>

<style lang="scss">
.danger{
  position:absolute;
  height:100%;
  width:100%;
  z-index: 2;
}
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
  // width:12.76rem;
   width:18rem;
  // background: pink;
 }
</style>
