<template>
  <div class="app-container">
    <!-- <mt-header >
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header> -->
    <div class="page-header-container" v-show="isShowNav">
      <van-nav-bar :title="pageTitle" left-arrow class="page-header">
        <div slot="left" @click="back" class="left-back"></div>
      </van-nav-bar>
    </div>
    <div class="container" :style="containerStyle">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-container {
  overflow: hidden;
}
.page-header-container {
  // margin-top: 25px;
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  z-index: 999;
  top: 0;
}
.page-header {
  height: 58px;
  line-height: 58px;
}
.left-back {
  background-image: url('./assets/left.svg');
  background-repeat: no-repeat;
  background-size: 25px 25px;
  width: 25px;
  height: 25px;
}

/deep/ .van-nav-bar__left {
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/deep/ .van-nav-bar__title {
  font-family: SFProText;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #61b07a;
}

/deep/ .van-hairline--bottom::after {
  border-color: #d8d8d8;
}
.container {
  margin-top: 58px;
}
</style>
<script>
import { NavBar } from 'vant';

export default {
  name: 'page',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isShowNav: true,
    };
  },
  components: {
    [NavBar.name]: NavBar,
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route.mate': () => {
      console.log('meta changed ');
    },
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title || this.$route.name || '';
    },
    containerStyle() {
      return `margin-top:${this.isShowNav ? '15.467vw' : 'auto'}`;
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
    updateNavStatus() {
      if (!this.$route.meta || this.$route.meta.hideNav === undefined) {
        return;
      }
      console.log(this.name, this.$route.name);
      if (this.name !== this.$route.name) {
        return;
      }
      this.isShowNav = !this.$route.meta.hideNav;
    },
  },
  beforeMount() {
    this.updateNavStatus();
  },
  beforeUpdate() {
    this.updateNavStatus();
  },
};
</script>
