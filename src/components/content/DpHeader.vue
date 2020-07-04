<template>
  <div class="dpHeader">
      <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="headerLine">
          <!-- 头部线条 -->
      </div>
      <div class="titleLine">
          <ul class="titleUl">
            <li>交通运行</li>
            <li>文化旅游</li>
            <li>公共安全</li>
            <li>政务服务</li>
            <li>生态环境</li>
          </ul>
      </div>
      <div class="theme"><slot></slot></div>
      <div class="time">
          <span>2020年06月02日</span>
          <span>08:00:00</span>
          <span>星期二</span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="scss">
.dpHeader{
  position: relative;
}
.headerLine {
  width: 100%;
  height: 3.34rem;
  background: url("../../assets/images/全屏头部.png");
  background-size: 100% 100%;
}
.titleLine {
  width: 28.6rem;
  height: 2.04rem;
  margin: 0 auto;
  background: url("../../assets/images/组.png");
  background-size: 100% 100%;
}
.theme{
  position: absolute;
  right:17.48rem;
  top:0.71rem;
  color: red;
  font-size:0.67rem;
}
.titleUl {
  display: flex;
  height: 2.04rem;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  box-sizing: border-box;
  li {
    font-size: 0.75rem;
  }
}
.logo {
  position: absolute;
  left: 50%;
  padding-top: 0.95rem;
  margin-left: -9.459rem;
  width: 18.99rem; //测量的
  height: 1.71rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.time {
  position: absolute;
  top: 0.69rem;
  right: 2.76rem;
  font-size: 0.75rem;
  color: #ffffff;
  span {
    display: inline-block;
    padding-left: 1.1rem;
  }
}
</style>
