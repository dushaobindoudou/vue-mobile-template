<template>
  <button @click="btnClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'credit-button',
  methods: {
    btnClick(...args) {
      this.$emit('click', ...args);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  width: 343px;
  height: 50px;
  border-radius: 5.2px;
  box-shadow: 0 2px 4px 0 #5dc97c33;
  background-color: #61b07a;
  font-family: PingFangSC;
  font-size: 16px;
  line-height: 1.56;
  text-align: center;
  color: #ffffff;
  transition: opacity 0.2s;
  &:disabled {
    opacity: 0.2;
    background-color: #6d6f74;
  }
  &:active {
    opacity: 0.9;
  }
}
</style>
