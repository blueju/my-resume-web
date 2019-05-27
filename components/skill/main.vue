<template>
  <div class="introduction-main">
    <el-row class="row">
      <p class="title">专业技能</p>
      <el-card class="project-card">
        <span slot='header'>前端</span>
        <p>&emsp;&emsp;前端三剑客HTML5、CSS3、JavaScript这肯定得熟悉了，最新的ES6语法也有所学习，一个功能的实现需要使用到哪些JS字符串方法/数组方法等基本都能想得到；<br>&emsp;&emsp;框架方面，目前三大框架中更为熟悉Vue及Vue SSR框架Nuxt.js，并多次使用过（这个Web版简历就是Vue+Nuxt写的）。小程序的话正在学习中，至于React也已列入学习计划；<br>&emsp;&emsp;实习时参与的项目Vue+Java前后端分离，因此对前后端分离、前后端协作开发、Git协作使用也算有一定的了解吧。</p>
      </el-card>
      <el-card class="project-card">
        <span slot='header'>后端</span>
        <p>&emsp;&emsp;后端语言中比较熟悉的是Node和Java。因为Node更接近于JS，所以也更为熟悉，其中两大框架express和koa也都有接触使用过，并做了个班级作业系统，跑得还不错。Java的话学校课程中有教授过，有些基础，也使用过由Java语言+前端语言组成的JSP技术做过一个订书系统，因此Java代码大致也是能看懂的。</p>
      </el-card>
      <el-card class="project-card">
        <span slot='header'>其他</span>
        <p>&emsp;&emsp;在学校的时候，超级认真活跃地当了四年班委（班长/学习委员/宣传委员）。可以说，组织得了活动、打得了代码、玩得了公众号（当时运营地把隔壁班同学都吸引来关注我们班公众号了）。<br>&emsp;&emsp;院羽毛球队员种子选手，身体素质还是可以的，加点班还是扛得住没问题的。</p>
      </el-card>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "IntroductionMain",
  data() {
    return {};
  }
};
</script>

<style scoped>
b {
  font-weight: bold;
}

.project-card {
  text-align: left;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 10px;
}

.intership .brief-introduction {
  /* font-size: 16px; */
  /* text-indent: 2em; */
  /* line-height: 22px; */
  /* text-align: left; */
  /* letter-spacing: 3px */
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
  /* transform: translate(0, -100%);
  transition: 0.8s ease-out; */
}

/* .content-box {
  width: 100%;
  background-color: red;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
} */

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 20px;
}

/* .detail {
  padding: 20px;
  font-size: 16px;
  text-align: justify;
  font-weight: 700;
  color: #47635b;
  line-height: 40px;
} */

/* .detail p {
  text-indent: 2rem;
} */
</style>
