<template>
  <div>
    <el-container>
      <el-main>
        <project-body></project-body>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>
<script>
import projectBody from "./body";
import Footer from "../common/footer";
export default {
  name: "ProjectIndex",
  components: {
    projectBody,
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

