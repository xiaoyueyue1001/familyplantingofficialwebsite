<template>
  <div id="login">
    <div class="login-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号:">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import md5 from "MD5";
import storage from "@/utils/storage";
import { Message } from "element-ui";
import { Secret_Key } from "@/utils/encryption";
export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  created() {
    let pwd = Secret_Key("123456", "asd", "E");
    console.log(pwd);
    let str = Secret_Key(
      "dd32c3bc5ff704a122c96630bbaee4247cdf72c002129a05",
      "zcmorefun",
      "D"
    );
    console.log(str);
  },
  methods: {
    onSubmit() {
      if (
        this.form.account === "admin" &&
        md5(this.form.password) === "0192023a7bbd73250516f069df18b500"
      ) {
        let data = {
          account: this.form.account
        };
        data = Secret_Key(JSON.stringify(data), "zcmorefun", "E");
        storage.setItem("SmartPlanting", data, 1);
        this.$router.push({
          name: "cms"
        });
      } else {
        Message.error({
          message: "账号或密码错误！",
          duration: 3000
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  > .login-box {
    width: 5rem;
    height: 4rem;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>