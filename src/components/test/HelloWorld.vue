<template>
  <page name="helloWorld">
    <div class="hello-world">
      <h1>This is an hello world page</h1>
    </div>
  </page>
</template>
<style lang="scss" scoped>
.hello-world {
  width: 10rem;
}
</style>
<script>
export default {
  name: 'hello-world',
  components: {},
  mounted() {
    setTimeout(() => {
      console.log(this.$route.name);
    }, 500);
  },
};
</script>
