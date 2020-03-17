<template>
  <div class="house-input-wrap">
    <label class="tip" v-show="hasLabel">{{ label }}</label>
    <input
      :class="errType ? 'error' : ''"
      v-bind="$attrs"
      v-on="inputListeners"
      :value="value"
      :type="txtType"
    />
  </div>
</template>

<script>
export default {
  name: 'credit-input',
  data() {
    return {
      errType: false,
    };
  },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    type: {
      default: '',
    },
    txtType: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
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
    inputListeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.errType = false;
          vm.$emit('input', event.target.value);
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.house-input-wrap {
  text-align: left;
  .tip {
    margin-bottom: 10px;
    font-family: SFProText;
    font-size: 14px;
    line-height: 1.64;
    color: #515f68;
    text-align: left;
  }
}
input {
  height: 46px;
  width: 343px;
  border-radius: 3.1px;
  border: solid 1px #8497a480;
  background-color: #fafcfd;
  font-size: 16px;
  text-indent: 12px;
  &::placeholder {
    opacity: 0.6;
    font-family: SFProText;
    font-size: 16px;
    line-height: 1.56;
    color: #8497a4;
  }
  &:focus {
    border: solid 1px #61b07a;
  }
}
.error {
  border: solid 1px #df6758;
}
</style>
