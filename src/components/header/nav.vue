<template>
    <div class="m-nav">
        <ul>
            <li class="list">
                <router-link to="/">我的美团</router-link>
                <dl>
                    <dd>
                        <router-link :to="{path: '/'}">我的订单</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{path: '/'}">我的收藏</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{path: '/'}">抵用券</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{path: '/'}">账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li>
                <router-link to="/">手机APP</router-link>
            </li>
            <li class="list bd">
                商家中心
                <dl>
                    <dd>
                        <router-link :to="{path: '/'}">登录商家中心</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{path: '/'}">美团智能收银</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{path: '/'}">我想合作</router-link>
                    </dd>
                    <dd>
                        <router-link :to="{path: '/'}">账户设置</router-link>
                    </dd>
                </dl>
            </li>
            <li class="site">
                网站导航
                <div class="subContainer">
                    <dl class="hotel">
                        <dt>酒店旅游</dt>
                        <dd>
                            <router-link :to="{path: '/'}">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">抵用券</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">账户设置</router-link>
                        </dd>
                    </dl>
                    <dl class="food">
                        <dt>吃美食</dt>
                        <dd>
                            <router-link :to="{path: '/'}">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">抵用券</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">账户设置</router-link>
                        </dd>
                    </dl>
                    <dl class="movie">
                        <dt>看电影</dt>
                        <dd>
                            <router-link :to="{path: '/'}">我的订单</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">我的收藏</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">抵用券</router-link>
                        </dd>
                        <dd>
                            <router-link :to="{path: '/'}">账户设置</router-link>
                        </dd>
                    </dl>
                    <dl class="app">
                        <dt>手机应用</dt>
                        <dd>
                            <!-- <a href="#"> -->
                            <img class="appicon"
                                 src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app"
                                 alt="美团app">
                            <!-- </a> -->
                        </dd>
                        <dd>
                            <!-- <a href="#"> -->
                            <img class="appicon"
                                 src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app"
                                 alt="美团app">
                            <!-- </a> -->
                        </dd>
                        <dd>
                            <!-- <a href="#"> -->
                            <img class="appicon"
                                 src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app"
                                 alt="美团app">
                            <!-- </a> -->
                        </dd>
                        <dd>
                            <!-- <a href="#"> -->
                            <img class="appicon"
                                 src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app"
                                 alt="美团app">
                            <!-- </a> -->
                        </dd>
                        <dd>
                            <!-- <a href="#"> -->
                            <img class="appicon"
                                 src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app"
                                 alt="美团app">
                            <!-- </a> -->
                        </dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "m-nav"
    }
</script>

<style scoped lang="scss">
    .m-nav {
        float: right;
        height: 40px;

        li {
            float: left;
            width: 78px;
            line-height: 40px;
            text-align: center;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                color: #41B883;
            }

            &.list {
                dl {
                    background: #fff;
                    display: none;
                    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, .1);
                }

                &:hover {
                    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, .1);
                    background: #fff;

                    dl {
                        display: block;
                    }
                }
            }

            &.bd {
                dl {
                    width: 140%;
                    position: relative;
                    left: -31px;
                    top: -1px;
                }
            }

            &.site {

                &:hover {
                    background-color: #fff;
                    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, .1);

                    .subContainer {
                        display: flex;
                    }
                }

                .subContainer {
                    cursor: default;
                    display: none;
                    width: 1200px;
                    box-sizing: border-box;
                    padding: 30px 36px 36px 47px;
                    position: relative;
                    left: -1200+78px;
                    background-color: #fff;
                    box-shadow: 0 3px 5px 0px rgba(0, 0, 0, .1);
                    border-top-left-radius: 4px;

                    dl {
                        margin-right: 47px;

                        dd {
                            cursor: pointer;
                        }
                    }

                    dt {
                        line-height: 20px;
                        height: 20px;
                        font-size: 14px;
                        margin-bottom: 26px;
                    }


                    .hotel {
                        width: 234px;

                        dd {
                            width: 33.33%;
                            float: left;
                        }
                    }

                    .food {
                        width: 156px;

                        dd {
                            width: 50%;
                            float: left;
                        }
                    }

                    .movie {
                        width: 90px;
                    }

                    .app {
                        width: 380px;
                        flex: 1;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-content: flex-start;

                        dt {
                            width: 100%;
                        }

                        dd {
                            margin: 0 8px;

                            img {
                                width: 60px;
                                height: 60px;
                            }
                        }
                    }

                    &::after {
                        content: "";
                        display: block;
                        clear: both;
                    }
                }
            }

        }


    }
</style>
