<template>
  <div class="views">
   <router-view/>
  </div>
</template>

<script>

export default {
  name: 'views',
  components: {},
  created () {}
}
</script>
<style>
 .views{
   height:100%;
   background: url('../assets/images/transparent.png');
   background-size: 100% 100%;
 }
</style>
