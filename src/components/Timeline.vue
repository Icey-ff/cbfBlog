<template>
  <div class="timeline">
    <div class="timeline-main">
      <el-timeline v-if="flag=='Pigeonhole'">
        <el-timeline-item color="lightblue">
          <span class="total">一共有{{pigeonhole.total}}篇blog!</span>
        </el-timeline-item>
        <template v-for="(item,index) in pigeonhole.list"
                  :key="index">
          <el-timeline-item icon="el-icon-lollipop"
                            color="pink"
                            size="large"
                            class="first-node">{{item.year}}</el-timeline-item>
          <el-timeline-item v-for="(i,index) in item.list"
                            :key="index"
                            color="lightblue"
                            :timestamp="i.date"
                            placement="top">
            <router-link :to="'/article/'+i.id">{{i.title}}</router-link>
          </el-timeline-item>
        </template>

      </el-timeline>

      <el-timeline v-else>
        <el-timeline-item icon="el-icon-lollipop"
                          color="pink"
                          size="large"
                          class="first-node">
          {{tag.label}}
          <span class="flag">{{flag=="Tags"?'Tag':'Category'}}</span>
        </el-timeline-item>
        <el-timeline-item v-for="(item,index) in tag.articles"
                          :key="index"
                          color="lightblue"
                          :timestamp="item.date">
          <router-link :to="'/article/'+item.id">{{item.title}}</router-link>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import TagsService from "@/api/tags";
import PigeonholeService from "@/api/pigeonhole";
import CategoriesService from "@/api/category";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  props: {
    tag: Object,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const tag = ref({});
    const route = useRoute();
    const flag = ref("");
    const pigeonhole = ref({});
    // console.log(route.params["id"]);
    //1.归档页面
    if (route.name == "Pigeonhole") {
      flag.value = "Pigeonhole";
      console.log("这里是归档区");
      PigeonholeService.pigeonhole().then((res) => {
        pigeonhole.value = res.data;
        console.log(pigeonhole.value);
      });
    }

    //2.标签页面
    if (route.name == "Tags") {
      flag.value = "Tags";
      TagsService.getTagPage(route.params["id"] as string).then((res) => {
        tag.value = res.data;
      });
    }

    //2.分类页面
    if (route.name == "Categories") {
      flag.value = "Categories";
      CategoriesService.getCategoriesPage(route.params["id"] as string).then(
        (res) => {
          tag.value = res.data;
        }
      );
    }

    watch([() => route.params, () => route.name], ([toParams, toPath]) => {
      if (toPath == "Tags") {
        flag.value = "Tags";
        TagsService.getTagPage(toParams["id"] as string).then((res) => {
          tag.value = res.data;
        });
      }
      if (toPath == "Categories") {
        flag.value = "Categories";
        CategoriesService.getCategoriesPage(route.params["id"] as string).then(
          (res) => {
            tag.value = res.data;
          }
        );
      }
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      tag,
      flag,
      pigeonhole,
    };
  },
};
</script>
<style lang="scss" scoped>
.flag {
  margin-left: 1rem;
  color: #ccc;
}
.first-node {
  font-size: 1.5rem;
  font-weight: bold;
}
.total {
  font-weight: 600;
  color: #000;
}
.el-timeline-item__timestamp.is-bottom {
  color: #000;
}
.timeline {
  height: 87vh;
  overflow-y: scroll;
  width: 100%;
}
.timeline-main {
  margin-left: 2rem;
}
</style>
