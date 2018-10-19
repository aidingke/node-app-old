<!-- 
* name: 师资管理
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .teacher
        Header(title="师资管理")
        .container
            ul
                li(v-for="(item,index) in dataList",:key="index")
                    .left
                        .name {{item.name}}
                        .phone {{item.phone}}
                        .major {{item.major}}
                    .right
                        .date 2018-05-07 15:16:24
        Control(addText="新增老师", @handleControl='handleControl')
</template>
<script>
    export default {
        name: 'TeacherManage',
        data () {
            return {
                dataList:[
                    {
                        name:'周永宏',
                        phone:'13434302876',
                        major:'汽车电控电子专修',
                        date:'2018-05-07 15:16:24'
                    },
                    {
                        name:'周永宏',
                        phone:'13434302876',
                        major:'汽车电控电子专修',
                        date:'2018-05-07 15:16:24'
                    },
                    {
                        name:'周永宏',
                        phone:'13434302876',
                        major:'汽车电控电子专修',
                        date:'2018-05-07 15:16:24'
                    },
                    {
                        name:'周永宏',
                        phone:'13434302876',
                        major:'汽车电控电子专修',
                        date:'2018-05-07 15:16:24'
                    },
                    {
                        name:'周永宏',
                        phone:'13434302876',
                        major:'汽车电控电子专修',
                        date:'2018-05-07 15:16:24'
                    },
                    {
                        name:'周永宏',
                        phone:'13434302876',
                        major:'汽车电控电子专修',
                        date:'2018-05-07 15:16:24'
                    }
                ]
            }
        },
        methods:{
            handleControl(){
                console.log(123)
            }
        }
    }
</script>
<style lang="stylus">
.teacher
    .container 
        background #efefef
        height 100%
        position fixed
        left 0
        right 0
        ul
            li
                overflow hidden
                margin 40px 0
                padding 40px
                background #fff
                .left
                    float left
                    .name
                        color #000
                        font-size 30px
                    .phone,.major
                        color #a0a0a0
                        margin-top 20px
                .right
                    float right
                    .date
                        color #a0a0a0
    .add
        border-radius 50%
        color #fff
        background #148ce8
        border 10px solid #afd4ef
        width 150px
        height 150px
        position fixed
        bottom 100px
        right 100px
        text-align center
        z-index 2
        span.push
            font-size 80px
            font-weight 100
            display block
            height 55px
            line-height 55px
            margin-top 10px
        span.font 
            font-size 26px
            display block
            height 50px
            line-height 50px
            margin-top 10px
                        
</style>

