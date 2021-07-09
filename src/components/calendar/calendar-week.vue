<!--
 * @Author: wangzhongjie
 * @Date: 2021-07-09 09:25:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-09 09:37:46
 * @Description: 日历星期
 * @Email: UvDream@163.com
-->
<template>
  <div class="k-calendar__week">
    <div v-for="(item, index) in weekList" :key="index">{{ item }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    weekList: {
      type: Array as PropType<Array<String>>,
      default: ["1", "2", "3", "4", "5", "6", "7"],
    },
  },
  setup() {
    return {};
  },
  components: {},
});
</script>
