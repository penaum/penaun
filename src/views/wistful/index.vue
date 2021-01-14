<template>
  <div>
      <!-- 萧|关于我 -->
    <div class="xiao">
      <mavon-editor
        class="md"
        :value="articleDetail.context"
        :subfield = "prop.subfield"
        :defaultOpen = "prop.defaultOpen"
        :toolbarsFlag = "prop.toolbarsFlag"
        :editable="prop.editable"
        :scrollStyle="prop.scrollStyle"
      ></mavon-editor>
      <div class="contact">
        <img :src="imgUrl.qq" alt="">
        <img :src="imgUrl.wchat" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      articleDetail: {
        context: `#### 萧|关于我    
&nbsp;&nbsp;&nbsp;&nbsp;我是JiaJun Peng，目前在深圳从事Web前端工作。虽然整天敲着代码，其实我并不热爱写代码，甚至我迷迷糊糊的就干起了程序员这个行当。下面可以先说说我怎么被人坑入行的。
&nbsp;&nbsp;&nbsp;&nbsp;本人自小性格较内向，到了高二的时候才开始慢慢的变得开朗起来。最早接触代码是在高一下学期吧，文理科分班后，一个初中的朋友（[dengzii](http://dengzii.com/)）和我分同一个班。我学习并不是很好，dengzii学习应该很好的但是他并不热爱学习，高中就在自学vb，c++语言。然后两个学习不怎么好的人坐后排，于是我就被带‘坏’了。他开始教我vb基础,然而就只是vb基础，数据类型和进制、for循环、if语句、while语句我记得就只是这些了。高中匆匆结束，高考填志愿。内向的我并不知道以后会干什么该填什么自愿，于是就全往计算机方面填了。
![](https://upload-images.jianshu.io/upload_images/24545756-fcc8e57f902fe23d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/450)

&nbsp;&nbsp;&nbsp;&nbsp;虽然并不热爱代码，但是还是要努力学习呀。本人是才接触前端一年多的菜鸡。工作主要用vue用的多，也熟一点react、小程序。目前正努力的在前端的路上慢慢深造，也在慢慢的学后端Java（前端没搞懂就想学java，哈哈哈哈）。所以2020年7月初我在阿里云申请了服务器、域名，搭建了我的个人博客。有志同道合的朋友可以一起来交流，学习。代码之余也喜欢音乐、电影、打球，当然也还有游戏啦。
##### 联系我`
      },
      imgUrl:{
        qq: require("@/assets/image/qq.png"),
        wchat: require("@/assets/image/wchat.png")
      }
    }
  },
  computed: {
    prop () {
      let data = {
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        editable: false,
        toolbarsFlag: false,
        scrollStyle: false
      }
      return data
    }
  },
}
</script>

<style scope>
.xiao .shadow{
  box-shadow: none !important;
}
</style>