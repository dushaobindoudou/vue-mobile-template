<template>
  <transition name="page-switch" mode="out-in">
    <router-view />
  </transition>
</template>

<script>
import { Button } from 'mint-ui';

export default {
  name: 'fade-page',
  components: {
    [Button.name]: Button,
  },
};
</script>

<style lang="scss">
.page-switch-enter-active,
.page-switch-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.page-switch-enter,
.page-switch-leave-active {
  opacity: 0;
}
</style>
