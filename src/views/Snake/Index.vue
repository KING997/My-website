<template>
  <div id="Snake">
    <div id="map">
      <div id="food" :style="{top:top*10+'px',left:left*10+'px'}"></div>
      <div
        :class="['snake',index===0?'first':'']"
        v-for="(item,index) in snake"
        :key="'snake'+index"
        :style="{top:item.y*10+'px',left:item.x*10+'px',display:item.x===null?'none':'block'}"
      ></div>
    </div>
    <div id="scoreBox">
      <h1>得分：{{score}}</h1>
    </div>
    <div id="start" v-show="startShow">
      <el-button @click="startGame">开始游戏</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top: "",
      left: "",
      maxTop: 0,
      maxLeft: 0,
      direction: "right",
      snake: [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }],
      timer: "",
      startShow: true
    };
  },
  computed: {
    score() {
      return this.snake.length - 3;
    }
  },
  methods: {
    //开始游戏
    startGame() {
      this.init();
      this.startShow = false;
    },
    //初始化小蛇
    init() {
      let map = document.getElementById("map");
      this.maxLeft = map.offsetWidth;
      this.maxTop = map.offsetHeight;
      this.snake = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
      this.direction = "right";
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.run();
      }, 100);
      this.foodChange();
      this.dirChange();
    },
    //生成随机数
    rnd(max) {
      return Math.floor(Math.random() * max);
    },
    //食物位置变化
    foodChange() {
      this.top = this.rnd(this.maxTop / 10);
      this.left = this.rnd(this.maxLeft / 10);
    },
    //小蛇跑起来
    run() {
      for (let i = this.snake.length - 1; i > 0; i--) {
        this.snake[i].x = this.snake[i - 1].x;
        this.snake[i].y = this.snake[i - 1].y;
      }
      // 根据方向处理蛇头
      switch (this.direction) {
        case "left":
          this.snake[0].x -= 1;
          break;
        case "right":
          this.snake[0].x += 1;
          break;
        case "up":
          this.snake[0].y -= 1;
          break;
        case "down":
          this.snake[0].y += 1;
          break;
      }
      //如果小蛇吃到食物了（即小蛇的头坐标和食物坐标重合）
      if (this.snake[0].x === this.left && this.snake[0].y === this.top) {
        this.snake.push({ x: null, y: null, flag: null });
        this.foodChange();
      }
      //如果小蛇撞墙了
      if (
        this.snake[0].x < 0 ||
        this.snake[0].x > 49 ||
        this.snake[0].y < 0 ||
        this.snake[0].y > 49
      ) {
        alert("Game Over!");
        clearInterval(this.timer);
        this.snake = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];
        this.startShow = true;
      }
    },
    //方向改变
    dirChange() {
      let _this = this;
      document.onkeydown = function(event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        switch (e.keyCode) {
          //左键
          case 37:
            //方向为“右”的时候，不可以往“左”
            if (_this.direction === "right") {
              break;
            } else {
              _this.direction = "left";
              break;
            }
          //上键
          case 38:
            //方向为“下”的时候，不可以往“上”
            if (_this.direction === "down") {
              break;
            } else {
              _this.direction = "up";
              break;
            }
          //右键
          case 39:
            if (_this.direction === "left") {
              break;
            } else {
              _this.direction = "right";
              break;
            }
          //下键
          case 40:
            if (_this.direction === "up") {
              break;
            } else {
              _this.direction = "down";
              break;
            }
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
#Snake {
  width: 100%;
  height: 100%;
  position: relative;
  #map {
    margin: auto;
    width: 500px;
    height: 500px;
    background-color: #ccc;
    overflow: hidden;
    position: relative;
    border: 10px solid #000;
    box-sizing: content-box;
    #food {
      width: 10px;
      height: 10px;
      background-color: #fff;
      position: absolute;
    }
    .snake {
      width: 10px;
      height: 10px;
      background-color: #fff;
      position: absolute;
    }
    .first {
      background-color: #000;
    }
  }
  #scoreBox {
    position: absolute;
    right: 10%;
    top: 10%;
  }
  #start {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>