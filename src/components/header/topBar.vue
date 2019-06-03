<template>
    <el-row class="top-bar">
        <el-col :span="10">
            <geo/>
        </el-col>
        <el-col :span="14">
            <m-nav/>
        </el-col>
    </el-row>
</template>

<script>


    import Geo from "@/components/header/geo";
    import MNav from "@/components/header/nav";

    export default {
        name: "topBar",
        components: {MNav, Geo}
    }
</script>

<style scoped lang="scss">
    .top-bar {
        height: 40px;
        line-height: 40px;
    }
</style>
