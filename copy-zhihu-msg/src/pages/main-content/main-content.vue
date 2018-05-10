<template>
    <div class="content-page">
        <!-- 标题部分 -->
        <question-header :question="data.question"></question-header>

        <!-- 楼层部分 -->
        <div class="content-body">

        </div>

        
        <!-- 评论区 -->
        <div class="comment">
            <div class="answer-btn">留言</div>

            <div class="editor-container">
                <!-- 组件2:编辑器 -->
            </div>
        </div>
    </div>
</template>

<script>
    import {data} from "./data.js";
    import QuestionHeader from './child/question-header.vue';

    export default {
        name: "main-content",
        mixins: [],
        props: {

        },
        data() {
            return { 
                data,
            }
        },
        computed: { 

        },
        methods: { 

        },
        created() { 

        },
        mounted() { 
        },
        components: { 
            QuestionHeader,

        },
        watch: { 

        }
    }
</script>
<style scoped lang="scss">

</style>