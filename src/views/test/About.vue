<template>
  <page name="About">
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </page>
</template>
<style lang="scss" scoped>
  .about {
    width: 10rem;
  }
</style>
<script>
export default {
  name: 'about',
  components: {
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$route.name);
    }, 500);
  },
};
</script>
