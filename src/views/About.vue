<template>
  <div class="tool">
    <div class="aboutPage">
      <div class="aboutPage-title">
        <div class="aboutPage-title-child">
          <el-avatar><img src="@/assets/imgs/头像.jpeg" /></el-avatar>
          <span>Icey--ff</span>
        </div>
      </div>
      <div class="aboutPage-blog">
        <el-divider content-position="left"><span class="text">博客技术简述</span></el-divider>
        <p>本博客使用的技术为vue3 + element-plus + nodejs</p>
      </div>
      <div class="aboutPage-about">
        <el-divider content-position="left"><span class="text">关于我</span></el-divider>
        <ul>
          <li>姓名：Icey--ff</li>
          <li>学历专业：本科软件工程</li>
          <li>邮箱：<i class="el-icon-message"></i><span class="mail">1939638013@qq.com</span></li>
          <li>坐标：珠海市</li>
          <li>其他博客地址：<a href="https://blog.csdn.net/weixin_43846755">csdn主页</a></li>
          <li>技能
            <ol>
              <li>
                <div class="li">
                  <div>具备Javascript基础，掌握es6+语法</div>
                  <el-rate v-model="first"
                           disabled>
                  </el-rate>
                </div>
              </li>
              <li>
                <div class="li">
                  <div>掌握 React 基本知识，掌握 Vue 框架及其用法。</div>
                  <el-rate v-model="second"
                           disabled>
                  </el-rate>
                </div>
              </li>
              <li>
                <div class="li">
                  <div>掌握使用 Webpack 打包工具，了解常用工程化和模块化方案。</div>
                  <el-rate v-model="third"
                           disabled>
                  </el-rate>
                </div>
              </li>
              <li>
                <div class="li">
                  <div>了解 Nodejs、Mysql，针对需求可以做到简单的数据库设计、接口的开发与设计！</div>
                  <el-rate v-model="first"
                           disabled>
                  </el-rate>
                </div>
              </li>

              <li>
                <div class="li">
                  <div>掌握 HTTP 协议，缓存、性能优化、安全等，了解浏览器原理。</div>
                  <el-rate v-model="third"
                           disabled>
                  </el-rate>
                </div>
              </li>
              <li>
                <div class="li">
                  <div>掌握常用的算法与数据结构。</div>
                  <el-rate v-model="first"
                           disabled>
                  </el-rate>
                </div>
              </li>
            </ol>
          </li>
          <li>其他
            <ol>
              <li>常用开发工具：vscode CodeRunner git</li>
              <li>掌握的UI框架：element-plus</li>
              <li>具备良好的编码风格和习惯，团队规范意识，乐于分享</li>
            </ol>
          </li>
          <li>个人
            <div>欢迎交流！</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";
export default defineComponent({
  name: "About",
  setup() {
    const rate = reactive({
      first: 3.5,
      second: 3,
      third: 2.7,
    });
    return {
      ...toRefs(rate),
    };
  },
});
</script>

<style lang="scss" scoped>
.tool {
  height: 87vh;
  width: 100%;

  overflow-y: scroll;
}
.aboutPage {
  margin-left: 3rem;
  margin-top: 2rem;
  color: #555;
}
.mail {
  color: pink;
  margin-left: 0.5rem;
}
ul {
  list-style: circle;
}

.li > div,
.el-rate {
  display: inline-block;
}
a {
  color: pink;
}
.text {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
}
.aboutPage-title-child span {
  margin-bottom: -10px;
  margin-left: 10px;
}
</style>