<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <span class="big">组件库</span>
        <span class="min">
          <img width="40" style="margin-top: 5px" src="../../assets/images/头像.jpg" alt />
        </span>
      </div>
      <span class="header-btn" @click="hiddenSidebar">
        <i class="el-icon-menu"></i>
      </span>
      <breadcrumb class="breadcrumb-container" />
      <div class="right">
        <el-dropdown>
          <div class="header-btn">
            <div class="imgWrap">
              <img width="40" src="../../assets/images/头像.jpg" alt />
            </div>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push({name:'Personal'})">
              <i style="padding-right: 8px" class="fa fa-cog"></i>个人中心
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout">
              <i style="padding-right: 8px" class="fa fa-key"></i>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="app">
      <div class="aside">
        <div class="menu">
          <el-menu
            :router="true"
            background-color="#222d32"
            text-color="#fff"
            active-text-color="#409EFF"
            :default-active="$route.path"
            class="menu"
            unique-opened
            :collapse="isCollapse"
          >
            <template v-for="(item) in menus">
              <template v-if="item.child">
                <el-submenu :index="item.url" :key="item.name">
                  <template slot="title">
                    <i :class="item.icon" class="iconfont"></i>
                    <span slot="title">{{ item.name }}</span>
                  </template>
                  <template v-for="subItem in item.child">
                    <el-submenu v-if="subItem.child" :index="subItem.url" :key="subItem.name">
                      <template slot="title">{{ subItem.name }}</template>
                      <el-menu-item
                        v-for="threeItem in subItem.child"
                        :key="threeItem.name"
                        :index="threeItem.url"
                      >{{ threeItem.name }}</el-menu-item>
                    </el-submenu>
                    <el-menu-item
                      v-else
                      :index="subItem.url"
                      :key="subItem.name"
                    >&nbsp;&nbsp;{{ subItem.name }}</el-menu-item>
                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <el-menu-item :index="item.url" :key="item.name">
                  <i :class="item.icon" class="iconfont"></i>
                  <span slot="title">{{ item.name }}</span>
                </el-menu-item>
              </template>
            </template>
          </el-menu>
        </div>
        <div class="sidebar-toggle" @click="sidebarToggle">
          <div class="icon-left">
            <i class="el-icon-back"></i>
          </div>
        </div>
      </div>
      <div class="app-body">
        <tags-view />
        <div id="mainContainer" class="main-container">
          <transition name="el-fade-in">
            <router-view :key="key" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import TagsView from "@/components/TagsView";
import Cookie from "@/tools/cookie";
export default {
  beforeRouteEnter(to, from, next) {
    if (Cookie.get("username")) {
      //判断sessionStorage是否存在token
      next();
    } else {
      if (to.path === "/login") {
        next();
        return;
      } else {
        next({
          path: "/login"
        });
      }
    }
  },
  created() {
    this.userInfo.name = this.$Cookie.get("username");
  },
  components: {
    Breadcrumb,
    TagsView
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  data() {
    return {
      isCollapse: false,
      menus: [
        {
          icon: "iconshouye-copy",
          url: "/index",
          name: "首页"
        },
        {
          icon: "iconzujian",
          url: "2",
          name: "组件库",
          child: [
            {
              url: "/table",
              name: "表格组件"
            },
            {
              url: "/tinymce",
              name: "富文本编辑器"
            },
            {
              url: "/mixin",
              name: "动效合集"
            },
            {
              url: "/backtotop",
              name: "返回顶部"
            },
            {
              url: "/todolist",
              name: "To Do List"
            },
            // {
            //   url: "/bmap",
            //   name: "百度地图"
            // },
            // {
            //   url: "/amap",
            //   name: "高德地图"
            // }
          ]
        },
        {
          icon: "iconyouxi",
          url: "3",
          name: "小游戏",
          child: [
            {
              url: "/gobang",
              name: "五子棋"
            },
            {
              url: "/snake",
              name: "贪吃蛇"
            }
          ]
        }
      ],
      userInfo: {
        name: ""
      }
    };
  },
  methods: {
    click() {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty("--bg-color", "red");
      document
        .getElementsByTagName("body")[0]
        .style.setProperty("--color-primary", "red");
    },
    logout() {
      Cookie.remove("username");
      this.$router.push("/login");
    },
    sidebarToggle(e) {
      e.preventDefault();
      if (this.isCollapse) {
        document.body.classList.remove("sidebar-hidden");
        this.isCollapse = false;
      } else {
        document.body.classList.add("sidebar-hidden");
        this.isCollapse = true;
      }
    },
    hiddenSidebar(e) {
      e.preventDefault();
      document.body.classList.toggle("sidebar-close");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .header {
    .breadcrumb-container {
      float: left;
    }
    .imgWrap {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      overflow: hidden;
      position: absolute;
      right: 35px;
      top: 5px;
    }
  }
}
</style>

