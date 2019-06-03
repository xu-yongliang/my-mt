<template>
    <div class="cardContainer">
        <dl :style="{backgroundImage: backgroundImage}">
            <dt>{{title}}</dt>
            <dd v-for="(category, idx) in categories" :key="category" :class="{active: active===idx}"
                @mouseenter="enterCategory(idx)">
                {{category}}
            </dd>
        </dl>
        <el-row class="c-c-w">
            <card-content-container :renderType="renderType" :items="items"/>
        </el-row>
    </div>
</template>

<script>

    import CardContentContainer from "@/components/index/cardContentContainer";

    export default {
        name: "cardContainer",
        components: {CardContentContainer},
        methods: {
            enterCategory(idx) {
                this.active = idx;
            }
        },
        props: ["renderType", "title", "categories", "backgroundImage", "items"],
        data() {
            return {
                active: 0
            }
        }
    }
</script>

<style lang="scss">
    .cardContainer {
        width: 100%;
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        dl {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            display: flex;
            height: 44px;

            dt, dd {
                color: #ffffff;
                height: 44px;
                line-height: 44px;
                padding: 0 5px;
            }

            dt {
                font-size: 18px;
                margin: 0 10px 0 13px;
                font-family: MFShangHei-Regular;
            }

            dd {
                font-size: 14px;
                font-weight: 400;
                cursor: pointer;
                position: relative;

                &.active::after {
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    content: " ";
                    width: 2px;
                    height: 0;
                    margin-left: -6px;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-bottom: 7px solid #ffffff;
                }
            }
        }

        .cards {
            padding: 11px 10px 10px 10px;
            background-color: #ffffff;

            .el-col {
                height: 314px;
            }
        }
    }
</style>
