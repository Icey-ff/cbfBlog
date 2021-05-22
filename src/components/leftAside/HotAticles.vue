<template>
  <el-divider content-position="left">热门文章</el-divider>

  <div class="hotlist">
    <ul>
      <li v-for="article in hotArticles"
          :key="article.id">
        <router-link :to="'/article/'+article.id"
                     exact>
          <span @click="goto(article.id)">{{article.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { reactive } from "@vue/reactivity";
import ArticlesService from "@/api/articles";
import Articles from "@/model/Articles";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  setup() {
    const hotArticles = reactive(new Array<Articles>());
    (async function (): Promise<void> {
      let res = await ArticlesService.getHotArticles();
      console.log(res.data);
      let k = 0;
      for (let i in res.data) {
        hotArticles[k++] = res.data[i];
      }
      console.log(hotArticles[0]);
    })();
    const articles = reactive([
      {
        id: "1",
        url: "/article/1",
        title: "js和ts学习",
      },
      {
        id: "2",
        url: "/article",
        title: "scss学习",
      },
      {
        id: "3",
        url: "/article",
        title: "webpack学习",
      },
      {
        id: "4",
        url: "/article",
        title: "scss学习",
      },
      {
        id: "5",
        url: "/article",
        title: "webpack学习",
      },
    ]);
    function goto(id: string) {
      localStorage.setItem("id", id);
    }
    return {
      articles,
      hotArticles,
      goto,
    };
  },
});
</script>
<style lang="scss" scoped>
.hotlist {
  text-align: start;
  margin-left: 1rem;
}
</style>
