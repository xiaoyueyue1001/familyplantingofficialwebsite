<template>
  <div id="cms">
    <div class="cms-box">
      <div class="header">新闻编辑</div>
      <div class="tools">
        <el-button size="mini" type="primary" @click="addNews">新增</el-button>
      </div>
      <div class="table-wrap">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="序号" width="100">
            <template slot-scope="scope">
              <span>{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="类型" width="100">
            <template slot-scope="scope">
              <span>{{scope.row.type?"种植教程":"趣味种植"}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="创建时间" width="100"></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <TextModal ref="textModal"></TextModal>
  </div>
</template>

<script>
import storage from "@/utils/storage";
import TextModal from "./components/TextModal";
export default {
  components: { TextModal },
  data() {
    return {
      keywords: "",
      tableData: [
        {
          id: "001",
          title: "新闻标题1",
          type: 0,
          time: "2019-10-16"
        },
        {
          id: "002",
          title: "新闻标题2",
          type: 0,
          time: "2019-10-16"
        },
        {
          id: "003",
          title: "新闻标题3",
          type: 1,
          time: "2019-10-16"
        },
        {
          id: "004",
          title: "新闻标题4",
          type: 1,
          time: "2019-10-16"
        }
      ]
    };
  },
  created() {
    let userInfo = storage.getItem("SmartPlanting");
    if (!(userInfo && userInfo.account)) {
      this.$router.push({ name: "login" });
    }
  },
  methods: {
    addNews() {
      this.$refs.textModal.show = true;
      this.$refs.textModal.type = 0;
    },
    handleEdit(item) {
      this.$refs.textModal.show = true;
      this.$refs.textModal.type = 1;
    },
    handleDelete() {}
  }
};
</script>

<style lang="less" scoped>
#cms {
  height: 100%;
  background-color: #ccc;
  > .cms-box {
    margin: 0 auto;
    width: 12rem;
    background-color: #eee;
    padding: 0.2rem;
    > .header {
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      text-align: center;
    }
    > .tools {
      height: 1rem;
      display: flex;
      align-items: center;
    }
    > .table-wrap {
    }
  }
}
</style>