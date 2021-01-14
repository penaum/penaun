<template>
  <div class="hello">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <navbar class="sidebar-container hasTagsView" :fixNav='fixNav' />
    
    <!-- 导航菜单 -->
    <div class="main-container" :style="{minHeight:winheight}">
      <app-main />
    </div>
    <div class="fote">
      <footers />
    </div>
    <el-backtop :bottom="100">
      <el-tooltip placement="top" content="返回顶部">
        <div
          style="{
              height: 100%;
              width: 100%;
              background-color: #f2f5f6;
              box-shadow: 0 0 6px rgba(0,0,0, .12);
              text-align: center;
              line-height: 40px;
              color: #1989fa;
            }"
        >
          <svg width="16" height="16" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" class="Icon Icon--backToTopArrow" aria-hidden="true" style="height:16px;width:16px" fill="currentColor"><path d="M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z" /></svg>
        </div>
      </el-tooltip>
    </el-backtop>
    
  </div>
</template>

<script>
import { Navbar, appMain, footers } from './layout'

export default {
  name: 'HelloWorld',
  components:{ Navbar, appMain, footers },
  data() {
    return {
      winheight: '',
      screenHeight: '',
      fixNav: false
    }
  },
  props: {
    msg: String
  },
   watch: {
    // 监听浏览器窗口宽度,当浏览器窗口小于1325时,隐藏系统时间
    screenHeight(val) {
      console.log(val)
      this.winheight = window.innerHeight - 60 +'px'
    }
  },
  created() {
    this.winheight = window.innerHeight - 60 +'px'
  },
  mounted(){
     const that = this
    window.onresize = () => {
      return (() => {
        window.screenHeight = window.innerHeight
        this.screenHeight = window.screenHeight
      })()
    }
    window.addEventListener("scroll", that.showIcon)
  },
  methods:{
    showIcon(e) {
      let top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
      console.log(top);
      console.log(document.documentElement.scrollTop);

      if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 120 ) {  
        console.log(1)          
        this.fixNav = true
      } else {
      this.fixNav = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  d3fbf1 cff8fa #eaf4f4 -->
<style scoped lang="less">
    .hello{
      background: #eaf4f4;
    }
    .main-container{
      width: 65%;
      background: #fff;
      margin:15px auto;
    }
</style>
