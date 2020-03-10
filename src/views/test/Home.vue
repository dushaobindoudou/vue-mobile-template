<template>
  <page name="Home">
    <div class="home">
      <img alt="Vue logo" src="../../assets/logo.png">
      <router-link to="/about">About</router-link>
      <div>
        <input type="text" placeholder="输入">
      </div>
      <div>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      </div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </page>
</template>

<script>
import Vue from 'vue';
import api from '@api';
// @ is an alisas to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Button } from 'vant';

Vue.use(Button);

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    HelloWorld,
  },
  mounted() {
    api.demo.login({
      page: '页面内自定义参数',
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log('数据错误:', err);
    });
  },
};
</script>
