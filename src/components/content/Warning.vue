<template>
    <div class="warning">         
        <span class="warningLeft">预警：3个</span>
        <span class="warningCenter"> 预警总数：3个  超速预警1 个，电子围栏预警1个，工地扬尘预警1个 </span>
        <span class="warningRight"> 查看详情>>> </span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .warning{
      width:60.58rem;
      height:1rem;
      background: url('../../assets/images/渐变阴影.png');
      background-size: 100% 100%;
      position: absolute;
      bottom:3.78rem;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      .warningLeft,.warningCenter{
          color:#DFCE15; 
      }
      .warningRight{
          color: #FF6F6F;
      }
    }
</style>
