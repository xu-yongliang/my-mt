<template>
    <div class="s-wrapper">
        <div class="s">
            <el-row class="nav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item class="link-style" :to="{ path: '/' }">北京美团</el-breadcrumb-item>
                    <el-breadcrumb-item class="link-style" :to="{ path: '/' }">北京搜索词</el-breadcrumb-item>
                </el-breadcrumb>
            </el-row>
            <el-row class="s-content" :gutter="10">
                <el-col :span="19">
                    <el-row class="left-content">
                        <pop-over-category :categories="category" title="分类"/>
                        <pop-over-category :categories="category" title="分类2"/>
                    </el-row>
                    <el-row class="produce-wrapper">
                        <produce-list/>
                    </el-row>
                </el-col>
                <el-col class="right-content" :span="5">
                    <div class="g-y-l-w">
                        <guest-you-like/>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import PopOverCategory from "@/components/search/popOverCategory";
    import ProduceList from "@/components/search/produceList";
    import GuestYouLike from "@/components/search/guestYouLike";

    export default {
        name: "search",
        components: {GuestYouLike, ProduceList, PopOverCategory},
        data() {
            return {
                category: [
                    {
                        "name": "美食",
                        "options": [
                            "全部",
                            "酒店住宿",
                            "周边游",
                            "休闲娱乐",
                            "生活服务",
                            "宴会",
                            "时尚购",
                            "旅游",
                            "丽人",
                            "运动健身",
                            "母婴亲子",
                            "宠物",
                            "汽车服务",
                            "摄影写真",
                            "结婚",
                            "交通枢纽",
                            "家装",
                            "学习培训",
                            "医疗",
                            "榛果民宿"
                        ]
                    },
                    {
                        "name": "酒店住宿",
                        "options": [
                            "全部",
                            "酒店住宿",
                            "周边游",
                            "休闲娱乐",
                            "生活服务",
                            "宴会",
                            "时尚购",
                            "旅游",
                            "丽人",
                            "运动健身",
                            "母婴亲子",
                            "宠物",
                            "汽车服务",
                            "摄影写真",
                            "结婚",
                            "交通枢纽",
                            "家装",
                            "学习培训",
                            "医疗",
                            "榛果民宿"
                        ]
                    },
                    {
                        "name": "周边游",
                        "options": [
                            "全部",
                            "景点"
                        ]
                    },
                    {
                        "name": "丽人",
                        "options": [
                            "全部",
                            "景点"
                        ]
                    },
                    {
                        "name": "结婚",
                        "options": [
                            "全部",
                            "景点"
                        ]
                    },
                    {
                        "name": "家装",
                        "options": [
                            "全部",
                            "景点"
                        ]
                    }, {
                        "name": "榛果民宿"
                    }]
            }
        },
        computed: {
            categoryFilter() {
                return this.$store.state.search.searchCategory.key;
            }
        },
        watch: {
            categoryFilter(value) {
                console.log(this.$store.state.search.searchCategory.data)
            }
        }
    }
</script>

<style lang="scss">

    .s-wrapper {
        padding-top: 10px;

        .nav {
            margin: 10px 0;
        }

        .link-style {
            .el-breadcrumb__inner {

                cursor: pointer;
                font-size: 12px;
                color: #222;
                font-weight: 400;

                &:hover {
                    color: #13D1BE;
                }
            }

            .el-breadcrumb__separator {
                color: #222;
                font-size: 7px;
            }
        }

        .s-content {
            margin-top: 10px;

            .left-content {
                background: #FFF;
                border: 1px solid #E5E5E5;
                border-radius: 4px;
            }
        }

        .produce-wrapper {
            background-color: #fff;
            margin-top: 10px;
            border: 1px solid #E5E5E5;
            border-radius: 4px;
        }

        .g-y-l-w {
            background-color: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
        }
    }

</style>
