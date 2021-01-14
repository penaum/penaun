<template>
    <div class="foter">
        <p class="foot">
            <span>penaun'blog</span>
            <span>{{ date }}</span>
            <span>赣ICP备20008964号</span>
        </p>
    </div>
</template>

<script>

import { formateDateTime } from '@/assets/common.js'

export default {
    data(){
        return {
            date: ''
        }
    },
    created(){
        setInterval( ()=> {
            this.date = formateDateTime(new Date())
        }, 1000)
    }
}
</script>

<style>
.foter{
    background: #120422;
}
.foot{
    height: 60px;
    color: #fff;
    line-height: 60px;
    text-align: center;
    /* background: #999; */
}
.foot span{
    display: inline-block;
    margin: 0 10px;
}
</style>