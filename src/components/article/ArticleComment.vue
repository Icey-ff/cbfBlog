<template>
  <div class="article-comments">
    <el-divider content-position="left">
      <div class="article-comments-num">{{num?num:0}}条评论</div>
    </el-divider>
    <div class="article-comments-write">
      <div class="article-comments-write-ing">
        <el-avatar icon="el-icon-user" />
        <textarea></textarea>
      </div>
      <el-button type="primary"
                 size="small">添加评论</el-button>
    </div>
    <el-card shadow="hover">
      <div v-for="{item,index} in content"
           :key="index">
        <el-avatar /><span>{{item.name}}</span>
        <div>{{item.text}}</div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Comments } from "@/model/Articles";
export default defineComponent({
  name: "ArticleComent",
  props: {
    data: Object,
  },
  setup(props) {
    const comments1 = reactive(props.data?.comments as Comments);
    return {
      ...toRefs(comments1),
    };
  },
});
</script>
<style lang="scss" scoped>
.article-comments-write {
  width: 100%;
  text-align: left;
}
</style>
