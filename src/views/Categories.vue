<template>
  <div class="categories">
    <h2>Categories</h2>
    <h4>{{badges1?.length}} categories in total</h4>
    <div class="categories-tags">
      <el-badge v-for="(badge,index) in badges1"
                :key="index"
                :value="badge.articleIds?.length"
                max="100">
        <el-button plain
                   :type="badge.type"
                   @click="onClick(badge.id)">{{badge.label}}</el-button>
      </el-badge>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "vue";
import CategoriesService from "@/api/category";
import router from "@/router";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const badges1 = ref();
    // 获取数据
    (async () =>
      CategoriesService.categories().then((res) => {
        badges1.value = res.data;
        console.log(badges1.value);
      }))();
    const badges = reactive([
      {
        value: "10",
        max: "99",
        text: "js学习",
        size: "small",
        btnType: "primary",
      },
      {
        value: "100",
        max: "99",
        text: "webpack学习",
        size: "large",
        btnType: "primary",
      },
      {
        value: "66",
        max: "99",
        text: "vue学习",
        size: "small",
        btnType: "primary",
      },
    ]);

    const onClick = (id) => {
      router.push({ path: `/categories/${id}` });
    };
    return {
      badges,
      badges1,
      onClick,
    };
  },
};
</script>
<style lang="scss" scoped>
.categories {
  text-align: center;
  width: 100%;
}
.el-badge {
  margin: 0 1.5rem;
}
</style>
