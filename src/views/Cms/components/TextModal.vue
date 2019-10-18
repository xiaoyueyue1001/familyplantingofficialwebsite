<template>
  <el-dialog
    title="提示"
    :visible.sync="show"
    width="5rem"
    custom-class="text-modal"
    @opened="opened"
  >
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题:">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题:">
          <div id="content-wrap" ref="contentWrap"></div>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      show: false,
      type: 0, //0新建  1修改
      editor: null,
      form: {
        title: "",
        html: ""
      }
    };
  },
  methods: {
    cancel(done) {
      this.form.html = "";
      this.show = false;
    },
    confirm() {
      console.log(this.form.html);
      // this.cancel();
    },
    opened() {
      if (this.editor) {
        if (this.type) {
          //修改
          this.editor.txt.html("<p>111111111111111</p>");
        } else {
          this.editor.txt.html("");
        }
      } else {
        this.editor = new E("#content-wrap");
        this.editor.customConfig.uploadImgShowBase64 = true; //开启本地图片上传
        this.editor.customConfig.onchange = html => {
          this.form.html = html;
        };
        this.editor.create();
      }
    }
  }
};
</script>

<style lang="less">
.text-modal {
  width: 15rem !important;
  height: 8rem;
  > .el-dialog__header {
    height: 1rem;
    padding: 0;
    display: none;
  }
  > .el-dialog__body {
    padding: 1rem 0.7rem 0 0.5rem;
    height: 6rem;
    #content-wrap {
      height: 5rem;
    }
  }
  > .el-dialog__footer {
    height: 1rem;
    padding: 0;
    padding-right: 0.5rem;
  }
}
</style>