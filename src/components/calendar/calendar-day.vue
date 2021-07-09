<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 16:14:02
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-09 10:54:17
 * @Description: 日历整体
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar__body">
    <div
      v-for="(item, index) in daysList"
      :key="index"
      class="k-calendar__body-item"
    >
      <CalendarDayItem :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from "vue";
import { CalendarItem } from "./index";
import CalendarDayItem from "./calendar-day-item.vue";
export default defineComponent({
  props: {
    daysList: {
      type: Array as PropType<Array<CalendarItem>>,
      default: () => [],
    },
  },
  setup(props) {
    const { daysList } = toRefs(props);
    return { daysList };
  },
  components: { CalendarDayItem },
});
</script>
