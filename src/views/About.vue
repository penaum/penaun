<template>
    <div class="article">
        <h3>弹性盒子模型</h3>
        <div>
            弹性盒模型是css3的一种新的布局模式，是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。

            采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

            弹性盒子模型，首先还是要说一下容器和项目。使用display: flex布局的元素，我们称之为容器；而它包裹的所有子元素则自动成为项目。 
            
            例如：下面的ul>li
            ```
                1. <div>
                2. <ul></ul>   
                </div>
            ```
            


        </div>
        <p>
            display: flex
        </p>
        <p>
            
        </p>
        <!-- <p v-for='(d,i) in arr' :key="i">为什么别人都在忙，而我却无所事事</p> -->
    </div>
</template>

<script>
export default {
    data(){
        return {



            arr:['时间过了五年，我们之间突然有了联系。以我的情商这些年我一直是一个人渡过，但我想不到的是你也没有和人交往。',
            '2020年四月，闹得沸沸扬扬的国内疫情已经快要结束，而国外已然到达了高峰期，然而这些已经不会引起国内太多的人关注了。',
            '四月末的一个早上，S市城中村的一个小单间里。一条微信嘟咚一条微信消息想了起来我卧槽我的大致shz',
            '还记得你答应过我不会让我把你找不见，可你跟随那南归的候鸟飞的那么远，爱像风筝断了线，',
            '做的这么难受的吗',
            '有钱的就是越有钱，不要去和比你差的人比 贫富差距是有原因的 看不到真实',
            '不努力就是没钱 啥都没  辣鸡 只能靠网络满足  别人在满足你的时候 别人在努力 在享受你给他的']
        }
    },
    created() {
        $.get('./test/index.md')
    }
}
</script>

<style lang="less" scoped>
    .article{
        p{
            background: yellow;
            text-indent:2em;
            // margin-bottom: 18px;
            margin: 0 10px 18px 10px;
        }
    }
</style>
