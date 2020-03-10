<template>
  <van-dialog class="select-dialog" v-model="show" :show-confirm-button="false">
    <div class="d-content-wrap">
      <div class="d-title">{{title}}</div>
      <div class="d-content"><slot></slot></div>
      <div class="d-button-wrap">
        <button @click="btnClick">OK</button>
      </div>
    </div>
  </van-dialog>
</template>

<style lang="scss" scoped>
  .select-dialog {
    border-radius: 4.2px;
    width: 308px;
  }
  .d-title {
    margin-top: 21px;
    font-family: BasisGrotesquePro;
    font-size: 16.7px;
    font-weight: bold;
    text-align: center;
    color: #515f68;
  }
  .d-content-wrap {
    padding:0 14px;
  }
  .d-content {
    font-family: PingFangSC;
    font-size: 14.6px;
    line-height: 1.57;
    text-align: center;
    color: #515f68;
    margin-top: 9px;
    margin-bottom: 21px;
  }
  .d-button-wrap {
    margin-bottom: 20px;
    button {
      border: none;
      border-radius: 5.2px;
      box-shadow: 0 2px 4px 0 #5dc97c33;
      background-color: #61b07a;
      width: 283px;
      height: 53px;
      font-family: BasisGrotesquePro;
      font-size: 16.7px;
      font-weight: bold;
      text-align: center;
      color: #ffffff;
    }
  }
</style>

<script>
import { Dialog } from 'vant';

export default {
  name: 'credit-alert',
  components: {
    [Dialog.Component.name]: Dialog.Component,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    btnClick() {
      this.$emit('okClick', this.show);
    },
  },
}
</script>
