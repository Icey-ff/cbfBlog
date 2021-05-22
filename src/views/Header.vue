<template>
  <div id="header">
    <div id="left">
      <i class="el-icon-lollipop"></i>
      <span id="name">Icey--ff</span>
    </div>
    <!-- </el-col> -->

    <div id="right">
      <!-- <el-col :xs="6"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"> -->

      <Search />
      <!-- </el-col> -->

      <ul class="nav">
        <!-- <el-col :xs="6"
                  :sm="6"
                  :md="6"
                  :lg="6"
                  :xl="6"> -->

        <li>
          <router-link to="/home"
                       replace><i class="el-icon-house"></i>
            首页</router-link>
        </li>
        <li>
          <router-link to="/pigeonhole"><i class="el-icon-edit"></i>
            归档</router-link>
        </li>
        <li>
          <router-link to="/category"><i class="el-icon-folder"></i>
            分类</router-link>
        </li>
        <li>
          <router-link to="/about"><i class="el-icon-user"></i>
            关于</router-link>
        </li>
        <!-- </el-col> -->
        <!-- <el-col :xs="6"
                  :sm="6"
                  :md="6"
                  :lg="6"
                  :xl="6"> -->

        <li v-show="!isLogin">
          <el-button size="mini"
                     type="primary"
                     plain
                     @click="showLogdialog()">登录</el-button>
          <el-button size="mini"
                     type="danger"
                     plain
                     @click="showRegdialog()">注册</el-button>
        </li>
        <li v-show="isLogin"
            class="login">
          <el-popover placement="bottom"
                      trigger="hover">
            <template #reference>
              <el-avatar size="medium"
                         style="font-size:.5rem">{{username}}</el-avatar>
            </template>
            <div @click="isLogin=false"
                 class="control-login">
              退出登录
            </div>
          </el-popover>
        </li>
        <!-- </el-col> -->
      </ul>
    </div>
    <!-- </el-row> -->
  </div>
  <!-- 2.将对应的变量传给子组件 -->
  <!-- 3.定义接收子组件用emit传过来的方法，在其中做相应的操作 -->
  <Login :dialogflag="logvisible"
         @closedi="closedia"
         @changeHeader="changeHeader" />
  <Register :dialogflag="regvisible"
            @clossreg="clossregister" />
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from "@vue/runtime-core";
import Login from "@/components/header/Login.vue";
import Register from "@/components/header/Register.vue";
import Search from "@/components/header/Search.vue";

export default defineComponent({
  name: "Header",
  components: {
    Login,
    Register,
    Search,
  },
  setup() {
    const logvisible: Ref<boolean> = ref(false); //1.父组件：声明一个变量，并且用ref封装起来
    const regvisible: Ref<boolean> = ref(false);
    const isLogin: Ref<boolean> = ref(Boolean(localStorage.getItem("login"))); //判断是否登录
    const username: Ref<string> | Ref<undefined> = ref(
      localStorage.getItem("username")?.toString()
    );

    // 处理登录窗口
    function showLogdialog(): void {
      logvisible.value = true;
    }
    function closedia(): void {
      //4.子组件传来的方法
      logvisible.value = false;
    }
    // 如果登录成功：隐藏登录和注册按钮
    function changeHeader(): void {
      username.value = localStorage.getItem("username")?.toString();
      console.log(localStorage.getItem("username"));
      isLogin.value = Boolean(localStorage.getItem("login"));
    }

    //如果退出登录--销毁localStorage中的有关登录的字段
    watch(isLogin, (newvalue) => {
      if (newvalue == false) {
        localStorage.removeItem("login");
        localStorage.removeItem("username");
      }
    });

    // 处理注册窗口
    function showRegdialog(): void {
      regvisible.value = true;
    }
    function clossregister(): void {
      regvisible.value = false;
    }

    return {
      logvisible,
      regvisible,
      showLogdialog,
      closedia,
      showRegdialog,
      clossregister,
      isLogin,
      changeHeader,
      username,
    };
  },
});
</script>
<style lang='scss' scoped>
#header {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
}
#left {
  width: 20%;
  font-size: 1.5rem;
  color: #555;
  text-align: center;
  display: inline-block;
}
#right {
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.8rem;
  width: 80%;
}
// .el-input--prefix {
//   width: auto;
// }
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  // display: inline-block;
  margin: 0 1.5rem;
}
a {
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;
}
.el-icon-lollipop {
  color: rgb(5, 87, 150);
}
a:hover {
  color: #1890ff;
}
.el-button {
  margin-right: 0.5rem;
}
// 链接激活时用的用户名
.router-link-active {
  color: #1890ff;
}
.control-login {
  text-align: center;
  cursor: pointer;
}
</style>
