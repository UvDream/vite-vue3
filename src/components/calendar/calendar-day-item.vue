<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-09 10:30:59
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-09 16:16:19
 * @Description: 日历的天
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar__body-item-day">
    <div :class="{ 'not-current-month': data.type === 'prev' }">
      <section
        class="k-calendar__body-item-day-top"
        :class="[{ 'current-day': data.current }]"
      >
        {{ data.day }}
      </section>
      <section class="k-calendar__body-item-day-bottom">
        {{ data.lunarDayNumber === 1 ? data.lunarMonth : data.lunarDay }}
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { CalendarItem } from "./calendar";
export default defineComponent({
  props: {
    data: {
      type: Object as PropType<CalendarItem>,
      default: () => {},
    },
  },
  setup(props) {
    const { data } = toRefs(props);
    return { data };
  },
  components: {},
});
</script>
