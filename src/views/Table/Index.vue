<template>
  <div id="mainTable">
    <Table :Data="Data" :dataObj="dataObj" file="file" img="img" imgs="imgs" :handle="handle" />
  </div>
</template>

<script>
import Table from "./Table";
export default {
  data() {
    return {
      dataObj: [
        {
          prop: "id",
          label: "ID",
          width: "50"
        },
        {
          prop: "optime",
          label: "时间",
          custom: function(data) {
            return data.substr(0, 10);
          }
        },
        {
          prop: "fileName",
          label: "文件名称"
        }
      ],
      handle: {
        edit(row) {
          console.log("编辑", row);
        },
        delete(row) {
          console.log("删除", row);
        }
      },
      Data: [
        {
          id: 0,
          optime: "2019-11-07 00:00:00",
          fileName: "文件1",
          file: "/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
          img: "/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
          imgs: [
            "/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
            "/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
          ]
        },
        {
          id: 1,
          optime: "2019-11-07 00:00:00",
          fileName: "文件2",
          file: "/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          img: "/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          imgs: [
            "/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            "/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"
          ]
        },
        {
          id: 2,
          optime: "2019-11-07 00:00:00",
          fileName: "文件3",
          file: "/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          img: "/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
          imgs: [
            "/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
            "/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
          ]
        }
      ]
    };
  },
  components: {
    Table
  }
};
</script>

<style>
</style>