<template>
  <div id="Personal">
    <div class="leftBox">
      <el-card class="box-card">
        <div class="imgWrap">
          <img width="128" src="../../assets/images/头像.jpg" alt />
        </div>
        <div class="name">羽藥公子</div>
        <div class="adress">
          <i class="el-icon-location"></i>
          NanJing China
        </div>
        <el-divider content-position="left">
          <i class="el-icon-chat-line-square"></i>
          Wishes
        </el-divider>
        <div style="padding:5px;color:#777;text-align:center">愿你活成自己喜爱得模样 ❤</div>
        <el-divider content-position="left">
          <i class="el-icon-medal"></i>
          Skills
        </el-divider>vue
        <el-progress :percentage="70" color="rgb(39,108,218)"></el-progress>js
        <el-progress :percentage="80" color="rgb(39,108,218)"></el-progress>css
        <el-progress :percentage="60" color="rgb(39,108,218)"></el-progress>
      </el-card>
    </div>
    <div class="rightBox">
      <el-card class="box-card">
        <el-tabs>
          <el-tab-pane label="动态">
            <el-carousel :interval="5000" type="card" height="300px">
              <el-carousel-item>
                <img style="width:100%" src="../../assets/images/timg.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img style="width:100%" src="../../assets/images/timg (1).jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img style="width:100%" src="../../assets/images/timg (2).jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img style="width:100%" src="../../assets/images/timg (3).jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img style="width:100%" src="../../assets/images/timg (4).jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </el-tab-pane>
          <el-tab-pane label="时间线">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Personal {
  height: 100%;
  overflow-y: auto;
  display: flex;
  .leftBox {
    width: 28vw;
    box-sizing: border-box;
    padding: 10px;
    .box-card {
      .imgWrap {
        text-align: center;
      }
      .name {
        margin: 5px 0;
        font-size: 16px;
        text-align: center;
      }
      .adress {
        text-align: center;
        font-size: 12px;
        color: #7a7a7a;
      }
    }
  }
  .rightBox {
    width: 72vw;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>