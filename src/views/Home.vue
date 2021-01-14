<template>
  <div>
    <div class="ctn">
      <transition name="el-zoom-in-center">
        <div class="box" v-show="show">el-zoom-in-center</div>
      </transition>
      <transition name="el-zoom-in-top">
        <div class="box" v-show="show">el-zoom-in-top</div>
      </transition>
      <transition name="el-zoom-in-bottom">
        <div class="box" v-show="show">el-zoom-in-bottom</div>
      </transition>
    </div>
    <el-button type="primary"  @click="zoom()">缩放</el-button>
  </div>
</template>
 <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      show:true
    };
  },
  methods: {
   zoom(){
      this.show = !this.show;
   }
  },
};
</script>
 <style lang="css" scoped>
 .ctn{
   width: 1000px;
   height: 300px;
 }
.box {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: greenyellow;
  text-align: center;
  line-height: 200px;
  color: #fff;
  margin: 0 20px 20px 0;
}
</style>