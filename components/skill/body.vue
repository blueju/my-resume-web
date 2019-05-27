<template>
  <div class="skill-box">
    <el-row class="row">
      <el-col :xs="0" :sm="12" :md="9" :lg="8" :xl="7" class="col">
        <left-side-bar></left-side-bar>
      </el-col>
      <el-col :xs="24" :sm="12" :md="15" :lg="16" :xl="17" class="col">
        <skill-main></skill-main>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import skillMain from "./main";
import leftSideBar from "../../components/common/leftSideBar";
export default {
  name: "SkillBody",
  components: {
    skillMain,
    leftSideBar
  }
};
</script>
<style scoped>
.skill-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.row, .col{
  height: 100%;
}
</style>
