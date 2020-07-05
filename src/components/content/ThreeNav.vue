<template>
  <div class="ThreeNav">    
              <ul>
                 <div class="nav-left"><img src="../../assets/images/左右4.png" alt=""></div>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                <li class="navItem"><span>三级导航栏1</span></li>
                  <div class="nav-right"><img src="../../assets/images/左右4.png" alt=""></div>
              </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .ThreeNav{
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 1.24rem;
  margin-top: 1.7rem;
  .nav-left,.nav-right {
    width: 0.72rem;
    height: 0.72rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    display: flex;
    height: 1.24rem;
    justify-content: space-between;
    align-items: center;
  }
  .navItem {
    font-size: 0.5rem;
    padding: 0.38rem 0.72rem;
    margin: 0 0.58rem;
    background:rgba(50,253,246,0.3);
    box-shadow:0px 0px 5px 0px rgba(50,253,246,1);
    border-radius: 0.05rem;
    span{
      color: #ffffff;
    }
  }
}
</style>
