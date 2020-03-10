<template>
  <div class="house-radio-container">
    <div class="house-radio-wrap" >
      <label class="tip" v-show="hasLabel">{{label}}</label>
    </div>
    <div class="house-radio-content">
      <van-radio-group
        v-model="radio"
        @change="change"
        direction="horizontal"
        class="house-raido-group">
        <van-radio
          v-for="(v, i) in optionList" :key="i" :name="'' + i"
          class="house-radio-content-wrap"
        >
          <label class="house-radio-txt">
            {{v}}
          </label>
          <div
            :class="'house-radio-icon ' +(props.checked ? 'icon-active' : '')"
            slot="icon"
            slot-scope="props"
          >
          </div>
        </van-radio>
      </van-radio-group>
    </div>
  </div>
</template>

<script>
import { RadioGroup, Radio } from 'vant';

export default {
  name: 'credit-radio',
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
    },
    optionList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      radio: this.selected,
    };
  },
  watch: {
    selected(val) {
      this.radio = val;
    },
  },
  components: {
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
  },
  computed: {
    errorClass() {
      return this.type === 'error';
    },
    hasLabel() {
      return !!this.label;
    },
  },
  methods: {
    change() {
      this.$emit('change', this.radio);
    },
  },
}
</script>

<style lang="scss" scoped>
  .house-radio-container {
    position: relative;
  }

  .house-radio-wrap {
    text-align: left;
    margin-bottom: 10px;
    .tip {
      font-family: SFProText;
      font-size: 14px;
      line-height: 1.64;
      color: #515f68;
      text-align: left;
    }
  }
  .house-radio-content-wrap {
    /deep/ .van-radio__icon {
      width: 22px;
      height: 22px;
    }
  }

  .house-radio-content {
    text-align: left;
  }

  .house-radio-txt {
    font-family: SFProText;
    font-size: 16px;
    line-height: 1.56;
    color: #8497a4;
  }

  .house-raido-group {
    height: 25px;
    > div {
      width: 140px;
    }
  }

  .house-radio-txt-active {
    color: #515f68;
  }

  .house-radio-icon {
    border: solid 1px #8497a4;
    border-radius: 50%;
    width: 21px;
    height: 21px;
  }

  .icon-active {
    position: relative;
    border: solid 1px rgba(97, 176, 122, 1);
    border-radius: 50%;
    width: 21px;
    height: 21px;
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #61b07a;
      border-radius: 50%;
    }
  }

</style>
