<template>
  <div>
    <ul>
      <li v-for="data in datas"
          :key="data.key">
        <a :href="data.url"
           target="_blank">
          <i :class="data.icon"></i>
          <span>{{data.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";

export default {
  setup(): {
    datas: { key: string; icon: string; url: string; text: string }[];
  } {
    const datas = reactive([
      {
        key: "1",
        icon: "el-icon-house",
        url: "https://github.com/Icey-ff/learngit",
        text: "github",
      },
      {
        key: "2",
        icon: "el-icon-house",
        url: "https://juejin.cn/user/3729968587087463",
        text: "juejin",
      },
    ]);
    return {
      datas,
    };
  },
};
</script>
<style lang="scss" scoped>
li {
  display: inline-block;
  margin: 0 0.2rem;
}
</style>
