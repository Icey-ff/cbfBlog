<template>
  <div id="header">
    <el-row>
      <el-col :xs="5"
              :sm="4"
              :md="4"
              :lg="4"
              :xl="4">

        <div id="left">
          <i class="el-icon-s-promotion"></i>
          <span id="name">&nbsp;Icey--ff</span>
          <div id="hidden-menu">
            <el-dropdown trigger="click"
                         :hide-on-click="false"
                         id="popper">
              <span class="el-dropdown-link"><i class="el-icon-menu menu"></i></span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-for="(item,index) in newMenu"
                                    :key="index">
                    <MenuItem :menuItem="item" />
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <Search />
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-col>

      <el-col :xs="0"
              :sm="0"
              :md="6"
              :lg="6"
              :xl="6"
              class="hidden-sm-and-down">
        <Search />
      </el-col>
      <el-col :xs="0"
              :sm="0"
              :md="0"
              :lg="3"
              :xl="3">
      </el-col>
      <el-col :xs="14"
              :sm="15"
              :md="10"
              :lg="8"
              :xl="8">
        <ul class="nav">
          <li v-for="(item,index) in newMenu"
              :key="index">
            <MenuItem :menuItem="item" />
          </li>
        </ul>
      </el-col>
      <el-col :xs="5"
              :sm="5"
              :md="4"
              :lg="3"
              :xl="3">
        <div>
          <div v-show="!isLogin"
               class="btn">
            <el-button size="mini"
                       type="primary"
                       plain
                       @click="showLogdialog()">登录</el-button>
            <el-button size="mini"
                       type="danger"
                       plain
                       @click="showRegdialog()">注册</el-button>
          </div>

          <div v-show="isLogin"
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
          </div>
        </div>
      </el-col>

    </el-row>
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
import { menu } from "@/model/Menu";
import MenuItem from "@/components/header/MenuItem.vue";

export default defineComponent({
  name: "HeaderTest",
  components: {
    Login,
    Register,
    Search,
    MenuItem,
  },
  setup() {
    const newMenu = ref(menu);
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
    //控制菜单是否收起
    // function changeVisibleState() {
    //   console.log("1111");
    //   document.getElementsByClassName("is-pure")[0].display = "none";
    //   // this.$refs.popper.style.display = "none";
    //   // node.style;
    // }
    return {
      newMenu,
      logvisible,
      regvisible,
      showLogdialog,
      closedia,
      showRegdialog,
      clossregister,
      isLogin,
      changeHeader,
      username,
      // changeVisibleState,
    };
  },
});
</script>
<style lang='scss' scoped>
#header {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 4rem;
  position: relative;
  .el-row {
    padding: 0.5rem 0;
    .el-col {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

#left {
  font-size: 22px;
  color: #555;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  span {
    font-size: 25px;
  }
  .el-icon-s-promotion {
    color: pink;
    font-weight: 500;
  }
}
#hidden-menu {
  display: none;
  position: absolute;
  right: 2rem;
  .menu {
    font-size: 25px;
    color: #ccc;
    font-weight: bold;
    &:hover,
    &:focus {
      color: pink;
    }
  }
}

.nav {
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    margin: 0 1.5rem;
    display: inline-block;
  }
  a {
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
    font-size: 14px;
    &:hover,
    &:focus {
      color: #1890ff;
    }
  }
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
.div {
  display: inline-block;
}
.hidden-sm-and-down {
  text-align: start;
}
@media only screen and (max-width: 663px) {
  .nav,
  .btn {
    display: none;
  }
  .el-col-xs-5 {
    max-width: 100%;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
  }
  #hidden-menu {
    display: inline-block;
  }
}
</style>
