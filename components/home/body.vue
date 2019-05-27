<template>
  <div class="information-box">
    <!-- 遮罩层。背景图片太亮 -->
    <div class="shadow"></div>
    <!-- 头像 -->
    <el-row class="portrait-row">
      <portrait></portrait>
    </el-row>
    
    <el-row>
      <labels></labels>
    </el-row>
    <!-- 短话、邮件、微信等联系方式 -->
    <el-row class="bottom-row">
      <button-group></button-group>
    </el-row>
  </div>
</template>
<script>
import portrait from "../common/portrait";
import labels from "./labels";
import buttonGroup from '../common/button';
export default {
  name: "HomeBody",
  components: {
    portrait,
    labels,
    buttonGroup
  }
};
</script>
<style scoped>
.portrait-row {
  margin-top: 80px;
}
.information-box {
  background-image: url(~assets/pics/main-bg.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.shadow{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(57,86,99,.6);
}
.bottom-row{
  margin-top: 40px;
}
</style>
