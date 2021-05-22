<template>
  <div class="article-label">
    <span class="article-label-writetime">
      <i class="el-icon-date"></i>
      <span>{{newData.date}}</span>
    </span>
    <el-divider direction="vertical" />
    <span class="article-label-tags">
      <i class="el-icon-link"></i>
      <span>
        <el-tag v-for="(item,index) in newData.tags"
                :key="index"
                size="small"
                color="pink"
                effect="dark"
                :hit="false"
                @click="onClick(item,'tags')">{{item}}</el-tag>
      </span>
    </span>
    <el-divider direction="vertical" />
    <span class="article-label-folder">
      <i class="el-icon-folder"></i>
      <span>
        <el-tag v-for="(item,index) in newData.category"
                :key="index"
                size="small"
                @click="onClick(item,'categories')">{{item}}</el-tag>
      </span>
    </span>
    <el-divider direction="vertical" />
    <span class="article-label-chat">
      <i class="el-icon-chat-square"></i>
      <span>{{newData.comments?newData.comments.num:0}}</span>
    </span>
    <span class="article-label-view">
      <i class="el-icon-view"></i>
      <span>{{newData.watchedNum}}</span>
    </span>
    <el-divider />
  </div>
</template>
<script lang="ts">
import Articles from "@/model/Articles";
import router from "@/router";
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  props: {
    data: Object,
  },
  setup(props) {
    const data = reactive({ newData: {} as Articles });
    data.newData = props.data as Articles;
    const onClick = (item, path) => {
      console.log(item);
      let path1 = `/${path}/${item}`;
      console.log(path1);
      router.push({ path: path1 });
    };
    return {
      ...toRefs(data),
      onClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-tag {
  margin: 0.2rem;
}
.el-tag--dark {
  border: none;
}
</style>
