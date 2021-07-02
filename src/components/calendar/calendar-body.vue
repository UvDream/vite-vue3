<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 16:14:02
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-02 17:02:48
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
      {{ item.day }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from "vue";
import { CalendarItem } from "./index";
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
  components: {},
});
</script>

<style scoped lang="scss">
.k-calendar__body {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  &-item {
    display: inline-grid;
    grid-template-columns: repeat(7, 1fr);
    outline: 1px solid orange;
  }
}
</style>
