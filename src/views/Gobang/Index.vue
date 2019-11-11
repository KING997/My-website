<template>
  <div id="Gobang">
    <el-button @click="resetGobang">再来一局</el-button>
    <div class="mian">
      <div v-for="i in 15" :key="'_i'+i">
        <div @click="drawPiece(i,j,$event)" :class="classObject(i,j)" v-for="j in 15" :key="'_j'+j"></div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="show" width="30%" :close-on-click-modal="false">
      <span>{{msg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetGobang">取 消</el-button>
        <el-button type="primary" @click="resetGobang">再来一局</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "black",
      gobangArr: [],
      win: false,
      show: false,
      msg: ""
    };
  },
  created() {
    this.resetGobang();
  },
  methods: {
    //重来一局
    resetGobang() {
      this.show = false;
      var i, j;
      // 清除数组数据
      for (i = 0; i < 15; i++) {
        var tempData = [];
        for (j = 0; j < 15; j++) {
          tempData.push("");
        }
        this.gobangArr[i] = tempData;
      }
      // 设置默认数据
      this.color = "black";
      this.win = false;
      this.clearGobang();
    },
    //消除棋子
    clearGobang() {
      let blockList = document.getElementsByClassName("block");
      for (let i = 0; i < blockList.length; i++) {
        if (String(blockList.item(i).classList).indexOf("active") !== -1) {
          blockList.item(i).classList.remove("active");
        }
        if (String(blockList.item(i).classList).indexOf("black") !== -1) {
          blockList.item(i).classList.remove("black");
        }
        if (String(blockList.item(i).classList).indexOf("white") !== -1) {
          blockList.item(i).classList.remove("white");
        }
      }
    },
    //棋盘的class
    classObject(i, j) {
      let className = "block";
      if (i == 1) {
        className += " top";
      }
      if (i == 15) {
        className += " bottom";
      }
      if (j == 1) {
        className += " left";
      }
      if (j == 15) {
        className += " right";
      }
      return className;
    },
    //画棋子
    drawPiece(i, j, e) {
      if (String(e.target.classList).indexOf("active") !== -1) {
        this.$message.error("尼康康尼往哪下呢？");
        return;
      }
      e.target.classList.add("active");
      e.target.classList.add(this.color);
      this.gobangArr[i - 1][j - 1] = this.color;
      this.chessWin(i - 1, j - 1, this.color);
      this.color = this.color === "black" ? "white" : "black";
    },
    // 判断输赢
    chessWin(i, j, color) {
      var row,
        col,
        count = 1; // 连续同一个颜色棋子的个数

      // 垂直方向
      for (row = i - 1; row >= 0 && row > i - 5; row--) {
        if (this.gobangArr[row] && this.gobangArr[row][j] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      for (row = i + 1; row < 15 && row < i + 5; row++) {
        if (this.gobangArr[row] && this.gobangArr[row][j] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      count = 1;

      // 水平方向
      for (col = j - 1; col >= 0 && col > j - 5; col--) {
        if (this.gobangArr[i] && this.gobangArr[i][col] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      for (col = j + 1; col < 15 && col < j + 5; col++) {
        if (this.gobangArr[i] && this.gobangArr[i][col] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      count = 1;

      // 45°方向
      for (
        row = i - 1, col = j - 1;
        row >= 0 && col >= 0 && row > i - 5 && col > j - 5;
        row--, col--
      ) {
        if (this.gobangArr[row] && this.gobangArr[row][col] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      for (
        row = i + 1, col = j + 1;
        row < 15 && col < 15 && row < i + 5 && col < j + 5;
        row++, col++
      ) {
        if (this.gobangArr[row] && this.gobangArr[row][col] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      count = 1;

      // 135°方向
      for (
        row = i - 1, col = j + 1;
        row >= 0 && col < 15 && row > i - 5 && col < j + 5;
        row--, col++
      ) {
        if (this.gobangArr[row] && this.gobangArr[row][col] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      for (
        row = i + 1, col = j - 1;
        row < 15 && col >= 0 && row < i + 5 && col > j - 5;
        row++, col--
      ) {
        if (this.gobangArr[row] && this.gobangArr[row][col] == color) {
          count++;
          this.ifWin(count, color);
        } else {
          break;
        }
      }
      count = 1;
    },
    ifWin(count, color) {
      if (count == 5) {
        if (color == "black") {
          this.msg = "黑棋赢了！";
          this.show = true;
          this.playAudio();
        } else {
          this.msg = "白棋赢了";
          this.show = true;
          this.playAudio();
        }
        this.win = true;
      } else {
        this.win = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#Gobang {
  background-color: #fff;
  padding: 20px;
  .mian {
    width: 525px;
    height: 525px;
    background-color: #f9cc9d;
    margin: auto;
    .block {
      position: relative;
      z-index: 2;
      float: left;
      width: 35px;
      height: 35px;
    }
    .block:before {
      content: "";
      position: absolute;
      z-index: 2;
      left: 0;
      right: 0;
      top: 17.5px;
      height: 1px;
      background: #000;
    }
    .block:after {
      content: "";
      position: absolute;
      z-index: 2;
      left: 17.5px;
      top: 0;
      bottom: 0;
      width: 1px;
      background: #000;
    }
    .block.left:before {
      left: 17.5px;
      top: 17.5px;
      width: 17.5px;
      height: 1px;
    }
    .block.right:before {
      left: 0;
      top: 17.5px;
      width: 17.5px;
      height: 1px;
    }
    .block.left:after,
    .block.right:after {
      left: 17.5px;
    }
    .block.top:before,
    .block.bottom:before {
      left: 0;
      right: 0;
      top: 17.5px;
      height: 1px;
    }
    .block.top:after {
      left: 17.5px;
      top: 17.5px;
      height: 17.5px;
    }
    .block.bottom:after {
      left: 17.5px;
      top: 0;
      height: 17.5px;
    }
    .block.top.left:before,
    .block.bottom.left:before {
      left: 17.5px;
      top: 17.5px;
      width: 17.5px;
      height: 1px;
    }
    .block.top.right:before,
    .block.bottom.right:before {
      left: 0;
      top: 17.5px;
      width: 17.5px;
      height: 1px;
    }
    .block.top.left:after,
    .block.top.right:after {
      left: 17.5px;
      top: 17.5px;
      width: 1px;
      height: 17.5px;
    }
    .block.bottom.left:after,
    .block.bottom.right:after {
      left: 17.5px;
      top: 0;
      width: 1px;
      height: 17.5px;
    }
    .block:hover {
      border: 1px dashed #f00;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      /* Firefox */
      -webkit-box-sizing: border-box;
      /* Safari */
    }

    .block:hover:before,
    .block:hover:after {
      content: none;
    }
    .block.active {
      -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
    }

    .block.active:before,
    .block.active:after {
      content: none;
    }

    .block.active.black {
      background: #45484d;
      /* Old browsers */
      background: -moz-radial-gradient(
        70% 30%,
        ellipse cover,
        #45484d 1%,
        #000000 100%
      );
      /* FF3.6+ */
      background: -webkit-gradient(
        radial,
        70% 30%,
        0px,
        center center,
        100%,
        color-stop(1%, #45484d),
        color-stop(100%, #000000)
      );
      /* Chrome,Safari4+ */
      background: -webkit-radial-gradient(
        70% 30%,
        ellipse cover,
        #45484d 1%,
        #000000 100%
      );
      /* Chrome10+,Safari5.1+ */
      background: -o-radial-gradient(
        70% 30%,
        ellipse cover,
        #45484d 1%,
        #000000 100%
      );
      /* Opera 12+ */
      background: -ms-radial-gradient(
        70% 30%,
        ellipse cover,
        #45484d 1%,
        #000000 100%
      );
      /* IE10+ */
      background: radial-gradient(ellipse at 70% 30%, #45484d 1%, #000000 100%);
      /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#45484d', endColorstr='#000000', GradientType=1);
      /* IE6-9 fallback on horizontal gradient */
    }

    .block.active.white {
      background: rgb(255, 255, 255);
      /* Old browsers */
      background: -moz-radial-gradient(
        70% 30%,
        ellipse cover,
        rgba(255, 255, 255, 1) 0%,
        rgba(244, 244, 244, 1) 100%
      );
      /* FF3.6+ */
      background: -webkit-gradient(
        radial,
        70% 30%,
        0px,
        center center,
        100%,
        color-stop(0%, rgba(255, 255, 255, 1)),
        color-stop(100%, rgba(244, 244, 244, 1))
      );
      /* Chrome,Safari4+ */
      background: -webkit-radial-gradient(
        70% 30%,
        ellipse cover,
        rgba(255, 255, 255, 1) 0%,
        rgba(244, 244, 244, 1) 100%
      );
      /* Chrome10+,Safari5.1+ */
      background: -o-radial-gradient(
        70% 30%,
        ellipse cover,
        rgba(255, 255, 255, 1) 0%,
        rgba(244, 244, 244, 1) 100%
      );
      /* Opera 12+ */
      background: -ms-radial-gradient(
        70% 30%,
        ellipse cover,
        rgba(255, 255, 255, 1) 0%,
        rgba(244, 244, 244, 1) 100%
      );
      /* IE10+ */
      background: radial-gradient(
        ellipse at 70% 30%,
        rgba(255, 255, 255, 1) 0%,
        rgba(244, 244, 244, 1) 100%
      );
      /* W3C */
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f4f4f4', GradientType=1);
      /* IE6-9 fallback on horizontal gradient */
    }
  }
}
</style>