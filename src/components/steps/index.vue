<template>
  <div class="steps-container">
    <div class="steps-mark-container">
      <div class="bg-line-wrap">
        <div class="select-container">
          <div class="bg-line"></div>
        </div>
      </div>
      <div class="select-line-wrap">
        <div class="select-container">
          <div class="select-line" :style="selectLineStyle"></div>
        </div>
      </div>
      <div class="circle-container">
        <div v-for="(v, i) in slot()" :key="i" class="circle-wrap">
          <div v-if="i < current" class="selected"></div>
          <div v-if="i === current" class="current"></div>
          <div v-if="i > current"></div>
        </div>
      </div>
    </div>
    <div class="circle-container text-container">
      <vnodes :vnodes="vnodes()"></vnodes>
    </div>
  </div>
</template>

<script>
export default {
  name: 'credit-steps',
  props: {
    current: {
      type: Number,
      default: 0,
    },
    iconSize: {
      type: String,
      default: '',
    },
  },
  components: {
    Vnodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  computed: {
    selectLineStyle() {
      if (this.current >= this.slot().length - 1) {
        return 'width: 100%';
      }
      return `width:${(this.current / (this.slot().length - 1)) * 100}%`;
    },
  },
  methods: {
    vnodes() {
      return this.$slots.default;
    },
    slot() {
      // eslint-disable-next-line array-callback-return
      return this.$slots.default.map(() => {});
    },
  },
  mounted() {
    // console.log(this.$slots);
  },
};
</script>

<style lang="scss" scoped>
.steps-container {
  // display: flex;
  .steps-mark-container {
    position: relative;
    height: 24px;
    // margin: 0 10%;
  }
  .select-container {
    width: 100%;
    position: relative;
    margin: 0 20px;
  }
  .bg-line-wrap,
  .select-line-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .bg-line {
    width: 100%;
    height: 1px;
    background-color: #b3bfc7;
    opacity: 0.5;
  }
  .select-line {
    width: 100%;
    height: 1px;
    background-color: #61b07a;
    opacity: 0.5;
  }
  .circle-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 2;
  }
  .circle-wrap {
    > div {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-image: url('./assets/default.png');
      background-size: 24px 24px;
      background-repeat: no-repeat;
    }
    .current {
      background-image: url('./assets/current.png');
      background-size: 24px 24px;
      background-repeat: no-repeat;
    }
    .selected {
      background-image: url('./assets/selected.png');
      background-size: 24px 24px;
      background-repeat: no-repeat;
    }
  }
  .text-container {
    margin-top: 9px;
    /deep/ .content-wrap {
      // flex: 1;
      display: flex;
      justify-content: center;
      width: 24px;
      font-family: SFProText;
      font-size: 14px;
      letter-spacing: -0.27px;
      text-align: center;
      color: #515f68;
      height: 18px;
      .content {
        // transform: translateX(-50%);
        font-family: SFProText;
        font-size: 14px;
        letter-spacing: -0.27px;
        text-align: center;
        color: #515f68;
        white-space: nowrap;
      }
    }
  }
}
</style>
