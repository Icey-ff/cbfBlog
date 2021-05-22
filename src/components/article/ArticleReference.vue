<template>
  <div class="article-reference">
    <el-divider content-position="left">参考</el-divider>
    <div v-for="(item,index) in data.references"
         :key="index"
         class="ref">
      <a :href="item.refSrc">{{item.refTitle}}</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: Object,
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
.article-reference {
  text-align: left;
}
/* a:hover {
  color: aqua;
} */
.ref {
  margin: 0 0.5rem;
}
</style>
