<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-02 09:40:48
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-02 16:21:26
 * @Description: home
 * @Email: UvDream@163.com
-->
<template>
  <div class="home">
    <Calendar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Calendar from "../components/calendar/index.vue";
export default defineComponent({
  props: {},
  setup() {
    return {};
  },
  components: { Calendar },
});
</script>

<style scoped lang="scss"></style>
