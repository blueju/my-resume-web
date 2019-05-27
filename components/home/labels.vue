<template>
<div class="home-labels">
  <!-- <el-row class="first-row row">MY NAME IS</el-row> -->
  <el-row class="second-row row">
    <div class="name">{{name}}</div>
  </el-row>
  <!-- <el-row class="third-row row">
      <div class="line"></div>
    </el-row> -->
  <!-- <el-row class="forth-row row">
      <span>{{remark}}</span>
    </el-row> -->
</div>
</template>

<script>
export default {
  name: "HomeLabels",
  data() {
    return {
      name: "蓝 钜",
      remark: '前端开发工程师'
    };
  },
  computed: {}
};
</script>

<style scoped>
.home-labels {
  margin-top: 100px;
}

.name {
  font-size: 38px;
  font-weight: 400;
  /* font-family: 'FangSong' */
}

.line {
  height: 1px;
  width: 450px;
  background-color: #fff;
  margin: 0 auto;
}

.row {
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 4%;
}

.first-row {
  font-size: 1.6rem;
  margin-top: 50px;
  margin-bottom: 15px;
}

.second-row {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.forth-row {
  font-size: 1rem;
  margin-top: 10px;
  font-weight: bold;
}
</style>
