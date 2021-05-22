<template>
  <div class="tags">
    <Timeline />

  </div>
</template>
<script lang="ts">
import Timeline from "@/components/Timeline.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    Timeline,
  },
  data() {
    return {
      res: Object,
    };
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.tags {
  padding-left: 2rem;
  padding-top: 1rem;
}
</style>
