<template>
<div class="introduction-main">
  <el-row class="row">
    <p class="title">实习经历</p>
    <el-card style="text-align:left;font-size:16px;line-height:24px;" v-for="item in internship">
      <p>实习时间： {{item.duration}}</p>
      <p>实习公司： {{item.company}}</p>
      <p>实习岗位： {{item.position}}</p>
      <p>参与项目： {{item.project}}</p>
      <p>主要工作：</p>
      <dl>
        <dd v-for="(child,index) in item.mainWorkContent" v-if="index!=item.mainWorkContent.length-1">{{index+1}}、{{child}}</dd>
      </dl>
    </el-card>
  </el-row>
</div>
</template>

<script>
export default {
  name: "IntroductionMain",
  data() {
    return {
      internship: [{
          duration: '2018.12.15 - 2019.3.27',
          company: '广州道一信息科技股份有限公司',
          position: '前端开发工程师',
          project: '企微云表单流程Vue改造',
          mainWorkContent: `完成表单流程移动端筛选交互优化需求。使用了Object、Array等ES6新特性，$set、$delete等Vue实例方法对数据进行遍历/过滤等处理，解决选择页与详情页数据结构不同情况下数据实时修改的问题；完成表单流程移动端iPhone X适配。对微信端与企业微信端底部前进后退导航有所不同的情况，使用userAgent判断客户端类型、@media媒体查询、切换Class解决；参与表单模板中心Vue改造。将API请求代码抽离成独立JS文件、map映射处理避免联调时接口参数临时变更而处理繁琐的情况、使用sort/filter/reduce等高阶函数对response响应进行处理、使用了Apizza工具在线Mock数据以方便调试；完成管理后台新增表单模块（弹窗）。使用了v-if和v-show两者共同控制多个步骤的显示隐藏及是否渲染状态，减少了无效初始渲染，并使用了部分CSS动画；`
        }
      ]
    };
  },
  created() {
    this.handleMainWorkContent()
  },
  methods: {
    handleMainWorkContent() {
      this.internship.forEach((item, index) => {
        this.internship[index].mainWorkContent = this.internship[index].mainWorkContent.split('；')
      })
    }
  }
};
</script>

<style scoped>
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
  height: 100%;
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
