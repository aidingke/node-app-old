<!-- 
* name: 学生
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .student
        Header(title="学生")
        .container
            nav
                span.left 班主任 陈欧阳
                |
                span.right(@click="edit()") {{statusText}}
            ul
                li(v-for="(item,index) in studentList",:key="index")
                    img(v-show="statusText==='完成'",@click="deleCurrentLine(index)",src="static/img/reduce.png")
                    span.name {{item.name}}
                    span.number {{item.number}}
</template>
<script>
    export default {
        name: 'Student',
        data () {
            return {
                statusText:'编辑',
                studentList:[
                    {
                        name:'陈秀莲33',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲11',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲11',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲',
                        number:'学号05623636'
                    },
                    {
                        name:'陈秀莲334',
                        number:'学号05623636'
                    },
                ]
            }
        },
        methods:{
            edit(){
                if(this.statusText === '编辑'){
                    this.statusText = '完成';
                } else {
                    this.statusText = '编辑'
                }
            },
            deleCurrentLine(index){
                this.studentList.splice(index,1);
            }
        }
    }
</script>
<style lang="stylus">
.student
    .container
        height 100%
        position fixed
        left 0
        right 0
        background #efefef
        nav
            height 88px
            line-height 88px
            font-size 35px
            padding 15px 20px
            background #fff
            span.left
                float left
            span.right
                float right
                color #148ce8
                padding-right 30px
        ul
            margin 20px
            background #fff
            font-size 30px
            overflow auto
            height 100%
            li  
                padding 30px 30px
                border-bottom 3px solid #efefef
                overflow hidden
                display flex
                height 60px
                line-height 60px
                img
                    width 60px
                    height 60px
                    margin-right 40px
                span.name
                    font-weight bold
                    flex 1
                span.number
                    width 300px
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

