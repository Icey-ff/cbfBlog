  <template>
  <el-dialog title="注册"
             :model-value="dialogflag"
             :destroy-on-close="true"
             @close="registerclose()">
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
      <el-form-item label="确认密码"
                    prop="password1">
        <el-input v-model="form.password1"
                  placeholder="再次输入密码"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="registerclose()">取消</el-button>
        <el-button type="primary"
                   @click="handleRegister()">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>
  <script lang="ts">
import UserService from "@/api/login";
import LoginParams from "@/model/LoginParams";
import { ElMessage } from "element-plus";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "Register",
  props: {
    dialogflag: Boolean,
  },
  emits: ["clossreg"],
  setup(props, ctx) {
    // 数据
    const form1 = reactive({
      form: {
        username: "",
        password: "",
        password1: "",
      },
    });
    // 方法
    function registerclose() {
      ctx.emit("clossreg");
      return true;
    }
    const handleRegister = async () => {
      if (
        !form1.form.password ||
        !form1.form.password1 ||
        !form1.form.username
      ) {
        ElMessage.error("填写不完整！");
      } else if (form1.form.password != form1.form.password1) {
        ElMessage.error("两次密码输入不一致");
      } else {
        ctx.emit("clossreg");
        const loginParams = {
          username: form1.form.username,
          password: form1.form.password,
        } as LoginParams;
        const res = await UserService.resgister(loginParams);
        if (res.data.toString() == "注册成功") {
          ElMessage.success("注册成功！");
        } else {
          ElMessage.error(JSON.stringify(res.data));
        }
      }
    };
    return {
      registerclose,
      handleRegister,
      ...toRefs(form1),
    };
  },
});
</script>
  