<template>
    <div class="pop-wrapper">
        <el-row class="filter">
            <el-col :span="3">
                <el-col :span="12" class="title">
                    {{title}}
                </el-col>
                <el-col :span="12">
                    <span class="tag" :class="{'tag-select': selectedAll}"
                          @click="choose('all', 'all')">
                        全部
                    </span>
                </el-col>
            </el-col>
            <el-col :span="21" class="category-col">
                <el-col v-for="category in categories" :span="4" :key="category.name"
                        class="category-wrapper">
                    <span v-if="category.options && category.options.length >0"
                          class="tag" :class="{'tag-select': category.name === selectedCategory}"
                          @mouseenter="changeShowCategory(category, $event)"
                          @mouseleave="clearPop"
                    >
                        <template v-if="category.name === selectedCategory && selectedItem!=='全部'">
                            {{selectedItem}}
                        </template>
                        <template v-else>
                            {{category.name}}
                        </template>
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <span v-else
                          class="tag" :class="{'tag-select': category.name === selectedCategory}"
                          @click="choose(category.name, '全部')"
                    >
                            {{category.name}}
                    </span>
                </el-col>
            </el-col>
        </el-row>

        <div class="m-dialog" v-if="showCategory" :style="{left: popLeft, top: popTop}"
             @mouseenter="enterPop"
             @mouseleave="clearPop"
        >
            <div class="options">
                <el-row>
                    <h3>{{showCategory.name}}</h3>
                </el-row>
                <el-row>
                    <el-col :span="6" v-for="option in showCategory.options" :key="option">
                        <span class="tag"
                              :class="{'tag-select': showCategory.name === selectedCategory && option === selectedItem}"
                              @click="choose(showCategory.name, option)">{{ option}}</span>
                    </el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "popOverCategory",
        props: ["categories", "title"],
        data() {
            return {
                selected: "",
                selectedDetail: "",
                showCategory: null,
                selectedCategory: "all",
                selectedItem: "all",
                popLeft: 0,
                popTop: 0
            }
        },
        computed: {
            selectedAll() {
                return this.selectedCategory === "all" && this.selectedItem === "all";
            }
        },
        methods: {
            changeShowCategory(category, e) {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    if (!category.options || category.options.length <= 0) {
                        return;
                    }
                    this.popTop = e.target.offsetTop + e.target.offsetHeight + 20 + "px";
                    this.popLeft = e.target.offsetLeft + 20 + "px";
                    this.showCategory = category;
                }, 300);
            },
            choose(category, item) {
                this.selectedCategory = category;
                this.selectedItem = item;
                this.$store.commit('search/addSearch', {search: {name: this.title, category, item}});
                this.showCategory = null;
            },
            clearPop() {
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.showCategory = null;
                }, 300)
            },
            enterPop() {
                clearTimeout(this.timer);
            }
        }
    }
</script>

<style lang="scss">
    @import "@/assets/css/common.scss";

    .pop-wrapper {
        padding: 15px 20px 0;
        position: relative;

        .tag {
            display: inline-block;
            padding: 0 10px;
            height: 22px;
            line-height: 22px;
            color: #666666;
            cursor: pointer;
            font-size: 14px;

        }

        .tag-select {
            background-color: #13D1BE;
            color: #ffffff;
            border-radius: 10px;
        }

        &:not(:last-of-type) .category-col {
            border-bottom: 1px solid #E5E5E5;
        }

        .filter {
            .title {
                color: #333;
                font-size: 14px;
            }

            .category-col {
                padding-bottom: 10px;

                .category-wrapper {
                    height: 28px;
                }
            }

        }

        .m-dialog {
            z-index: 6;
            background-color: #fff;
        }

        .options {
            h3 {
                color: #CCCCCC;
                font-size: 16px;
                margin-bottom: 10px;
                font-weight: 300;
            }

            box-sizing: border-box;
            width: 510px;
            padding: 19px 15px 9px;

            .tag {
                font-size: 12px;
            }
        }
    }
</style>
