<template>
    <div id="header">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <!-- <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="rgba(127,203,243,0.7)"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">默</el-menu-item>
            <el-menu-item index="a">萧</el-menu-item>
            <el-menu-item index="b">一</el-menu-item>
            <el-menu-item index="c">世</el-menu-item>
            <el-menu-item index="c">世</el-menu-item>
            <el-menu-item index="c">世</el-menu-item> :style="{color:color[parseInt(Math.random()*4)]}"
        </el-menu> -->
        <div class="head">
            <div class="avatartab">
                <el-avatar class="avatar" fit="fill" :src="avatarUrl.avatarUrl"></el-avatar>
            </div>
            <div class="blogTitle">
                <h3 @click="indexBtn">
                    penaun
                </h3>
                <h5>
                    改变自己，从细微之处开始。
                </h5>
            </div>
            
        </div>
        <div class="navwrap" :class="fixNav?'fix':''">
            <ul class="navMenu">
                <li v-for="(w, i) in word" :class="activeIndex===i?'active':''" :key="i" @click="handleSelect(w.path,i)">{{ w.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // name:'navbar',
    props: ['fixNav'],
    data(){
        return {
            activeIndex: 0,
            avatarUrl: {avatarUrl: require("@/assets/image/avatar.jpg")},
            color: ['#34f8a3', '#3db5fa', '#f79e4c', '#fb57f3'], //青 蓝 橙 粉
            word: [{
                name: '默',
                path: '/silent'
            }, {
                name: '萧',
                path: '/wistful'
            }, {
                name: '一',
                path: '/one'
            }, {
                name: '世',
                path: '/world'
            }, {
                name: '飞',
                path: '/fly'
            }, {
                name: '光',
                path: '/shine'
            }, {
                name: '梦',
                path: '/dream'
            }]
            
        }
    },
    methods: {
      handleSelect(keyPath, i) {
        this.activeIndex = i
        console.log(keyPath)
        this.$router.push({ path: keyPath })
      },
      indexBtn() {
           this.$router.replace({ path: '/index' })
      }
    }
}
</script>

<style lang="less" scoped>
    #header{
        background: #fff;
        .head{
            width: 65%;
            margin: 0 auto;
            display: flex;
            height: 120px;
            // padding: 20px;
            padding: 0 20px;
            .blogTitle{
                 h3{
                    font-size: 20px;
                    color: #333;
                    font-weight: normal;
                    line-height: 60px;
                }
                h5{
                    font-size: 12px;
                    color: #888;
                    text-indent: 2rem;
                }
            }
            .avatartab{
                height: 80px;
                width: 80px;
                padding: 10px 20px;
                .avatar{
                    width: 100%;
                    height: 100%;
                    &:hover{
                        animation: rotate 8s infinite linear;
                    }
                }
            }
        }
        .fix{
            position: fixed;
            top: 0;
        }
        .navwrap{
            width: 100%;
            background: #fff;
            border-bottom: 1px solid #ddd;
            box-shadow: 0px 2px 4px #ddd;
            .navMenu{
                width: 65%;
                margin: 0 auto;
                display: flex;
                list-style-type: none;
                li{
                    height: 40px;
                    width: 80px;
                    text-align: center;
                    line-height: 40px;
                    padding: 10px 0;
                    // color: #fff;
                    font-size: 16px;
                    border-radius: 50%;
                }
                li:hover{
                    color: #f79e4c;
                    // animation:opac 4s infinite;
                }
                .active{
                    color: #f79e4c;
                }
            }
        }
    }
    /*旋转动画*/
    @keyframes rotate
    {
        from {transform: rotate(0);}
        to {transform: rotate(360deg);}
    }
</style>