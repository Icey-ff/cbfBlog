<template>
  <div class="pigeonhole">
    <Timeline />

  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Timeline from "@/components/Timeline.vue";
@Options({
  components: {
    Timeline,
  },
})
export default class Pigeonhole extends Vue {}
</script>
<style lang="scss" scoped>
.pigeonhole {
  padding-left: 2rem;
  padding-top: 1rem;
  position: relative;
  width: 100%;
}
</style>
