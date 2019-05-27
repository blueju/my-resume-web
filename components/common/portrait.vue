<template>
  <div class="portrait-box"></div>
</template>
<script>
export default {
  name: "Portrait"
};
</script>
<style scoped>
.portrait-box {
  width: 120px;
  height: 120px;
  border-radius: 120px;
  background-color: #fff;
  margin: 0 auto;
  background-image: url(~assets/pics/portrait.jpeg);
  background-repeat: no-repeat;
  background-size: 100%;
  border: 3px solid #fff;
}
</style>

