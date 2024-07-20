<template>
  <div class="pages">
    <div class="top">
      <div class="item">
        <span>标题：</span>
        <el-input
          v-model="searchData.title"
          style="width: 200px"
          placeholder="请输入标题"
        />
      </div>
      <div class="item">
        <span>作者：</span>
        <el-input
          v-model="searchData.author"
          style="width: 200px"
          placeholder="请输入作者"
        />
      </div>
      <div class="item">
        <span>单位：</span>
        <el-input
          v-model="searchData.unit"
          style="width: 200px"
          placeholder="请输入单位"
        />
      </div>
      <div class="item">
        <span>类型：</span>
        <el-select
          v-model="searchData.type"
          style="width: 200px"
          placeholder="请选择类型"
        >
          <el-option label="全部" value=""></el-option>
          <el-option
            v-for="item in typeList"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </div>
      <el-button type="primary" @click="submitForm">搜索</el-button>
      <el-button type="primary" @click="toAdd">新增</el-button>
    </div>
    <div class="main">
      <el-table class="table" border :data="tableData">
        <el-table-column
          prop="title"
          label="标题"
          width="200"
          show-overflow-tooltip
        />
        <el-table-column prop="type" label="类型" width="120" />
        <el-table-column
          prop="author"
          label="作者"
          width="120"
          show-overflow-tooltip
        />
        <el-table-column
          prop="unit"
          label="单位"
          width="150"
          show-overflow-tooltip
        />
        <el-table-column prop="text" label="简介" show-overflow-tooltip />
        <el-table-column fixed="right" label="操作" width="140">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="toDetail(scope.row, 1)"
              >查看</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="toDetail(scope.row, 2)"
              >编辑</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="toDetail(scope.row, 3)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="bottom">
      <el-pagination
        background
        v-model:current-page="searchData._page"
        :page-size="searchData._per_page"
        layout="prev, pager, next"
        :total="total"
        @change="changeTable"
      />
    </div>
    <el-dialog
      v-model="dialogVisible"
      :title="dialog == 1 ? '查看' : dialog == 2 ? '编辑' : '新增'"
      width="500"
    >
      <el-form :model="formData" label-width="40px" :disabled="dialog == 1">
        <el-form-item label="标题" prop="title">
          <el-input v-model="formData.title" placeholder="请输入标题" />
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="formData.type" placeholder="请选择类型">
            <el-option
              v-for="item in typeList"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作者" prop="author">
          <el-input v-model="formData.author" placeholder="请输入作者" />
        </el-form-item>
        <el-form-item label="单位" prop="unit">
          <el-input v-model="formData.unit" placeholder="请输入单位" />
        </el-form-item>
        <el-form-item label="简介" prop="text">
          <el-input
            v-model="formData.text"
            type="textarea"
            rows="3"
            placeholder="请输入简介"
          />
        </el-form-item>
      </el-form>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button
            v-show="dialog == 2 || dialog == 4"
            type="primary"
            @click="toEdit()"
          >
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useBookStore } from "@/stores/book";
import { getList } from "@/api/module/book";
import http from "@/api/http";
const userBook = useBookStore();
const searchData = ref({
  title: "",
  type: "",
  author: "",
  unit: "",
  text: "",
  _page: 1,
  _per_page: 10,
});
const total = ref(0);

const typeList = ref([]);
const tableData = ref([]);

const dialog = ref(1);
const dialogVisible = ref(false);

const formData = ref({
  title: "",
  type: "",
  author: "",
  unit: "",
  text: "",
});

onMounted(() => {
  typeList.value = userBook.types;
  getTableData();
});
const submitForm = () => {
  searchData.value._page = 1;
  getTableData();
};
const getTableData = () => {
  getList({
    ...searchData.value,
    ...{
      _sort: "id",
      _order: "desc",
    },
  }).then((res) => {
    tableData.value = res.data;
    total.value = res.items;
  });
};
const changeTable = (page) => {
  console.log(page);
  searchData.value._page = page;
  getTableData();
};
const toDetail = (row, type) => {
  dialog.value = type;
  if (type == 3) {
    ElMessageBox.confirm("确认删除吗？", "警告", {
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        http.del(`/list/${row.id}`).then(() => {
          ElMessage({
            type: "success",
            message: "删除成功",
          });
          getTableData();
        });
      })
      .catch(() => {});
  } else {
    formData.value = { ...row };
    dialogVisible.value = true;
  }
};
const toEdit = () => {
  if (dialog.value == 2) {
    http.put(`/list/${formData.value.id}`, formData.value).then(() => {
      ElMessage({
        type: "success",
        message: "编辑成功",
      });
      dialogVisible.value = false;
      getTableData();
    });
  } else {
    http.post(`/list`, formData.value).then(() => {
      ElMessage({
        type: "success",
        message: "新增成功",
      });
      searchData.value._page = 1;
      dialogVisible.value = false;
      getTableData();
    });
  }
};
const toAdd = () => {
  dialog.value = 4;
  formData.value = {
    id: new Date().getTime(),
    title: "",
    type: "",
    author: "",
    unit: "",
    text: "",
    title: "",
    type: "",
    author: "",
    unit: "",
    text: "",
  };
  dialogVisible.value = true;
};
</script>
<style scoped lang="scss">
.pages {
  width: 100%;
  .top {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-bottom: 0;
    .item {
      margin-right: 30px;
      margin-bottom: 10px;
      span {
        font-size: 14px;
      }
    }
  }
  .top .item:nth-child(4) {
    margin-right: 10px;
  }
  .main {
    padding: 10px;
    padding-top: 0;
    width: 100%;
    .table {
      width: 100%;
    }
  }
  .bottom {
    padding: 10px;
    padding-top: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
