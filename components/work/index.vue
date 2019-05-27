<template>
  <div>
    <el-container>
      <el-main>
        <introduction-body></introduction-body>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>
<script>
import introductionBody from "./body";
import Footer from "../common/footer";
export default {
  name: "IntroductionIndex",
  components: {
    introductionBody,
    Footer
  }
};
</script>
<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 94%;
  position: relative;
}
.el-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

