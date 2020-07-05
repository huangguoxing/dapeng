<template>
  <div class="track-query">
    <h3>车辆轨迹特征查询</h3>
      <TitleUpperLine></TitleUpperLine>
     <div>
       <input type="text" placeholder="请输入车牌号">
     </div>
  </div>
</template>

<script>
import TitleUpperLine from '../../../components/content/TitleUpperLine'
export default {
 components:{
   TitleUpperLine
 }
}
</script>

<style lang="scss">
  .track-query{
     h3{
      color: #ffffff;
      font-size:0.87rem;
      font-weight:bolder;
      margin-top:1rem;
     }
  }
</style>
