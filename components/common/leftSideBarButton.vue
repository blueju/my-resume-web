<template>
<div class="button-box">
  <el-row class="button-group" :gutter="10">
    <el-col :span="6" class="col" v-for="(item, index) in icons" :key="index">
      <div class="icon" :class="item.name" @click="copyContent" :value="item.label+','+item.information"></div>
    </el-col>
  </el-row>
  <div style="margin-top:30px;color:#fff;font-size:16px;line-height:28px;">
    <p>{{label}}</p>
    <p>{{info}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "Button",
  components: {},
  data() {
    return {
      label: '',
      info: '',
      icons: [{
          name: "phone",
          label: "电话",
          information: "180-2744-9937"
        },
        {
          name: "email",
          label: "邮箱",
          information: "blueju@foxmail.com"
        },
        {
          name: "wechat",
          label: "微信",
          information: "645042315"
        },
        {
          name: "github",
          label: "github",
          information: "https://github.com/blueju"
        }
      ]
    };
  },
  methods: {
    copyContent(e) {
      let content = e.srcElement.getAttribute('value').split(',')
      this.label = content[0]
      this.info = content[1]
      // e.srcElement.select()
      // document.execCommand("Copy")
      // console.log(document.__proto__);
      // this.$message({
      //   message: '复制成功',
      //   type: 'success',
      //   duration: 1500
      // });
    }
  }
};
</script>

<style scoped>
.button-box {
  transition: width 1s ease-out;
  width: 90%;
  margin: 0 auto;
}

.phone {
  background-image: url(~assets/pics/phone.png);
}

.wechat {
  background-image: url(~assets/pics/wechat.png);
}

.github {
  background-image: url(~assets/pics/github.png);
}

.email {
  background-image: url(~assets/pics/email.png);
}

.icon {
  transition: 1s;
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 100px;
  margin: 0 auto;
  background-position: 50% 50%;
  background-size: 24px;
  background-repeat: no-repeat;
}

.icon:hover {
  border: 2px solid #ffd04b;
  transform: scale(1.2);
  cursor: pointer;
}
</style>
