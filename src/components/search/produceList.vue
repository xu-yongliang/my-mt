<template>
    <div class="produce-list">
        <el-row class="sort-list">
            <el-col :span="3" class="sort-option"
                    v-for="option in sortList" :key="option.name"
            >
                <span v-if="!option.sorted" :class="{active: sortName === option.name}"
                      @click="changeSort(option)"
                >{{option.title}}</span>
                <span v-else :class="{active: sortName === option.name}"
                      @click="changeSort(option)"
                >{{option.title + (sortName === option.name? option.sorted : '排序')}}
                    <i class="el-icon-caret-top arrow"
                       :class="{active:sortName === option.name && option.sorted === '最低'}"></i>
                    <i class="el-icon-caret-bottom arrow"
                       :class="{active: sortName === option.name && option.sorted === '最高'}"></i>
                </span>
            </el-col>
        </el-row>
        <el-row class="produce-content">
            <div class="food-produce-wrapper"
                 v-for="(produce,idx) in produceItems"
                 :key="produce.id"
            >
                <food-produce
                        :produce="produce"
                        :idx="idx + 1"
                />
            </div>
        </el-row>
    </div>
</template>

<script>
    import FoodProduce from "@/components/search/foodProduce";

    export default {
        name: "produceList",
        components: {FoodProduce},
        data() {
            return {
                sortName: "feed",
                sortList: [
                    {
                        name: "feed",
                        title: "智能排序"
                    },
                    {
                        name: "price",
                        title: "价格",
                        sorted: "最高"
                    },
                    {
                        name: "hot",
                        title: "人气最高"
                    },
                    {
                        name: "star",
                        title: "评级最高"
                    },
                ],
                produceItems: [
                    {
                        "id": 157179427,
                        "template": "pcfood",
                        "imageUrl": "http://p1.meituan.net/w.h/deal/d19f8cb6d43951b08c075c7b8eea7551380465.jpg",
                        "title": "顺德私厨·无骨鱼专门店",
                        "address": "越秀区西湖路18一28号广百新翼商务中心10楼",
                        "lowestprice": 138,
                        "avgprice": 67,
                        "latitude": 23.123371,
                        "longitude": 113.268033,
                        "showType": "food",
                        "avgscore": 3.5,
                        "comments": 22,
                        "historyCouponCount": 857,
                        "backCateName": "粤菜",
                        "areaname": "北京路商业区",
                        "deals": [
                            {
                                "id": 50801402,
                                "title": "飞鱼双人餐，提供免费WiFi",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 138,
                                "value": 183,
                                "sales": 33,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 50895228,
                                "title": "无骨鱼6人餐，提供免费WiFi",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 298,
                                "value": 395,
                                "sales": 16,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 50801799,
                                "title": "300元饭市代金券1张",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 268,
                                "value": 300,
                                "sales": 52,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            }
                        ],
                        "posdescr": null,
                        "ct_poi": null,
                        "trace": null,
                        "landmarkDistance": null,
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 20,
                        "city": "广州",
                        "full": false
                    }
                ],
            }
        },
        methods: {
            changeSort(value) {
                if (this.sortName === value.name) {
                    if (value.sorted) {
                        if (value.sorted === '最高') {
                            value.sorted = '最低'
                        } else {
                            value.sorted = '最高'
                        }
                    }
                } else {
                    this.sortName = value.name;
                }
            }
        }
    }
</script>

<style lang="scss">
    .produce-list {
        padding: 15px 20px;
        font-weight: 400;
        font-size: 14px;
        color: #666666;

        .active {
            color: #31BBAC;
        }

        .sort-option {
            span {
                cursor: pointer;
                position: relative;

                .arrow {
                    color: #ccc;
                    position: absolute;
                    left: 100%;
                    font-size: 5px;

                    &.el-icon-caret-top {
                        top: 1px;
                    }

                    &.el-icon-caret-bottom {
                        bottom: -2px;
                    }

                    &.active {
                        color: #31BBAC;
                    }
                }
            }
        }

        .produce-content {
            margin-top: 11px;
            background-color: #fff;

            .food-produce-wrapper {
                padding: 20px 0 16px;
                border-top: 1px solid #E5E5E5;;
            }
        }
    }
</style>
