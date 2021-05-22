<template>
  <div id='leftAside'>
    <el-avatar size=100>
      <img src="@/assets/imgs/头像.jpeg" />
    </el-avatar>
    <h2 class="name">Icey--ff</h2>
    <h5 class="saying">学习学习！努力努力！</h5>
    <PersonalWebsite />
    <HotAticles />
    <Tag />
  </div>
</template>
<script>
import { Options, Vue } from 'vue-class-component'
import PersonalWebsite from '@/components/leftAside/PersonalWebsite'
import HotAticles from '@/components/leftAside/HotAticles'
import Tag from '@/components/leftAside/Tag'
@Options({
  components: {
    PersonalWebsite,
    HotAticles,
    Tag
  },
})
export default class LeftAside extends Vue { }

</script>
<style lang="scss" scoped>
#leftAside {
  text-align: center;
  border-right: 1px solid #ebedf0;
  height: 87vh;
  overflow-y: scroll;
}
.el-avatar {
  width: 6.5rem;
  height: 6.5rem;
}
</style>
