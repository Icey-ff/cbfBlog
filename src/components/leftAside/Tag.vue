<template>
  <el-divider content-position="left">标签</el-divider>
  <div class="tage-group">
    <el-tag v-for="tag in tags1"
            :key="tag.id"
            :type="tag.type"
            effect="plain"
            @click="onClick(tag.id)">{{tag.label}}
    </el-tag>
  </div>

</template>
<script lang="ts">
import router from "@/router";
import TagsService from "@/api/tags";
import { Ref, ref } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const tags1: Ref<any> = ref(1);
    (async () => {
      console.log("ref:" + tags1.value);
      const res = await TagsService.getTags();
      tags1.value = res.data;
    })();
    function onClick(id) {
      router.push({ path: `/tags/${id}` });
    }
    return {
      onClick,
      tags1,
    };
  },
};
</script>
<style lang="scss" scoped>
.el-tag {
  margin: 0.2rem;
}
</style>
