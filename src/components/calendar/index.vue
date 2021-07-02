<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 13:52:54
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-02 17:04:19
 * @Description: 日历
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar">
    <CalendarBody :daysList="daysList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Calendar from "./index";
import CalendarBody from "./calendar-body.vue";
export default defineComponent({
  props: {},
  setup() {
    const daysList = new Calendar({ FirstDayOfWeek: 7 }).getCalendarList(
      10,
      2021
    );
    onMounted(() => {
      let calendar = new Calendar({ FirstDayOfWeek: 2 });
      //   console.log("weekStartIndex", calendar.weekStartIndex(7, 2021));
      //   console.log("getPrevDaysList", calendar.getPrevDaysList(7, 2021));
      console.log(calendar.getCalendarList(10, 2021).length);

      //   console.log("getNextDaysList", calendar.getNextDaysList(8, 2021));
    });
    return { daysList };
  },
  components: { CalendarBody },
});
</script>
<style style="scss">
.k-calendar {
  width: 800px;
  height: 400px;
  outline: 1px solid red;
}
</style>
