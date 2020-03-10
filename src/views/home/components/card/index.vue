<template>
  <div @click="jumpTo" class="card-container">
    <div class="warp" :style="cardStyle">
      <div class="header-wrap">
        <div class="title">{{name}}</div>
        <div class="left-arrow"></div>
      </div>
      <div class="footer-wrap">
        <div class="icon" :style="optStyle"></div>
        <div class="tip">{{footerTip}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-card',
  props: {
    name: {
      type: String,
      default: '',
    },
    bgImg: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    footerTip: {
      type: String,
      default: '',
    },
    optIcon: {
      type: String,
      default: '',
    },
  },
  computed: {
    cardStyle() {
      return `background-image: url(${this.bgImg})`;
    },
    optStyle() {
      return `background-image: url(${this.optIcon})`;
    },
  },
  methods: {
    jumpTo() {
      if (!this.href) {
        return;
      }
      this.$router.push(this.href);
    },
  },
}
</script>

<style lang="scss" scoped>
  .card-container {
    margin-top: 21px;
    cursor: pointer;
    .warp {
      margin: 0 auto;
      background-repeat:  no-repeat;
      background-size: 315px 125px;
      width: 315px;
      height: 125px;
      .header-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 21px 17px 0 17px;
        .title {
          font-family: SFProText;
          font-size: 16px;
          font-weight: bold;
          line-height: 1.43;
          color: #ffffff
        }
        .left-arrow {
          width: 20px;
          height: 20px;
          background-image: url('./assets/left-arrow.svg');
          background-repeat: no-repeat;
          background-size: 20px 20px;
        }
      }
      .footer-wrap {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 27px 17px 0 17px;
        .icon {
          width: 34px;
          height: 34px;
          background-image: url('./assets/ci-icon.png');
          background-size: 34px 34px;
          background-repeat: no-repeat;
        }
        .tip {
          opacity: 0.6;
          font-family: SFProText;
          font-size: 14px;
          font-weight: 600;
          text-align: right;
          color: #ffffff;
        }
      }
    }
  }
</style>
