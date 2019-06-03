<template>
    <div class="search-bar">
        <el-row>
            <el-col :span="3" class="m-logo">
                <router-link to="/">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团"/>
                </router-link>
            </el-col>
            <el-col :span="15" class="search-content">
                <div class="search-input">
                    <el-input placeholder="搜索商家或地点" v-model="searchWord" @focus="changeFocus" @blur="changeFocus">
                        <el-button class="search-btn" slot="append" type="primary" icon="el-icon-search"></el-button>
                    </el-input>
                    <dl class="hot-search" v-show="ifInputFocus && !searchWord">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, idx) in hotSearch"
                            :key="idx">
                            <router-link :to="{name:'good', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="search-sug" v-show="ifInputFocus && searchWord">
                        <dd v-for="(item, idx) in hotSearch"
                            :key="idx">
                            <router-link :to="{name:'good', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link to="/"> 北京欢乐谷</router-link>
                    <router-link to="/"> 尚隐·泉都市生活馆</router-link>
                    <router-link to="/">故宫珍宝馆</router-link>
                    <router-link to="/">北京连升商务酒店</router-link>
                    <router-link to="/"></router-link>
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "searchBar",
        data() {
            return {
                searchWord: "",
                hotSearch: [
                    "故宫博物院", "北京欢乐谷", "故宫珍宝馆", "尚隐·泉都市生活馆", "八达岭长城", "北京连升商务酒店"
                ],
                searchSug: [],
                ifInputFocus: false,
            }
        },
        methods: {
            changeFocus() {
                this.ifInputFocus = !this.ifInputFocus;
            }

        }
    }
</script>

<style lang="scss">
    .search-bar {
        width: 1190px;
        box-sizing: border-box;
        padding-bottom: 35px;
        background-color: #fff;
        margin: auto;

        .m-logo {
            padding: 28px 60px 40px 0;
            min-width: 280px;
            height: 122px;

            img {
                width: 126px;
                height: 46px;
            }
        }

        .search-content {
            padding-top: 28px;


            .search-input {
                width: 550px;
                height: 40px;
                position: relative;
                z-index: 1;

                input {
                    height: 40px;
                    border: 1px solid #13D1BE;
                }

                .search-btn {
                    color: #ffffff;

                    height: 40px;
                    font-size: 16px;
                    border: 1px solid #13D1BE;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    background-color: #13D1BE;
                    width: 88px;
                }

                .hot-search {
                    position: absolute;
                    background-color: #fff;
                    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
                    padding: 10px;
                    width: 80%;

                    dt {
                        color: #999;
                        font-weight: bold;
                        font-size: 12px;
                        padding-bottom: 5px;
                    }

                    dd {
                        display: inline-block;
                        margin: 0 10px 3px 0;
                    }
                }

                .search-sug {
                    position: absolute;
                    background-color: #fff;
                    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
                    width: 80%;

                    dd {
                        padding-left: 10px;
                        height: 25px;
                        line-height: 25px;

                        &:hover {
                            cursor: pointer;
                            a {
                                color: #13D1BE;
                            }

                            background-color: #F8F8F8;
                        }
                    }
                }
            }

            .suggest {
                padding: 8px 0 0 12px;

                > a {
                    padding: 0 10px 3px 0;
                }

            }
        }
    }
</style>
