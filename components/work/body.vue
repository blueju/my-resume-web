<template>
<div class="introduction-box">
  <el-row class="row">
    <!-- 这一列只在大屏幕下显示，适配PC端 -->
    <el-col :xs="0" :sm="12" :md="9" :lg="8" :xl="7" class="col">
      <left-side-bar></left-side-bar>
    </el-col>
    <!-- 这一列在大小屏幕下都显示，只是占比不同 -->
    <el-col :xs="24" :sm="12" :md="15" :lg="16" :xl="17" class="col">
      <introduction-main></introduction-main>
    </el-col>
  </el-row>
</div>
</template>

<script>
import introductionMain from "./main";
import leftSideBar from "../../components/common/leftSideBar";
export default {
  name: "IntroductionBody",
  components: {
    introductionMain,
    leftSideBar
  }
};
</script>

<style scoped>
.introduction-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}

.row,
.col {
  height: 100%;
}
</style>
