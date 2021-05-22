<template>
  <div class="article-text">
    <div v-html="text"></div>
  </div>

</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import markdown from "@/utils/markdown.js";
import bus from "@/utils/bus";
export default defineComponent({
  props: {
    data: Object,
  },
  setup(props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const str = props.data.text;
    const text = ref("");
    const article = markdown.marked(str);
    const toc = ref("");
    article.then((res: any) => {
      text.value = res.content;
      toc.value = res.toc;
      bus.$emit("toc", toc);
    });

    // console.log(toc.value);

    return {
      text,
      toc,
    };
  },
});
</script>
<style lang="scss" scoped>
.article-text {
  text-align: start;
  overflow: scroll;
}
</style>
