<template>
  <div id="app">
    <normal-page></normal-page>
  </div>
</template>

<script>
import normalPage from '@components/page/normal.vue';

export default {
  created() {},
  components: {
    normalPage,
  },
  mounted() {
    console.log('当前环境数据：', process.env);
  },
};
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.defalut {
  width: 5rem;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
