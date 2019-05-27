<template>
<div class="introduction-main">
  <el-row class="row">
    <p class="title">项目实践</p>
    <!-- 版本1  标准 -->
    <section v-if="version">
      <el-card class="project-card" v-for="item in project">
        <p><b>项目名称：</b> {{item.name}}</p>
        <!-- <p><b>实践时间：</b> {{item.duration}}</p> -->
        <p v-if="item.description"><b>项目描述：</b> {{item.description}}</p>
        <p style="word-wrap:break-word;"><b>所用技术：</b> {{item.technology}}</p>
        <p><b>我做了啥：</b></p>
        <dl>
          <dd v-for="(child,index) in item.whatIdo" v-if="index!=item.whatIdo.length-1" style="padding-bottom:3px;">{{index+1}}.&emsp;{{child}}</dd>
        </dl>
      </el-card>
      <el-card class="project-card">
        <article>
          还有一些零零碎碎的小项目，如仿美团网、仿去哪儿网、京东静态页面和专门为自己搭建的校园网FTP站点而做的内网资源下载网页。同时也计划把Web版个人简历升级成个小程序版个人简历，更方便转发
        </article>
      </el-card>
    </section>

    <!-- 版本2  口语化 -->
    <section v-else>
      <!-- 作业系统 -->
      <el-card class="project-card">
        <span slot="header">作业系统</span>
        <p>&emsp;&emsp;大四的时候，为了方便自己收发作业，就做了个班级作业系统，主要是为了解决同学们深更半夜交作业、老跑来问我作业是什么/什么时候交/作业模板有没有、重复提交作业、作业命名乱七八糟、清点谁没交作业等等等一大堆问题。<br>&emsp;&emsp;作业系统前后端都是自己一个搞定的，前端使用Vue.js框架和element-ui框架，后端使用的是Node语言和Express框架，大概花3.5天完成了第一版，实现了基本功能，后期陆续用iview-ui框架和Koa2框架完善和重构了作业系统。
        </p>
      </el-card>
      <!-- 订书系统 -->
      <el-card class="project-card">
        <span slot="header">订书系统</span>
        <p>&emsp;&emsp;大三升大四的时候，想鼓捣一个订书系统给班级开学订书时用，可以解决同学们重复修改订书数据、统计交多少钱、订多少本书、支付统计等等这些问题。<br>&emsp;&emsp;使用的技术是比较老的JSP网页技术，前端使用了Bootstrap框架和jQuery框架，后端使用的是Java语言，由于是第一次做稍微像样些的系统，以前也上过Java课有基础，花了将近半个月搞定，基本实现了需要解决的功能。
        </p>
      </el-card>
      <el-card class="project-card">
        <span slot="header">Web版个人简历</span>
        <p>&emsp;&emsp;前不久感觉简历空间有限，有个Web版简历能更好地展示，便上手做了。<br>&emsp;&emsp;它只有前端，由一个模板改造而来，使用的是Vue SSR框架Nuxt.js，由于之前做过一个Nuxt.js框架仿美团网实战，所以改起来并不困难，更多的是构思怎么布局展示更好。<br>&emsp;&emsp;感觉Nuxt.js最吸引我的地方，就是它的layouts布局，能够很快好方便地生产出布局模板并快速套用，不需要重复引入固定位置的公用组件，如页头/页脚/导航栏。但如此的Nuxt.js+Node.js前后端同构，一启动慢，二Nuxt错误提示很不友好，所以还是更倾向于前后端分离。</p>
      </el-card>
      <el-card class="project-card">
        <span slot="header">其他</span>
        <p>&emsp;&emsp;还有一些零零碎碎的小项目，如仿美团网、仿去哪儿网、京东静态页面和专门为自己搭建的校园网FTP站点而做的内网资源下载网页。同时也计划把Web版个人简历升级成个小程序版个人简历，更方便转发</p>
      </el-card>
    </section>
    <el-button type="primary" style="width:100%;background-color:#395663;" @click="changeStyle">切换风格</el-button>

  </el-row>
</div>
</template>

<script>
export default {
  name: "IntroductionMain",
  data() {
    return {
      version: false,
      project: [{
        name: '作业系统',
        // duration: '2018.12.15 - 2019.3.27',
        description: '提高作业收发效率并投入班级使用。实现有作业版本控制、在线阅读、邮箱/短信验证、批量重命名、统计提交实况等需求功能及登录/注册/上传/下载等常用功能。',
        technology: 'Vue/iView/ElementUI/Node/Express/Koa/MySQL',
        whatIdo: `使用 Promise 对 node-mysql 模块进行二次封装，使 node-mysql 支持 async/await，简化代码。；使用 Node 系统 API 操作作业文件，解决异步竞态条件导致的执行顺序不可控问题，完成版本控制功能。；使用 Vuex 对公用数据进行集中式管理，结合 Vue 路由守卫对非法访问进行路由级拦截跳转，确保安全。；涉密操作均 SHA1+MD5 双重加密，修改密码需 SMTP 邮件验证，确保密码安全。；`
      }, {
        name: '订书系统',
        // duration: '2018.12.15 - 2019.3.27',
        description: '解决开学订书需求，实现功能有订书管理、定价管理、数据统计、通知管理、支付确认、截止日期等。',
        technology: 'Bootstrap/jQuery/JSP/JavaBean/MySQL/Linux',
        whatIdo: `使用 Java 哈希表 HashMap 存储管理各科教材与教材新旧分类之间的价格对应关系，实现定价管理。；使用媒体查询、伪元素、定位等方法实现表格移动端适配。；`
      }, {
        name: '仿美团网',
        // duration: '2018.12.15 - 2019.3.27',
        // description: '。',
        technology: 'Nuxt、Stylus、ElementUI',
        whatIdo: `城市选择页中，PC 端利用锚点使点击时跳转到对应城市，移动端则根据 click/touch 事件计算距顶高度并结合
better-scroll 进行跳转，同时为优化性能，使用定时器进行函数节流以减少频繁 touch 导致的无效计算。探索性使用 SSR 服务端渲染框架 Nuxt 进行开发，了解 Nuxt 生命周期，尝试前后端同构及 SEO 优化。；商品分类导航中，思考合理划分 DOM 结构以提高可维护性、使用组件传值以实现左右分类详情数据联动。；`
      }]
    };
  },
  created() {
    this.handleMainProjectContent()
  },
  methods: {
    changeStyle() {
      this.version = !this.version
    },
    handleMainProjectContent() {
      this.project.forEach((item, index) => {
        this.project[index].whatIdo = this.project[index].whatIdo.split('；')
      })
    }
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
