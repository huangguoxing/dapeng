<template>
  <div class="todayFlow">
      <h3>今日车流量</h3>
      <img class="undeline" src="../../../assets/images/flow.png" alt="">
      <ul class="carType">
        <li class="carItem">
          <div class="carIcon">
              <img src="../../../assets/images/异地车辆.png" alt="">
          </div>
          <div class="carText">
             <p class="topText">驶入车辆</p>
             <p class="bottonText">3000</p>
          </div>
        </li>
         <li class="carItem">
          <div class="carIcon">
              <img src="../../../assets/images/异地车辆.png" alt="">
          </div>
          <div class="carText">
             <p class="topText">驶入车辆</p>
             <p class="bottonText">3000</p>
          </div>
        </li>
         <li class="carItem">
          <div class="carIcon">
              <img src="../../../assets/images/异地车辆.png" alt="">
          </div>
          <div class="carText">
             <p class="topText">驶入车辆</p>
             <p class="bottonText">3000</p>
          </div>
        </li>
         <li class="carItem">
          <div class="carIcon">
              <img src="../../../assets/images/异地车辆.png" alt="">
          </div>
          <div class="carText">
             <p class="topText">驶入车辆</p>
             <p class="bottonText">3000</p>
          </div>
        </li>
         <li class="carItem">
          <div class="carIcon">
              <img src="../../../assets/images/异地车辆.png" alt="">
          </div>
          <div class="carText">
             <p class="topText">驶入车辆</p>
             <p class="bottonText">3000</p>
          </div>
        </li>
         <li class="carItem">
          <div class="carIcon">
              <img src="../../../assets/images/异地车辆.png" alt="">
          </div>
          <div class="carText">
             <p class="topText">驶入车辆</p>
             <p class="bottonText">3000</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.todayFlow{
  .undeline{
   width: 12.48rem;
   height: 0.18rem;
 }
 h3{
  color: #ffffff;
  font-size:0.87rem;
  font-weight:bolder;
  //  font-size: 0.6667rem;
 }
}
  .carType {
      padding-top: 0.5rem;
      display: flex;
      flex-wrap: wrap;
      .carItem {
        display: flex;
        margin-right: 1.3rem;
        padding-bottom: 1.11rem;
        .carText {
          padding-left: 0.31rem;
          .topText {
            font-size: 0.5rem;
            color: #ffffff;
            padding-bottom: 0.43rem;
          }
          .bottonText {
            font-size: 0.8333rem;
            color: #38CEDF;
          }
        }
      }
      .carIcon {
        width: 1.7rem;
        height: 1.7rem;
        padding-right: 0.31rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .Entrance {
        h4 {
          font-size: 0.6667rem;
        }
      }
    }
</style>
