<template>
    <div class="header">
        <el-row>
            <top-bar/>
        </el-row>
        <el-row>
            <search-bar/>
        </el-row>
    </div>
</template>

<script>
    import TopBar from "@/components/header/topBar";
    import SearchBar from "@/components/header/searchBar";

    export default {
        name: "index",
        components: {SearchBar, TopBar},
        comments: {
            TopBar,
            SearchBar
        }
    }
</script>

<style scoped lang="scss">
    .header {
        width: 100%;

        .el-row:nth-of-type(1) {
            width: 1190px;
            margin: 0 auto;
            height: 40px;
            z-index: 6;
        }

        .el-row:nth-of-type(2) {
            width: 100%;
            background-color: #fff;
        }
    }
</style>
