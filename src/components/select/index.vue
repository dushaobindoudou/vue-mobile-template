<template>
  <div class="house-select-wrap">
    <slot name="label">
      <label class="tip" v-show="hasLabel">
        {{ label }}
      </label>
    </slot>
    <select
      :class="errType ? 'error' : ''"
      v-bind="$attrs"
      v-on="selectListeners"
      :value="selected"
    >
      <slot></slot>
    </select>
  </div>
</template>
<script>
export default {
  name: 'credit-select',
  data() {
    return {
      errType: false,
    };
  },
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: {
    type: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    selected: {
      default: '',
    },
  },
  created() {
    this.errType = this.type === 'error';
  },
  watch: {
    type(newType) {
      this.errType = newType === 'error';
    },
  },
  computed: {
    hasLabel() {
      return !!this.label;
    },
    selectListeners() {
      const vm = this;
      return {
        // 我们从父级添加所有的监听器
        ...this.$listeners,
        change(event) {
          vm.errType = false;
          vm.$emit('change', event.target.value);
        },
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.house-select-wrap {
  text-align: left;
  .tip {
    margin-bottom: 10px;
    font-family: SFProText;
    font-size: 14px;
    line-height: 1.64;
    color: #515f68;
    text-align: left;
  }
  .error {
    border: solid 1px #df6758;
  }
}
select {
  height: 46px;
  width: 343px;
  border-radius: 3.1px;
  border: solid 1px #8497a480;
  background-color: #fafcfd;
  font-size: 16px;
  text-indent: 12px;
  appearance: none;
  -webkit-appearance: none;
  background-image: url('./assets/jiantou-icon.png');
  background-size: 12px 9px;
  background-repeat: no-repeat;
  background-position: 317px 18px;
}
</style>
