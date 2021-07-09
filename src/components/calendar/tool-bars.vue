<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-09 11:38:37
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-09 13:07:45
 * @Description: 工具栏
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar__tool">
    <section class="k-calendar__tool-left"></section>
    <section class="k-calendar__tool-center">
      <div class="k-calendar__tool-center-bar">
        <div @click="jumpMonth('prev')">&lt;</div>
      </div>
      <div class="k-calendar__tool-center-time">{{ year }}年{{ month }}月</div>
      <div class="k-calendar__tool-center-bar">
        <div @click="jumpMonth('next')">&gt;</div>
      </div>
    </section>
    <section class="k-calendar__tool-right" @click="toNow">今天</section>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
    month: {
      type: Number,
      default: new Date().getMonth() + 1,
    },
  },
  emits: ["toNowDay", "jumpMonth"],
  setup(props, { emit }) {
    const { year, month } = toRefs(props);
    function toNow() {
      emit("toNowDay");
    }
    function jumpMonth(item: String) {
      emit("jumpMonth", item);
    }
    return {
      toNow,
      year,
      month,
      jumpMonth,
    };
  },
  components: {},
});
</script>
