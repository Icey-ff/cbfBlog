<template>
  <div id="nav">
    <el-header>
      <!-- <Header /> -->
      <HeaderTest />
    </el-header>
    <el-row>
      <el-container style="margin-top:2rem;">
        <el-col :xs="0"
                :sm="0"
                :md="5"
                :lg="5"
                :xl="5">
          <!-- <el-aside width="325px"> -->
          <LeftAside />
          <!-- </el-aside> -->
        </el-col>
        <el-col :xs="24"
                :sm="24"
                :md="19"
                :lg="19"
                :xl="19">
          <transition name="fade-transform"
                      mode="out-in">
            <router-view />
          </transition>
        </el-col>
      </el-container>
    </el-row>
  </div>
</template>
<script>
import { Options, Vue } from 'vue-class-component';
import Header from '@/views/Header';
import HeaderTest from '@/views/HeaderTest'
import LeftAside from '@/views/LeftAside';
import HomePage from '@/views/HomePage';
import Pigeonhole from '@/views/Pigeonhole'
import Categories from '@/views/Categories.vue';
import About from '@/views/About.vue';
@Options({
  components: {
    Header,
    LeftAside,
    HomePage,
    Pigeonhole,
    Categories,
    About,
    HeaderTest
  },
})

export default class Index extends Vue {
}
</script>

<style lang='less' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.nav {
  width: 100%;
}
.el-header {
  padding: 0;
}

/* 
enter-active 定义进入过渡的结束状态
leave-active 定义离开过渡的结束状态
 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

/* 
enter定义进入过渡的开始状态
 */
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
/* 
leave-to离场动画结束后的状态
 */
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
