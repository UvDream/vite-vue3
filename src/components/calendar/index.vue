<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 13:52:54
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-09 11:39:17
 * @Description: 日历
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar">
    <ToolBars />
    <CalendarWeek :weekList="weekList" />
    <CalendarDay :daysList="daysList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Calendar, { CalendarList } from "./index";
import CalendarDay from "./calendar-day.vue";
import CalendarWeek from "./calendar-week.vue";
import ToolBars from "./tool-bars.vue";
import "./index.scss";
export default defineComponent({
  props: {
    FirstDayOfWeek: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    // ==========处理星期问题==========
    let weekArr = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    let weekList = ref([] as Array<String>),
      startWeekArr = ref([] as Array<String>),
      endWeekArr = ref([] as Array<String>);

    let calendar = new Calendar({
      FirstDayOfWeek: props.FirstDayOfWeek,
    });
    // 日历周list
    let daysList = ref([] as CalendarList);
    //月份
    let nowMonth = ref(0);
    nowMonth.value = new Date().getMonth() + 1;
    // 年份
    let nowYear = ref(1990);
    nowYear.value = new Date().getFullYear();
    daysList.value = calendar.getCalendarList(nowMonth.value, nowYear.value);
    onMounted(() => {
      clacWeekList();
    });
    // 处理星期方法
    function clacWeekList() {
      weekArr.forEach((element, index) => {
        props.FirstDayOfWeek - 1 > index
          ? endWeekArr.value.push(element)
          : startWeekArr.value.push(element);
      });
      weekList.value = startWeekArr.value;
      weekList.value = weekList.value.concat(endWeekArr.value);
    }
    return { daysList, weekList };
  },
  components: { CalendarDay, CalendarWeek, ToolBars },
});
</script>
