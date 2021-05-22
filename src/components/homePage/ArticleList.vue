<template>
  <div id="home-articles-div">
    <el-card v-for="item in articleList"
             :key="item.id"
             shadow="hover">
      <el-divider content-position="left"
                  class="home-articles-div-title">
        <router-link :to="'/article/'+item.id">
          <span class="title"
                @click="goto(item.id)">{{item.title}}</span>
        </router-link>
        <span class="time">{{item.date}}</span>
      </el-divider>
      <div class="home-articles-div-main">
        <p v-html="item.text"></p>
      </div>
      <div class="home-articles-div-labels"></div>
      <span class="label">
        <i class="el-icon-chat-square"></i>
        {{item.comments.num}}
      </span>
      <span class="label">
        <i class="el-icon-view"></i>
        {{item.watchedNum}}
      </span>
    </el-card>
    <!-- <el-pagination background
                   layout="prev, pager, next"
                   :total="1000">
    </el-pagination> -->
  </div>
</template>
<script lang="ts">
import { watch } from "vue";

import { reactive, toRefs } from "@vue/reactivity";
import Articles from "@/model/Articles";
export default {
  props: {
    articleList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    let articleList: Array<Articles> = reactive(
      props.articleList as Articles[]
    );
    // let articleList = ref(props.articleList as Articles[]);
    watch(
      () => props.articleList,
      (newval, oldval) => {
        console.log("newval:" + newval + "oldval" + oldval);
      }
    );
    function goto(id: string): void {
      localStorage.setItem("id", id);
    }
    return {
      ...toRefs(articleList),
      goto,
    };
  },
};
</script>
<style lang="scss" scoped>
#home-articles-div {
  overflow-y: scroll;
  height: 75%;
  position: relative;
  top: 0;
  // padding-top: 3%;
}
.el-card {
  margin: 0.5rem 0;
  cursor: pointer;
}
.el-card:hover {
  background: #effbff;
  // background: rgba(100, 178, 249, 0.5);
}
.label {
  margin: 0.8rem;
  color: rgba(0, 0, 0, 0.45);
}
.title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #394d69;
  margin-right: 0.6rem;
}
.title:hover {
  color: pink;
}

// 设置能显示多少行
.home-articles-div-main > p {
  color: #555;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  // line-height: 1.5;
  max-height: 9rem; //解决不兼容的问题
}
.time {
  font-size: 0.9rem;
  color: #ccc;
  font-weight: bold;
}
</style>