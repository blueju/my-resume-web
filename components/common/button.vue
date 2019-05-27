<template>
<div class="button-box" :class="{smallButtonBox: isPhone, bigButtonBox: isPC}">
  <el-row class="button-group" :gutter="10">
    <el-col :span="6" class="col" v-for="(item, index) in icons" :key="index">
      <div class="icon" :class="item.name" @click="open(item)"></div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16" :offset="4">
      <div class='iconInfo'>
        <section>
          {{selectedIconInfo.name}}
        </section>
        <section style="padding-top:10px;">
          {{selectedIconInfo.information}}
        </section>
      </div>
    </el-col>
  </el-row>

</div>
</template>

<script>
export default {
  name: "Button",
  components: {},
  data() {
    return {
      isPhone: false,
      isPC: false,
      selectedIconInfo: {
        name: '',
        information: ''
      },
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
          label: "Github",
          information: "https://github.com/blueju"
        }
      ]
    };
  },
  mounted() {
    if (document.documentElement.clientWidth <= 600) {
      this.isPhone = true;
    } else {
      this.isPC = true;
    }
  },
  methods: {
    open(item) {
      this.selectedIconInfo.name = item.label
      this.selectedIconInfo.information = item.information
    }
  }
};
</script>

<style scoped>
.iconInfo {
  margin-top: 50px;
  color: white;
  /* height: 1.5rem; */
  line-height: 18px;
  font-size: 18px;
}

.smallButtonBox {
  width: 90%;
}

.button-box {
  transition: width 1s ease-out;
  width: 90%;
  margin: 0 auto;
}

.bigButtonBox {
  width: 550px;
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
