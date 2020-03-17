<template>
  <transition>
    <router-view />
  </transition>
</template>

<script>
import { Button } from 'mint-ui';

export default {
  name: 'normal-page',
  components: {
    [Button.name]: Button,
  },
};
</script>

<style lang="scss"></style>
