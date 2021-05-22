<template>
  <div v-show="show">没有文章符合搜索结果！</div>

  <el-main>
    <ArticleList v-if="flag"
                 :articleList="articleList" />
  </el-main>
  <el-aside v-show="!show">
    <Navigation />
  </el-aside>

</template>
<script lang="ts">
import ArticleList from "@/components/homePage/ArticleList.vue";
import Navigation from "@/components/Navigation.vue";
import { ref } from "vue";
import SearchService from "@/api/search";
import Articles from "@/model/Articles";
import markdown from "@/utils/markdown";
import bus from "@/utils/bus";

export default {
  components: {
    ArticleList,
    Navigation,
  },
  setup() {
    const articleList = ref([] as Array<Articles>);
    let titles = [];
    let flag = ref(false);
    let show = ref(false);
    const handleSearch = (val) => {
      articleList.value = [];
      titles = [];
      //获取文章列表数据
      (async () => {
        let res = await SearchService.getSearchReason(val);
        articleList.value = (res.data as any) as Array<Articles>;
        if (!articleList.value.length) {
          console.log(111111);
          show.value = true;
          return;
        }
        flag.value = false;
        show.value = false;
        for (let i = 0; i < articleList.value.length; i++) {
          titles[i] = articleList.value[i].title;
          //解析markdown字符串
          const article = markdown.marked(articleList.value[i].text);
          article.then((res: any) => {
            articleList.value[i].text = res.content;
          });
        }
        flag.value = true;
        bus.$emit("gettitles", titles);
      })();
    };

    bus.$on("searchval", handleSearch);

    return {
      articleList,
      flag,
      show,
    };
  },
};
</script>
<style lang="scss" scoped>
#home-articles-div {
  overflow-y: scroll;
  height: 87vh;
  position: relative;
  top: -7%;
  // padding-top: 3%;
}
.el-card {
  margin: 0.5rem 0;
}
</style>
