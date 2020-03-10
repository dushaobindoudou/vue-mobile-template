<template>
  <transition :name="transitionName">
    <vue-page-stack>
      <router-view :key="$route.fullPath" class="router-view-container" />
    </vue-page-stack>
  </transition>
</template>

<script>
import { Button } from 'mint-ui';

const DEFAULT_TRANSITION = 'forward';

export default {
  name: 'trans-page',
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
    };
  },
  watch: {
    $route(to) {
      console.log('当前页面', to);
      if (to.params['stack-key-dir'] === 'forward') {
        this.transitionName = 'forward';
      } else {
        this.transitionName = 'back';
      }
    },
  },
};
</script>

<style lang="scss">
.router-view-container {
  position: absolute;
  transition: opacity 0.54s, transform 0.54s;
  transition-timing-function: cubic-bezier(0.32,0.72,0,1);
  width: 100%;
}

.forward-enter,
.back-leave-active {
  opacity: 0.8;
  transform: translateX(100%);
}
.forward-leave-active,
.back-enter {
  opacity: 0.8;
  transform: translateX(-100%);
}
</style>
