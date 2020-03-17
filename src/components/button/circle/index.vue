<template>
  <house-button @click="btnClick" class="circle-btn">
    <slot></slot>
  </house-button>
</template>

<script>
import HouseButton from '../common/button.vue';

export default {
  name: 'credit-circle-button',
  components: {
    HouseButton,
  },
  methods: {
    btnClick(...args) {
      this.$emit('click', ...args);
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-btn {
  width: 60px;
  height: 60px;
  background: url('./assets/circle.png');
  background-size: 60px 60px;
  border-radius: 50%;
  &:disabled {
    background-image: url('./assets/disable.png');
  }
}
</style>
