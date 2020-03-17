<template>
  <div class="house-phone-wrap">
    <slot name="label">
      <label class="tip" v-show="hasLabel">
        {{ label }}
      </label>
    </slot>
    <div class="house-phone-content-wrap" :class="errorClass ? 'error' : ''">
      <label>
        <slot name="tip">
          {{ areaNum }}
        </slot>
      </label>
      <input v-bind="$attrs" v-on="inputListeners" :value="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'credit-tip',
  model: {
    prop: 'value',
    event: 'input',
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
    areaNum: {
      type: String,
      default: '',
    },
    uid: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  computed: {
    errorClass() {
      return this.type === 'error';
    },
    hasLabel() {
      return !!this.label;
    },
    inputListeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit('input', event.target.value);
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.house-phone-wrap {
  text-align: left;
  .tip {
    margin-bottom: 10px;
    font-family: SFProText;
    font-size: 14px;
    line-height: 1.64;
    color: #515f68;
    text-align: left;
  }
  .house-phone-content-wrap {
    height: 46px;
    width: 343px;
    border-radius: 3.1px;
    border: solid 1px #8497a480;
    background-color: #fafcfd;
    overflow: hidden;
    display: flex;
    align-items: center;
    label {
      position: relative;
      padding: 0 12px;
      font-family: SFProText;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.56;
      letter-spacing: normal;
      color: #8497a4;
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #8497a4;
        right: 0;
        top: 0;
      }
    }
    &:focus-within {
      border: solid 1px #61b07a;
    }
  }
  .error {
    border: solid 1px #df6758;
  }
}
input {
  flex: 1;
  font-size: 16px;
  text-indent: 12px;
  background: transparent;
  border: none;
  &::placeholder {
    opacity: 0.6;
    font-family: SFProText;
    font-size: 16px;
    line-height: 1.56;
    color: #8497a4;
  }
}
</style>
