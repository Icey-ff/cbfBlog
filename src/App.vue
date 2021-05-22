<template>
  <transition name="fade-transform"
              mode="out-in">
    <router-view></router-view>
  </transition>

</template>
<script>
import { Vue } from 'vue-class-component';
// import Index from '@/views/Index'
// @Options({
//   components: {
//     Index,
//   },
// })
export default class App extends Vue { }
</script>
<style lang="scss" scoped>
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