<template>
  <page name="home">
    <div class="home-container">
      hello new word
    </div>
  </page>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  padding: 73.9px 0 0 30px;
  font-family: SFProText;
  font-size: 22px;
  font-weight: 900;
  color: #515f68;
  text-align: left;
}

.info-container {
  margin-top: 21px;
  .warp {
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: 315px 125px;
    width: 315px;
    height: 125px;
  }
}

.customer {
  .warp {
    background-image: url('./assets/custom-info-bg.png');
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
        color: #ffffff;
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

.pending-order {
  .warp {
    background-image: url('./assets/pendding-order-bg.png');
  }
}

.audit-record {
  .warp {
    background-image: url('./assets/audit-record-bg.png');
  }
}

.fix-foot {
  width: 315px;

  margin: 5.6vw auto;
}
</style>
