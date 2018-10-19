<!-- 
* name: 课程表
* author: cgc
* time: 2018-8-2
-->
<template lang="pug">
    .table
        Header(title="课程表")
        .container
            table
                tbody
                    tr
                        th(v-for="(item, index) in th" :key="index" :class="`profess-th__${index}`") {{item}}

                    tr(v-for="(items, index) in tr" :key="index" :class="`profess-tr__${index}`")

                        td(v-for="(item, i) in items" :key="item" :class="`profess-td__${i}}`")

            div(v-for="(item, index) in data" :key="index" :class="`profess-cont profess-cont__${index}`")
                span(class="profess-name") {{item.title}}
                span(class="class-name") {{item.content}}

            .button-submit
                el-button(type='primary') 添加课程
</template>
<script>
    export default {
        name: 'ClassTable',
        data () {
            return {
                th: ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
				tr: new Array(8),
                data: [{
					title: '电子电控',
					content: '18级计算机系汽车专修2班',
					courseData: 2,
					courseTime: [3, 4]
				}, {
					title: '美容美发',
					content: '18级计算机系汽车专修2班',
					courseData: 4,
					courseTime: [6, 6]
				}, {
					title: '厨师数控',
					content: '18级计算机系汽车专修2班',
					courseData: 6,
					courseTime: [1, 3]
				}]
            }
        },
        methods:{
        },
        mounted(){
            for (let i = 0; i< this.tr.length; i++) {
                this.$set(this.tr, i, new Array(8))
            }
            setTimeout(() => {
                for (let i = 0; i < this.data.length; i++) {
                    const ele1 = document.querySelector(`.profess-th__${this.data[i].courseData}`)
                    const ele2 = document.querySelector(`.profess-tr__${this.data[i].courseTime[0] - 1}`)
                    const position1 = ele1.getBoundingClientRect()
                    const position2 = ele2.getBoundingClientRect()
                    const range = this.data[i].courseTime[1] - this.data[i].courseTime[0] + 1
                    document.querySelector(`.profess-cont__${i}`).style.left = `${position1.left}px`
                    document.querySelector(`.profess-cont__${i}`).style.top = `${ele2.offsetTop}px`
                    document.querySelector(`.profess-cont__${i}`).style.width = `${position1.width}px`
                    document.querySelector(`.profess-cont__${i}`).style.height = `${range * 82}px`
                }
            }, 0)
        }
    }
</script>
<style lang="stylus">
.table
    .container 
        background #deeeff
        height 100%
        position fixed
        left 0
        right 0
        .profess-cont 
            position absolute
            background red
        
        table
            width 100%
            border-collapse collapse
            margin 0 auto
            text-align center
            td,th
                border 1px solid #cad9ea
                font-size 30px
                color #3379ae
            th
                height 100px
                line-height 100px
                width 12.8%
                &:nth-child(1){
                    width 5%
                }
            td
                height 150px
                line-height 150px
                .profess-cont
                    height 100%
                    width 100%
                    border-radius 8px
                    background #f65939
                    color #fff
                    .profess-name
                        display block
                        font-size 30px
                    .class-name
                        display block
                        height 30px
                        line-height 30px
                        font-size 22px
                        padding 0 18px
                        margin-top 80px
        .button-submit
            position fixed
            width 100%
            bottom 0
            left 0
            right 0
            .el-button
                width 100%
                height 80px
                font-size 30px
</style>

