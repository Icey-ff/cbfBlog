<template>
  <el-divider content-position="left">快速导航</el-divider>
  <ul>
    <li v-for="(item,index) in titles"
        :key="index">
      <router-link :to="'/article/'+(index+1)"><span @click="goto(index+1)">{{item}}</span></router-link>
    </li>

  </ul>
</template>
<script lang="ts">
import bus from "@/utils/bus";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const titles = ref(new Array<string>());
    bus.$on("gettitles", getTitles);
    function getTitles(val) {
      titles.value = val;
      console.log(titles.value);
    }
    function goto(id: string) {
      localStorage.setItem("id", id);
    }
    return {
      titles,
      goto,
    };
  },
});
</script>
<style lang="scss" scoped>
a {
  color: #8590a6;
}
a:hover {
  color: lightblue;
  cursor: pointer;
}
</style>
