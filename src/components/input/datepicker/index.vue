<template>
  <div class="calendar-container">
    <house-input
      readonly
      @click="showCalendar"
      class="calendar-input"
      :label="label"
      :type="type"
      :value="currentDateStr"
    ></house-input>
    <div @click="showCalendar" class="calendar-icon"></div>
    <van-popup v-model="calendarShow" position="bottom">
      <van-datetime-picker
        v-model="selectedData"
        type="date"
        :min-date="dpMinDate"
        :max-date="dpMaxDate"
        :cancel-button-text="cancelBtnTxt"
        :confirm-button-text="confirmBtnTxt"
        @cancel="cancel"
        @confirm="confirm"
      />
    </van-popup>
  </div>
</template>
<script>
import { Calendar, DatetimePicker, Popup } from 'vant';
import HouseInput from '../text/index.vue';

export default {
  name: 'credit-datepicker-input',
  props: {
    type: {
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    yearGap: {
      type: Number,
      default: 80,
    },
    minDate: {
      type: String,
      default: '',
    },
    maxDate: {
      type: String,
      default: '',
    },
    currentDate: {
      type: String,
      default: '',
    },
    cancelBtnTxt: {
      type: String,
      default: '',
    },
    confirmBtnTxt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      calendarShow: false,
      selectedData: this.dpCurrentDate(),
    };
  },
  components: {
    [HouseInput.name]: HouseInput,
    [Calendar.name]: Calendar,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
  },
  computed: {
    dpMinDate() {
      if (!this.minDate) {
        const now = new Date();
        now.setFullYear(now.getFullYear() - this.yearGap);
        return now;
      }
      return new Date(this.minDate);
    },
    dpMaxDate() {
      if (!this.maxDate) {
        const now = new Date();
        now.setFullYear(now.getFullYear() + this.yearGap);
        return now;
      }
      return new Date(this.maxDate);
    },
    currentDateStr() {
      return this.selectedData ? this.formatDate(this.selectedData) : '';
    },
  },
  watch: {
    selectedData(val) {
      if (val) {
        this.selectedData = val;
      }
    },
    // TODO: props change 需要验证
    currentDate: {
      handler(newDate) {
        this.currentDate = newDate;
        this.selectedData = this.dpCurrentDate();
      },
    },
  },
  methods: {
    cancel() {
      this.selectedData = this.dpCurrentDate();
      this.calendarShow = false;
    },
    confirm() {
      const selectDateStr = this.formatDate(this.selectedData);
      this.calendarShow = false;
      this.$emit('confirm', this.selectedData, selectDateStr);
    },
    dpCurrentDate() {
      if (!this.currentDate) {
        return null;
      }
      return new Date(this.currentDate);
    },
    formatDate(date) {
      const currentMonth = date.getMonth() + 1;
      const currentDay = date.getDate();
      return `${date.getFullYear()}-${currentMonth < 10 ? '0' : ''}${currentMonth}-${
        currentDay < 10 ? '0' : ''
      }${currentDay}`;
    },
    showCalendar() {
      this.calendarShow = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.calendar-container {
  position: relative;
  .calendar-icon {
    position: absolute;
    cursor: pointer;
    width: 26px;
    height: 26px;
    background-image: url('./assets/calendar-icon.png');
    background-size: 26px 26px;
    right: 8px;
    bottom: 10px;
  }
}
</style>
