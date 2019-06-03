<template>
    <el-container class="layout-default">
        <el-header height="">
            <index-header/>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height="">
            <m-footer/>
        </el-footer>
    </el-container>
</template>
<script>
    import IndexHeader from '@/components/header/index'
    import MFooter from '@/components/footer/index'

    export default {
        components: {
            IndexHeader,MFooter
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/public/layout.scss"
</style>
