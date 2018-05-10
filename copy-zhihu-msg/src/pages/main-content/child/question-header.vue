<template>
    <div class="question-header">
        <!-- 标签 -->
        <div class="question-tags">
            <div v-for="(item,index) in question.tags" :key="index" class="tag">{{item}}</div>
        </div>      
        <!-- 标题 -->
        <h1 class="question-title">
            {{question.title}}
        </h1> 

         <!--描述  -->
         <div class="question-content">
             <div class="content-fold" @click="foldStatus = false" v-show="foldStatus">
                <span>{{ellipsis(question.content)}}</span>
                <button class="btn-gray">
                    显示全部
                    <svg class="icon">
                    <use xlink:href="#icon-arrow-down"></use>
                    </svg>
               </button>
            </div>
            <div class="content-unfold" v-html="unfold_html" v-show="!foldStatus"></div>
        </div>

        <div class="question-footer">
            <button class="btn-blue">关注问题</button>
            <button class="btn-blue btn-reverse">
                <svg class="icon">
                    <use xlink:href="#icon-bianji"></use>
                </svg>
                <span>写回答</span>
            </button>
            <div class="question-footer-other">
                <button class="btn-gray">
                    <svg class="icon">
                        <use xlink:href="#icon-star"></use>
                    </svg>
                    <span>添加评论</span>
                </button>

                <button class="btn-gray">
                    <svg class="icon">
                        <use xlink:href="#icon-star"></use>
                    </svg>
                    <span>分享</span>
                </button>

                <button class="btn-gray">
                    <svg class="icon">
                        <use xlink:href="#icon-star"></use>
                    </svg>
                    <span>邀请回答</span>
                </button>

                <button class="btn-gray">
                    <svg class="icon">
                        <use xlink:href="#icon-star"></use>
                    </svg>
                    <span>举报</span>
                </button>

                 <button class="btn-gray" v-show="!foldStatus" @click="foldStatus=true">
                     <span>收起</span>
                    <svg class="icon">
                        <use xlink:href="#icon-arrow-up"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import {textToHtml} from 'src/plugin/filter.js';
    export default {
        name: "question-header",
        mixins: [],
        props: {
            question:{
                type:Object,
                default:{
                    tags:[],
                    title:'',
                    content:''
                },
                required:true
            },
        },
        data() {
            return { 
               foldStatus:true,
                
                
                
    
            }
        },
        computed: { 
            unfold_html(){
                return textToHtml(this.question.content);
            }
        },
        methods: { 
            ellipsis(text){
                return text.slice(0,75).concat('...');
            },
        },
        created() { 

        },
        mounted() { 

        },
        components: { 

        },
        watch: { 
            'question.content':{
                handler:function(val,oldVal){
                    //看看val的长度,是否需要显示fold标签
                },
                deep:true
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "src/assets/scss/mixin.scss";
    @import "src/assets/scss/variable.scss";
    .question-header{
        margin:0 auto;
        width:700px;
        color:#1a1a1a;
        .question-tags{
            @include flex-start;
            margin-bottom:15px;
            .tag{
                background:rgba(0,132,255,.1);
                padding:0 12px;
                height:30px;
                line-height:30px;
                border-radius:30px;
                cursor: pointer;
                margin:5px 5px 5px 0;
                color:$color-blue;
                transition:background .1s linear;
                &:hover{
                    background:rgba(0,132,255,.15);
                }
            }
        }
        .question-title{
            font-size:22px;
            line-height: 32px;
            @include ellipsis-multi;
        }

        .question-content{
            font-size:15px;
            line-height:25px;
            .content-fold{
                cursor: pointer;
                max-height: 50px;
                overflow: hidden;
                &:hover{
                    color: #646464;
                }
            }
        }

        .question-footer{
            @include flex-start;
            margin-top:10px;
            button{
                margin-right:15px;
            }
            .question-footer-other{
                @include flex-start;
                margin-left:5px;
                button{
                    margin-right:20px;
                }
            }
        }
    }
</style>