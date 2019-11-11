<template>
  <div class="components-container board">
    <el-button class="addBtn" type="primary" @click="addNewList">Add</el-button>
    <Kanban :key="1" :list="list1" :group="group" class="kanban todo" header-text="Todo" />
    <Kanban :key="2" :list="list2" :group="group" class="kanban working" header-text="Working" />
    <Kanban :key="3" :list="list3" :group="group" class="kanban done" header-text="Done" />
    <el-dialog title="Add" :visible.sync="addShow" width="30%">
      <el-form :model="createInfo" label-width="100px">
        <el-form-item label="要做的事情">
          <el-input v-model="createInfo.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="唯一标识">
          <el-input v-model="createInfo.id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addShow = false">取 消</el-button>
        <el-button type="primary" @click="createSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import Kanban from "./Kanban";

export default {
  name: "DragKanbanDemo",
  components: {
    Kanban
  },
  data() {
    return {
      group: "mission",
      list1: [],
      list2: [],
      list3: [],
      addShow: false,
      createInfo: {
        name: "",
        id: ""
      }
    };
  },
  methods: {
    addNewList() {
      this.createInfo = {
        name: "",
        id: ""
      };
      this.addShow = true;
    },
    createSure() {
      this.list1.push(this.createInfo);
      this.addShow = false;
    }
  }
};
</script>
<style lang="scss">
.board {
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
  .addBtn {
    position: absolute;
    top: 10px;
    left: 10px;
  }
}
.todo {
  .board-column-header {
    background: #4a9ff9;
  }
}
.working {
  .board-column-header {
    background: #f9944a;
  }
}
.done {
  .board-column-header {
    background: #2ac06d;
  }
}
</style>

