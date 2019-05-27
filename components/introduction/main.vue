<template>
<div class="introduction-main">
  <el-row class="row">
    <p class="title">个人信息</p>
    <el-card class="box-card content-box" :body-style="{ height: '100%' }">
      <!-- 个人信息表单 -->
      <el-form label-position="right" label-width="80px" :model="myInfomation">
        <el-form-item label="姓名">
          <el-input v-model="myInfomation.name" readonly></el-input>
        </el-form-item>
        <el-form-item label="意向岗位">
          <el-input v-model="myInfomation.intentionPost" readonly></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="myInfomation.telphone" readonly @focus="copyContent"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="myInfomation.email" readonly @focus="copyContent"></el-input>
        </el-form-item>
        <hr>
        <el-form-item label="毕业学校">
          <el-input v-model="myInfomation.school" readonly></el-input>
        </el-form-item>
        <el-form-item label="所学专业">
          <el-input v-model="myInfomation.major" readonly></el-input>
        </el-form-item>
        <el-form-item label="毕业时间">
          <el-input v-model="myInfomation.graduationTime" readonly></el-input>
        </el-form-item>
        <hr>
        <el-form-item label="博客">
          <el-input v-model="myInfomation.blog" readonly @focus="toUrl(myInfomation.blog)"></el-input>
        </el-form-item>
        <el-form-item label="github">
          <el-input v-model="myInfomation.github" readonly @focus="toUrl(myInfomation.github)"></el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>
</div>
</template>

<script>
export default {
  name: "IntroductionMain",
  data() {
    return {
      handleRrady: true,
      myInfomation: {
        name: '蓝钜',
        telphone: '180-2744-9937',
        email: 'blueju@foxmail.com',
        school: '广东财经大学',
        major: '信息管理与信息系统',
        graduationTime: '2019应届毕业生',
        politicCountenance: '党员',
        intentionPost: '前端开发岗',
        blog: 'https://blog.blueju.cn',
        github: 'https://github.com/blueju'
      },
      content: {
        title: "个人信息",
        detail: [
          `
          自我介绍：
          我叫蓝钜，就读于广东财经大学的信息管理与信息系统专业，是2019届应届毕业生，意向应聘贵公司的前端开发岗。
          `
        ]
      }
    };
  },
  components: {},
  mounted() {
    this.handleRrady = true;
  },
  methods: {
    copyContent(e) {
      e.target.select();
      document.execCommand("Copy");
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      });
    },
    toUrl(url) {
      console.log(url);
      window.open(url)
    }
  }
};
</script>

<style scoped>
hr {
  margin-bottom: 22px;
  height: 1px;
}

.intership .brief-introduction {
  font-size: 16px;
  /* text-indent: 2em; */
  line-height: 22px;
  text-align: left;
  letter-spacing: 3px
}

.row {
  height: 100%;
  overflow: auto;
  padding: 5% 5% 8% 5%;
  opacity: 0.9;
}

.introduction-main {
  width: 100%;
  height: 100%;
  background-image: url(~assets/pics/content-bg.jpeg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* transform: translate(0, -100%); */
  /* transition: 0.8s ease-out; */
}

.content-box {
  width: 100%;
  /* background-color: red; */
  margin: 0 auto;
  /* height: 100%; */
  overflow: auto;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

.detail {
  padding: 20px;
  font-size: 16px;
  text-align: justify;
  font-weight: 700;
  color: #47635b;
  line-height: 40px;
}

.detail p {
  text-indent: 2rem;
}
</style>
