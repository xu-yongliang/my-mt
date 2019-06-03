<template>
    <div class="m-menu">
        <dl class="category" @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="(item) in categories" :key="item.type" @mouseenter="showDetail(item.items)">
                <i :class="item.type"></i>
                <router-link v-for="(citem, idx) in item.items" :key="citem.title"
                             :to="{name: 'search', params: {name: citem.title}}">
                    <span v-if="idx!==0">/</span> {{citem.title}}
                </router-link>
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-show="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <div class="category-detail" v-for="(detail, idx) in curDetail" :key="idx">
                <h4>{{detail.title}}</h4>
                <span v-for="category in detail.items"><router-link :to="{name: 'search', params: {name: category}}">
                    {{category}}
                </router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "m-menu",
        data() {
            return {
                curDetail: null,
                categories: [{
                    "type": "food",
                    "name": "美食",
                    "items": [
                        {
                            "title": "美食",
                            "items": ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
                        },
                        {
                            "title": "外卖",
                            "items": ["美团外卖"]
                        }
                    ]
                }, {
                    "type": "takeout",
                    "name": "外卖",
                    "items": [{
                        "title": "外卖",
                        "items": ["美团外卖"]
                    }]
                }, {
                    "type": "hotel",
                    "name": "酒店",
                    "items": [{
                        "title": "酒店星级",
                        "items": ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
                    }]
                }]
            }
        },
        methods: {
            showDetail(data) {
                this.curDetail = data;
            },
            menuLeave() {
                this.timer = setTimeout(() => {
                    this.curDetail = null
                }, 200);
            },
            detailEnter() {
                clearTimeout(this.timer);
            },
            detailLeave() {
                this.curDetail = null
            }
        }
    }
</script>

<style lang="scss">
    .m-menu {
        margin-top: -50px;
        height: 475px;
        background: rgba(2, 181, 157, .85);
        background: -webkit-linear-gradient(-90deg, rgba(2, 181, 157, .85) 2%, rgba(22, 146, 183, .85) 100%);
        color: #ffffff;
        position: relative;

        .category {
            dt {
                width: 100%;
                height: 50px;
                margin-left: 15px;
                line-height: 50px;
                font-size: 16px;
            }

            dd {
                position: relative;

                &:first-of-type {
                    margin-top: 10px;
                }

                &:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                }

                padding: 2px 15px;

                > i {
                    font-family: 'meituan';
                    font-size: 14px;
                    font-style: normal;
                    opacity: 0.3;
                    margin-right: 11px;

                    &.food {
                        &:before {
                            content: "\e622";
                        }
                    }

                    &.takeout {
                        &:before {
                            content: "\e630";
                        }
                    }

                    &.hotel {
                        &:before {
                            content: "\e62a";
                        }
                    }

                    &.homestay {
                        &:before {
                            content: "\e631";
                        }
                    }

                    &.movie {
                        &:before {
                            content: "\e62c";
                            position: relative;
                            left: -2px;
                        }
                    }

                    &.airport {
                        &:before {
                            content: "\e632";
                        }
                    }

                    &.ktv {
                        &:before {
                            content: "\e627";
                        }
                    }

                    &.life {
                        &:before {
                            content: "\e633";
                        }
                    }

                    &.hair {
                        &:before {
                            content: "\e626";
                            transform: scale(0.7);
                        }
                    }

                    &.marry {
                        &:before {
                            content: "\e629";
                        }
                    }

                    &.offspring {
                        &:before {
                            content: "\e623";
                        }
                    }

                    &.sport {
                        &:before {
                            content: "\e62b";
                        }
                    }

                    &.furniture {
                        &:before {
                            content: "\e625";
                        }
                    }

                    &.study {
                        &:before {
                            content: "\e624";
                        }
                    }

                    &.health {
                        &:before {
                            content: "\e628";
                        }
                    }

                    &.bar {
                        &:before {
                            content: "\e621";
                        }
                    }
                }

                .arrow {
                    width: 4px;
                    height: 4px;
                    border-bottom: 1px solid #fff;
                    border-right: 1px solid #fff;
                    transform: rotate(-45deg);
                    display: block;
                    position: absolute;
                    right: 15px;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                }

                > a {
                    font-size: 13px;
                    color: #FFF;
                }
            }
        }

        .detail {
            box-sizing: border-box;
            position: absolute;
            z-index: 66;
            width: 460px;
            height: 416px;
            left: 100%;
            top: 50+10px;
            color: #000;
            background-color: #fff;
            padding: 0 30px;

            .category-detail {
                h4 {
                    font-weight: bold;
                    font-size: 16px;
                    padding-bottom: 10px;
                    margin-top: 24px;
                    border-bottom: 1px solid #E5E5E5;
                }

                span {
                    color: #999999;
                    font-size: 12px;
                    margin: 10px 16px 0 0;
                    display: inline-block;
                }
            }
        }

    }
</style>
