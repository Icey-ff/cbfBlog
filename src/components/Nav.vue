<template>
  <div class="article-nav">
    <el-divider content-position="left">快速定位</el-divider>
    <div v-html="toc"></div>
  </div>
</template>
<script lang="ts">
import bus from "@/utils/bus";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Nav",
  components: {},
  setup() {
    const toc = ref("");
    bus.$on("toc", getToc);
    function getToc(val) {
      toc.value = val["_rawValue"];
      console.log(toc.value);
    }
    return {
      toc,
    };
  },
});
</script>

<style lang="scss" scoped>
.article-nav {
  border-left: 1px solid #ccc;
  height: 10rem;
  padding: 0 1rem;
}
.article-nav {
  position: fixed;
  width: 17%;
  right: 0;
}
</style>
