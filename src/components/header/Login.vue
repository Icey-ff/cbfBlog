<template>
  <div>
    <!-- bug:注意设置close回调函数，不然通过点击弹窗以外区域或者点击关闭按钮后，下次打不开：因为我们用来控制打开和关闭的变量没有改变 -->
    <el-dialog title="登录"
               :model-value="dialogflag"
               :destroy-on-close="true"
               @close="logdialogclose()">
      <el-form :model="form">
        <el-form-item label="用户名"
                      prop="username">
          <el-input v-model="form.username"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input v-model="form.password"
                    placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="logdialogclose()">取消</el-button>
          <el-button type="primary"
                     @click="handleLogin()">提交</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";
import LoginParams from "@/model/LoginParams";
import UserService from "@/api/login";
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Login",
  props: {
    dialogflag: Boolean, //接收父组件传来的参数
  },
  emits: ["closedi", "changeHeader"], //定义要发送给父组件的对应的事件的名称
  setup(props, ctx) {
    const form1 = reactive({
      form: {
        username: "111",
        password: "dfff",
      },
    });
    function logdialogclose() {
      ctx.emit("closedi"); //依据规定好的事件名称，发送对应的事件给父组件
      return true;
    }
    // 处理登录事件
    const handleLogin = async () => {
      ctx.emit("closedi");
      const loginParams = {
        username: form1.form.username,
        password: form1.form.password,
      } as LoginParams;
      const res = await UserService.login(loginParams);
      console.log(res);
      if (res.data.toString() == "登录成功!") {
        ElMessage.success("登录成功！");
        //登录成功---存储登录成功的标志，以及用户名
        localStorage.setItem("login", "true");
        localStorage.setItem("username", loginParams.username);
        //通知父组件
        ctx.emit("changeHeader");
      } else {
        ElMessage.error(res.data.toString());
      }
    };
    return {
      logdialogclose,
      handleLogin,
      ...toRefs(form1),
    };
  },
});
</script>
