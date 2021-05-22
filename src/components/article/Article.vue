<template>
  <div class="article"
       v-cloak>
    <el-row>
      <el-col :xs="24"
              :sm="24"
              :md="18"
              :lg="18"
              :xl="18">
        <div class="article-main">
          <div class="article-title">{{data.title}}</div>
          <ArticleLabel v-if="flag"
                        :data="data" />
          <ArticleText v-if="flag"
                       :data="data" />
          <ArticleReference v-if="flag"
                            :data="data" />
          <ArticleComent v-if="flag"
                         :data="data" />
        </div>
      </el-col>
      <el-col :xs="0"
              :sm="0"
              :md="6"
              :lg="6"
              :xl="6">
        <Nav />
      </el-col>
    </el-row>
  </div>
  <el-backtop target=".article"
              :bottom="20"><i class="el-icon-arrow-up"></i></el-backtop>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
import ArticleLabel from "@/components/article/ArticleLabel.vue";
import ArticleText from "@/components/article/ArticleText.vue";
import ArticleReference from "@/components/article/ArticleReference.vue";
import ArticleComent from "@/components/article/ArticleComment.vue";
import ArticlesService from "@/api/articles";
import Articles from "@/model/Articles";
import Nav from "@/components/Nav.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Article",
  components: {
    ArticleLabel,
    ArticleText,
    ArticleReference,
    ArticleComent,
    Nav,
  },
  setup() {
    let articledata = reactive({ data: {} as Articles });
    const flag = ref(false);
    const id = ref(localStorage.getItem("id"));
    const route = useRoute();
    if (route.name == "Article") {
      flag.value = false;
      ArticlesService.getArticle(route.params["id"][0]).then((res) => {
        // console.log(res.data);
        articledata.data = (res.data as any) as Articles;
        flag.value = true;
      });
    }
    watch(
      [() => route.params, () => route.name],
      ([toParams, toPath], [preParams, prePath]) => {
        if (toPath == "Article") {
          console.log(toParams, preParams);
          console.log(toPath, prePath);

          flag.value = false;
          ArticlesService.getArticle(route.params["id"][0]).then((res) => {
            articledata.data = (res.data as any) as Articles;
            flag.value = true;
          });
        }
      }
    );
    return {
      ...toRefs(articledata),
      flag,
      id,
    };
  },
});
</script>

<style lang="scss" scoped>
.article {
  // display: flex;
  overflow-y: scroll;
  height: 87vh;
  // width: 100%;
  padding: 0 2rem;
}
.article-main {
  text-align: center;
  // width: 75%;
}
.article-nav {
  border-left: 1px solid #ccc;
}
[v-cloak] {
  display: none;
}
</style>
