<template>
    <div class="section__3bS4" :class="read_at ? '' : 'not_read_at'">
        <div class="tip">
            <router-link :to="'/users/' + name">
                {{ name }}
            </router-link>
            •
            在
            <router-link :to="'/articles/' + slug">{{ title }}</router-link>
            的评论提及了你
            <span class="meta"> • {{ created_diff }}</span>
        </div>

        <div class="markdown" v-html="body" v-highlight></div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'name', 'created_diff', 'body', 'read_at', 'slug'],
    }
</script>

<style scoped>
    @import "~highlight.js/styles/atom-one-dark.css";
    .meta, .operate {
        color: #a9a7a7;
        font-size: 12px;
    }
    .section__3bS4 a {
        color: #15b982;
    }
    .section__3bS4 .tip{
        margin-bottom: 10px;
    }
     .not_read_at{
        background-color:#f5f5f1;
         border-bottom: 1px solid #ffffff;
    }
</style>