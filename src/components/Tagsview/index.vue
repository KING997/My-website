<template>
  <nav class="nav-bar">
    <ScrollPane class="nav-bar-scroll">
      <router-link
        :to="v.path"
        class="nav-bar-tag"
        v-for="(v,i) in nav"
        :key="i.path"
        :class="$route.path == v.path ? ' active':''"
      >
        <i class="point"></i>
        {{ v.title }}
        <div v-show="nav.length != 1" class="close-box">
          <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(i)"></span>
        </div>
      </router-link>
    </ScrollPane>
  </nav>
</template>

<script>
import ScrollPane from "@/components/Tagsview/ScrollPane.vue";

export default {
  data() {
    return {
      nav: []
    };
  },
  components: {
    ScrollPane
  },
  created() {
    this.$router.afterEach(this.afterEachHandler);
  },
  methods: {
    afterEachHandler(to, from) {
      //   console.log(from.meta.keepAlive);
      //判断当前标签是否需要保持，如果不，则关闭本标签
      //   if (!from.meta.keepAlive) {
    //   this.nav = this.nav.filter(item => item.path !== from.path);
      //   }
      //判断当前是否存在即将跳转的标签，如果不存在，则创建
      if (!this.nav.some(item => item.path === to.path)) {
        this.nav.push({
          path: to.path,
          title: to.meta.title
        });
      }
    },
    closeSelectedTag(i) {
      let nav = this.nav;
      let thisPath = nav[i].path;
      nav.splice(i, 1);
      if (thisPath == this.$route.path) {
        this.$router.push(nav[nav.length - 1].path);
      }
    }
  },
  mounted: function() {
    this.nav.push({
      path: this.$route.path,
      title: this.$route.meta.title
    });
  }
};
</script>
<style lang="scss" scoped="">
</style>
