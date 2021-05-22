<template>
  <!-- <el-main> -->
  <el-row>
    <el-col :xs="24"
            :sm="24"
            :md="18"
            :lg="18"
            :xl="18">
      <ArticleList :articleList="articleList" />
    </el-col>
    <el-col :xs="0"
            :sm="0"
            :md="5"
            :lg="5"
            :xl="5"
            :offset="1">
      <Navigation />
    </el-col>
  </el-row>

  <!-- </el-main>

  <el-aside>
  </el-aside> -->

</template>
<script lang="ts">
import ArticleList from "@/components/homePage/ArticleList.vue";
import Navigation from "@/components/Navigation.vue";
import { ref } from "vue";
import ArticlesService from "@/api/articles";
import Articles from "@/model/Articles";
import markdown from "@/utils/markdown";
import bus from "@/utils/bus";

export default {
  components: {
    ArticleList,
    Navigation,
  },
  setup() {
    const articleList = ref([]);
    let titles = [];
    let flag = ref(false);
    //获取文章列表数据
    (async function getArticleList() {
      let res = await ArticlesService.getArticleList();
      articleList.value = (res.data as any) as Array<Articles>;
      console.log(articleList.value);
      for (let i = 0; i < articleList.value.length; i++) {
        // articleList.value[i] = res.data[i] as Articles;
        titles[i] = articleList.value[i].title;
        //解析markdown字符串
        const article = markdown.marked(articleList.value[i].text);
        article.then((res: any) => {
          articleList.value[i].text = res.content;
        });
      }
      // console.log(titles);
      flag.value = true;
      bus.$emit("gettitles", titles);
    })();

    return {
      articleList,
      flag,
    };
  },
};
</script>
<style lang="scss" scoped>
#home-articles-div {
  overflow-y: scroll;
  height: 87vh;
  position: relative;
  top: 0;
  // padding-top: 3%;
}
.el-card {
  margin: 0.5rem 0;
}
.el-main {
  padding-top: 0;
}
.el-row {
  padding-left: 1rem;
}
</style>
