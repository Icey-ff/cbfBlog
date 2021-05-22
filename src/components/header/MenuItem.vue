<template>
  <router-link :to="to"><i :class="icon"></i>
    {{text}}</router-link>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import MenuItem from "@/model/Menu";
export default defineComponent({
  props: {
    menuItem: {
      type: Object,
      default: {} as MenuItem,
    },
  },
  setup(props) {
    const menuItem = reactive(props.menuItem as MenuItem);
    return {
      ...toRefs(menuItem),
    };
  },
});
</script>
