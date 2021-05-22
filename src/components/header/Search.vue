<template>
  <el-input v-model="search"
            size="mini"
            :clearable="true"
            prefix-icon="el-icon-search"
            placeholder="搜索文章"
            maxlength="20"
            show-word-limit
            type="text"
            @change="handleSearch"></el-input>
</template>
<script lang="ts">
import router from "@/router";
import bus from "@/utils/bus";
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "Search",
  setup() {
    const search: Ref<string> = ref("");
    const handleSearch = () => {
      console.log(search.value);
      bus.$emit("searchval", search.value);
      router.push({ path: "/searchPage" });
    };
    //处理搜索功能
    return {
      search,
      handleSearch,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-input--prefix {
  width: auto;
}
</style>
