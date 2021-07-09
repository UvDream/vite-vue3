<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-09 11:38:37
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-09 11:55:34
 * @Description: 工具栏
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar__tool">
    <section class="k-calendar__tool-left"></section>

    <section class="k-calendar__tool-center">
      <div class="k-calendar__tool-center-bar">
        <div>&lt;</div>
      </div>
      <div class="k-calendar__tool-center-time">2020年10月</div>
      <div class="k-calendar__tool-center-bar">
        <div>&gt;</div>
      </div>
    </section>
    <section class="k-calendar__tool-right">今天</section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {},
  setup() {
    return {};
  },
  components: {},
});
</script>

<style scoped lang="less"></style>
