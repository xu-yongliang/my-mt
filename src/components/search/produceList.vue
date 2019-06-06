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
                        "id": 1041932,
                        "template": "pcfood",
                        "imageUrl": "https://p0.meituan.net/wedding/e93c46429715c5331b7e96e0738cfb50687734.jpg",
                        "title": "瑞思英语（崇文门新世界校区）",
                        "address": "东城区东打磨厂街7号宝鼎中心A座（新世界新活馆女子百货3层盒马鲜生楼上）",
                        "lowestprice": 1,
                        "avgprice": 21040,
                        "latitude": 39.899516,
                        "longitude": 116.413863,
                        "showType": "children",
                        "avgscore": 4.5,
                        "comments": 0,
                        "historyCouponCount": 7,
                        "backCateName": "学科英语",
                        "areaname": "崇文门新世界",
                        "tag": [],
                        "cate": [
                            3,
                            20630,
                            20426,
                            20007
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "5元/券，3-10岁儿童英语试听课2节"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 49444942,
                                "title": "3-10岁儿童英语试听课2节",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 5.9,
                                "value": 1000,
                                "sales": 108,
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
                        "landmarkDistance": "距故宫2.5km",
                        "hasAds": true,
                        "adsClickUrl": "https://mlog.dianping.com/api/cpv/billing?ad_cj=0j3pgtdl0yw811dERZIYlUNyhfYgtUNUnr1h3IfvwEgDLhU3j3sOm411PoxxmVi5PII7HesLVYB8REG2Wm1vpWu5IjzyxzMa5Ws6uVx6yebhb8fDbIyo_mXPLn7lwqwzDYg3ixjAPyhnFo-v_aZn-7hmHHSzisPQq2z0Kq2nuLIL8vRXNokpO9Oyl3lz1tK9eTXQopwKVKcrVKjJKy0rl86vhDgJpQN7BQ9EbwKT-UuE9kclKnGPzsQXXd3gkS-M8t2eRWER8iRzeIBnje0xO3eUeNj4ZN4EJv5-ZApeoiL-dPSOucqDnYvh6nSeDcx-V7mOzzgsdDIidgGiwpl1Qg&sver=2&ad_v=1&ad_ci=0j3pgtd3D5Bs_0nMIdF4iQHTwAC_vbJ9UwJEi5UqkCYJy-LX4KgggZYavuzhYYEd9E5XgjvSSgXj2hw7Ne4IpJnTe6zBJcOAji5GBc-ORg&act=2",
                        "adsShowUrl": "https://mlog.dianping.com/api/cpv/action?ad_cj=0j3pgtdl0yw811dERZIYlUNyhfYgtUNUnr1h3IfvwEgDLhU3j3sOm411PoxxmVi5PII7HesLVYB8REG2Wm1vpWu5IjzyxzMa5Ws6uVx6yebhb8fDbIyo_mXPLn7lwqwzDYg3ixjAPyhnFo-v_aZn-7hmHHSzisPQq2z0Kq2nuLIL8vRXNokpO9Oyl3lz1tK9eTXQopwKVKcrVKjJKy0rl86vhDgJpQN7BQ9EbwKT-UuE9kclKnGPzsQXXd3gkS-M8t2eRWER8iRzeIBnje0xO3eUeNj4ZN4EJv5-ZApeoiL-dPSOucqDnYvh6nSeDcx-V7mOzzgsdDIidgGiwpl1Qg&sver=2&ad_v=1&ad_ci=0j3pgtd3D5Bs_0nMIdF4iQHTwAC_vbJ9UwJEi5UqkCYJy-LX4KgggZYavuzhYYEd9E5XgjvSSgXj2hw7Ne4IpJnTe6zBJcOAji5GBc-ORg&act=3",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 271772,
                        "template": "pcfood",
                        "imageUrl": "http://p0.meituan.net/w.h/travel/83544ca4b38bbe0f7644982c3528defd117921.jpg",
                        "title": "故宫博物院（故宫）",
                        "address": "东城区景山前街4号",
                        "lowestprice": 5,
                        "avgprice": 58,
                        "latitude": 39.913905,
                        "longitude": 116.397319,
                        "showType": "travel",
                        "avgscore": 4.8,
                        "comments": 139351,
                        "historyCouponCount": 220886,
                        "backCateName": "文物古迹",
                        "areaname": "东城区",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*送故宫文创-含珍宝馆98元，故宫博物院（故宫）、八达岭长城、颐和园等纯玩1日跟团游*送珍宝馆，多套餐选择69元，天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*含珍宝馆 送文创礼物178元，故宫博物院（故宫）、颐和园、北京大学等纯玩1日跟团游*五环内接0购物0自费88元，天安门广场、故宫博物院（故宫）、八达岭长城等3日跟团游*惠享纯玩 景点全覆盖699元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 43271255,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*送故宫文创-含珍宝馆",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 98,
                                "value": 98,
                                "sales": 25469,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 36062245,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩1日跟团游*送珍宝馆，多套餐选择",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 69,
                                "value": 119,
                                "sales": 10572,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 27839075,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*含珍宝馆 送文创礼物",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 178,
                                "value": 208,
                                "sales": 9639,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 50273146,
                                "title": "故宫上午场门票 成人票+人工讲解+无线耳麦",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 89,
                                "value": 99,
                                "sales": 10014,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 46344833,
                                "title": "故宫博物院（故宫）、颐和园、北京大学等纯玩1日跟团游*五环内接0购物0自费",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 88,
                                "value": 128,
                                "sales": 5304,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 44509742,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等3日跟团游*惠享纯玩 景点全覆盖",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 699,
                                "value": 999,
                                "sales": 4530,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 48550884,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城纯玩1日跟团游*0购物游皇宫登好汉坡",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 168,
                                "value": 268,
                                "sales": 4336,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 41569721,
                                "title": "八达岭长城、故宫博物院（故宫）、颐和园等纯玩1日跟团游*多套餐+多集合点供选",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 88,
                                "value": 138,
                                "sales": 4561,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 25053702,
                                "title": "颐和园、八达岭长城、北京天安门等2日跟团游*门票全含尽览首都全景",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 299,
                                "value": 489,
                                "sales": 3554,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 50279207,
                                "title": "故宫下午场门票 - 成人票+人工讲解+无线耳麦",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 89,
                                "value": 99,
                                "sales": 5239,
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
                        "landmarkDistance": "距故宫<500m",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 5613108,
                        "template": "pcfood",
                        "imageUrl": "http://p0.meituan.net/w.h/travel/641986706db594617dfc78eb96178d5852923.jpg",
                        "title": "北海公园",
                        "address": "西城区文津街1号",
                        "lowestprice": 1,
                        "avgprice": 14,
                        "latitude": 39.926855,
                        "longitude": 116.388975,
                        "showType": "travel",
                        "avgscore": 4.7,
                        "comments": 3799,
                        "historyCouponCount": 32327,
                        "backCateName": "文物古迹",
                        "areaname": "西城区",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "故宫博物院（故宫）、故宫珍宝馆、天安门广场等纯玩1日跟团游*景山打卡故宫全景1元，【故宫+八达岭长城+北海公园+天坛+颐和园等5日跟团游】含升国旗、毛主 席纪念堂、纯玩无购物品质优选760元，【八达岭长城+故宫+颐和园+北海公园+天坛等5日跟团游】豪华酒店、优质导游、纯玩无购物、含升国旗980元，故宫博物院（故宫）、八达岭长城、颐和园等3日跟团游*超低价含1店景点覆盖499元，天安门广场、北京毛主席纪念堂、故宫博物院（故宫）等纯玩3日跟团游*品牌连锁酒，天天发团620元，北海公园成人门票10元，奥林匹克森林公园、清华大学、颐和园等纯玩3日跟团游*纯玩无购物，每日发团580元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 45305366,
                                "title": "北海公园成人门票",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 10,
                                "value": 10,
                                "sales": 25905,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 38786179,
                                "title": "【故宫+八达岭长城+北海公园+天坛+颐和园等5日跟团游】含升国旗、毛主 席纪念堂、纯玩无购物品质优选",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 760,
                                "value": 1980,
                                "sales": 1307,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 47992071,
                                "title": "北海公园（不含门票）大师讲解露娜公益微信版",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 5,
                                "value": 20,
                                "sales": 199,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 48838455,
                                "title": "故宫博物院（故宫）、故宫珍宝馆、天安门广场等纯玩1日跟团游*景山打卡故宫全景",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 1,
                                "value": 2,
                                "sales": 2263,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 37440474,
                                "title": "奥林匹克森林公园、清华大学、颐和园等纯玩3日跟团游*纯玩无购物，每日发团",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 580,
                                "value": 1240,
                                "sales": 688,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 38734326,
                                "title": "【八达岭长城+故宫+颐和园+北海公园+天坛等5日跟团游】豪华酒店、优质导游、纯玩无购物、含升国旗",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 980,
                                "value": 2350,
                                "sales": 615,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 51542064,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等3日跟团游*超低价含1店景点覆盖",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 499,
                                "value": 799,
                                "sales": 305,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 51089207,
                                "title": "天安门广场、北京毛主席纪念堂、故宫博物院（故宫）等纯玩3日跟团游*品牌连锁酒，天天发团",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 620,
                                "value": 1380,
                                "sales": 47,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 48980558,
                                "title": "【颐和园+故宫+八达岭长城+天安门+王府井4日跟团游】四大定制美食、观庄严升国旗仪式、全程纯玩不进店",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 928,
                                "value": 1298,
                                "sales": 27,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 43457791,
                                "title": "烟袋斜街、后海、长陵等无自费3日跟团游*早发车的高端3日游",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 418,
                                "value": 568,
                                "sales": 27,
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
                        "landmarkDistance": "距故宫1.2km",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 359037,
                        "template": "pcfood",
                        "imageUrl": "https://p0.meituan.net/wedding/00d7104a1c2e3321f5e30309d9f1fe02313403.jpg",
                        "title": "EF英孚教育青少儿英语（王府井中心）",
                        "address": "东城区王府井东街8号澳门中心商场2层",
                        "lowestprice": 1,
                        "avgprice": 17858,
                        "latitude": 39.915229,
                        "longitude": 116.41344,
                        "showType": "children",
                        "avgscore": 5,
                        "comments": 0,
                        "historyCouponCount": 14,
                        "backCateName": "兴趣英语",
                        "areaname": "王府井/东单",
                        "tag": [],
                        "cate": [
                            3,
                            20630,
                            20426,
                            20007
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p0.meituan.net/groupop/348758503e87285267788a5d5b64d777779.png",
                                "message": "100代1000元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 51472264,
                                "title": "代金券",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 100,
                                "value": 1000,
                                "sales": 21,
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
                        "landmarkDistance": "距故宫1.4km",
                        "hasAds": true,
                        "adsClickUrl": "https://mlog.dianping.com/api/cpv/billing?ad_cj=WFVtJFLChcn7FH9mXtJg6xwck1t0Zh-4rZB6g0MwzU_VztqGB9htmQUSXknPvB4nLDGhVFzzBf8YBXze-TWNQthpucZGGcaCEXaTBOJe7Kx9ttqV6bucumh7xnUQYPk6g9d2vvbJCOP_FnbP9RX9jKp-khKKKbvjOfsl2Em411xyMGiwmm9k36UKLKl-xP20PfZ60VzcE0rVQroPb4CSvDJxSl5Jpmp4TSDr0ul8PfvdX1N4RcEwucr4PZjMhm8maHnwLsI8lZ201lmSn0NBM0atVaHYjSg5-_0QQsGf1qP2oN3wfe2k9O7FcdjlFMqGYDHF5oK6bSBT7TlcfNvs&sver=2&ad_v=1&ad_ci=WFVtJFLQWXWrPGHmPZFw953F4YfXl8crWQq548B0iSbKK8ks5Y685B-ZYCOaEOijYsrLhaO-iFX7wmJ9VPaTGfPIUuSN4IcvPRaGyX8CkSgp&act=2",
                        "adsShowUrl": "https://mlog.dianping.com/api/cpv/action?ad_cj=WFVtJFLChcn7FH9mXtJg6xwck1t0Zh-4rZB6g0MwzU_VztqGB9htmQUSXknPvB4nLDGhVFzzBf8YBXze-TWNQthpucZGGcaCEXaTBOJe7Kx9ttqV6bucumh7xnUQYPk6g9d2vvbJCOP_FnbP9RX9jKp-khKKKbvjOfsl2Em411xyMGiwmm9k36UKLKl-xP20PfZ60VzcE0rVQroPb4CSvDJxSl5Jpmp4TSDr0ul8PfvdX1N4RcEwucr4PZjMhm8maHnwLsI8lZ201lmSn0NBM0atVaHYjSg5-_0QQsGf1qP2oN3wfe2k9O7FcdjlFMqGYDHF5oK6bSBT7TlcfNvs&sver=2&ad_v=1&ad_ci=WFVtJFLQWXWrPGHmPZFw953F4YfXl8crWQq548B0iSbKK8ks5Y685B-ZYCOaEOijYsrLhaO-iFX7wmJ9VPaTGfPIUuSN4IcvPRaGyX8CkSgp&act=3",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 276514,
                        "template": "pcfood",
                        "imageUrl": "http://p1.meituan.net/w.h/hotel/8163b1faafb316d5bb6a1ad27922ff27582449.png",
                        "title": "天安门广场",
                        "address": "东城区东长安街16号",
                        "lowestprice": 160,
                        "avgprice": 0,
                        "latitude": 39.903745,
                        "longitude": 116.397832,
                        "showType": "travel",
                        "avgscore": 4.2,
                        "comments": 115,
                        "historyCouponCount": 100829,
                        "backCateName": "景点",
                        "areaname": "天安门广场",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*送故宫文创-含珍宝馆98元，故宫博物院（故宫）、八达岭长城、颐和园等纯玩1日跟团游*送珍宝馆，多套餐选择69元，天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*含珍宝馆 送文创礼物178元，故宫博物院（故宫）、八达岭长城、颐和园等纯玩3日跟团游*0购物景点全免费接送559元，故宫博物院（故宫）、故宫珍宝馆、天安门广场等纯玩1日跟团游*景山打卡故宫全景1元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 43271255,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*送故宫文创-含珍宝馆",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 98,
                                "value": 98,
                                "sales": 25469,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 36062245,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩1日跟团游*送珍宝馆，多套餐选择",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 69,
                                "value": 119,
                                "sales": 10572,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 51367158,
                                "title": "八达岭长城、定陵、鸟巢等纯玩1日跟团游*长城搭配多套餐任选",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 98,
                                "value": 198,
                                "sales": 3169,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 27839075,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等纯玩1日跟团游*含珍宝馆 送文创礼物",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 178,
                                "value": 208,
                                "sales": 9639,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 44509742,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等3日跟团游*惠享纯玩 景点全覆盖",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 699,
                                "value": 999,
                                "sales": 4530,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 48550884,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城纯玩1日跟团游*0购物游皇宫登好汉坡",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 168,
                                "value": 268,
                                "sales": 4336,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 41569721,
                                "title": "八达岭长城、故宫博物院（故宫）、颐和园等纯玩1日跟团游*多套餐+多集合点供选",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 88,
                                "value": 138,
                                "sales": 4561,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 46189784,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩3日跟团游*0购物景点全免费接送",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 559,
                                "value": 999,
                                "sales": 2409,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 48838455,
                                "title": "故宫博物院（故宫）、故宫珍宝馆、天安门广场等纯玩1日跟团游*景山打卡故宫全景",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 1,
                                "value": 2,
                                "sales": 2263,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 41763835,
                                "title": "故宫博物院（故宫）、颐和园、圆明园等纯玩1日跟团游*赠圆明园+珍宝馆门票",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 158,
                                "value": 258,
                                "sales": 1870,
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
                        "landmarkDistance": "距故宫1.6km",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 87631571,
                        "template": "pcfood",
                        "imageUrl": "http://p0.meituan.net/w.h/hotel/a41a606c6539be3e09dc71056f7d8462611203.jpg",
                        "title": "北京天安门",
                        "address": "东城区西长安街与广场西侧路交口",
                        "lowestprice": 3,
                        "avgprice": 0,
                        "latitude": 39.90882,
                        "longitude": 116.397483,
                        "showType": "travel",
                        "avgscore": 4,
                        "comments": 51,
                        "historyCouponCount": 9053,
                        "backCateName": "景点",
                        "areaname": "天安门广场",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩3日跟团游*真正一价全含放心游899元，故宫博物院（故宫）、八达岭长城、颐和园等3日跟团游*京腔京味，端午特惠498元，颐和园、故宫博物院（故宫）、八达岭长城等纯玩3日跟团游*纯玩不进店一价全含658元，故宫博物院（故宫）、北京杜莎夫人蜡像馆、北京天安门纯玩1日跟团游*经典线路，新玩法235元，颐和园、八达岭长城、北京天安门等2日跟团游*门票全含尽览首都全景299元，天安门广场及城楼大师讲解刘超完整微信版3元，北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*纯玩O自费，榜单推荐988元，北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*畅游帝都、无购物646元，颐和园、北京天安门、北京毛主席纪念堂等2日跟团游*享历史名都的文化底蕴259元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 25053702,
                                "title": "颐和园、八达岭长城、北京天安门等2日跟团游*门票全含尽览首都全景",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 299,
                                "value": 489,
                                "sales": 3554,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 46788829,
                                "title": "天安门广场及城楼大师讲解刘超完整微信版",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 3,
                                "value": 20,
                                "sales": 533,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 44334809,
                                "title": "北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*畅游帝都、无购物。",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 646,
                                "value": 999,
                                "sales": 258,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 46882205,
                                "title": "颐和园、北京天安门、北京毛主席纪念堂等2日跟团游*享历史名都的文化底蕴",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 259,
                                "value": 459,
                                "sales": 164,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 43979975,
                                "title": "朝阳剧场、清华大学、水立方等纯玩3日跟团游*京游三日，精华尽览",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 680,
                                "value": 1190,
                                "sales": 19,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 50689856,
                                "title": "颐和园、故宫博物院（故宫）、八达岭长城等纯玩3日跟团游*纯玩不进店一价全含",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 658,
                                "value": 980,
                                "sales": 28,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 44128455,
                                "title": "北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*纯玩O自费，榜单推荐",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 988,
                                "value": 1058,
                                "sales": 470,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 51703064,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩3日跟团游*真正一价全含放心游",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 899,
                                "value": 1099,
                                "sales": 102,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 43716348,
                                "title": "故宫博物院（故宫）、北京杜莎夫人蜡像馆、北京天安门纯玩1日跟团游*经典线路，新玩法",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 235,
                                "value": 238,
                                "sales": 19,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 47253002,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等3日跟团游*京腔京味，端午特惠",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 498,
                                "value": 698,
                                "sales": 31,
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
                        "landmarkDistance": "距故宫1.0km",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 81700006,
                        "template": "pcfood",
                        "imageUrl": "https://p0.meituan.net/180.180/wedding/c1e0a74a715f74ba6fc9e580db98b8e738529.jpg",
                        "title": "紫洁医疗美容",
                        "address": "东城区灯市口大街25号（近地铁5号线灯市口站A口，景山小学隔壁）",
                        "lowestprice": 18,
                        "avgprice": 853,
                        "latitude": 39.918864,
                        "longitude": 116.416203,
                        "showType": "beauty",
                        "avgscore": 4,
                        "comments": 308,
                        "historyCouponCount": 256,
                        "backCateName": "医学美容",
                        "areaname": "王府井/东单",
                        "tag": [],
                        "cate": [
                            22,
                            20630,
                            20426
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "2019元/券，切开双眼皮"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 51460302,
                                "title": "切开双眼皮",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 2019,
                                "value": 4800,
                                "sales": 0,
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
                        "landmarkDistance": "距故宫1.6km",
                        "hasAds": true,
                        "adsClickUrl": "https://mlog.dianping.com/api/cpv/billing?ad_cj=SfcpzJHgwPds1byqVVJDSmGHMgqSy2O8yROtqjenx1ToGamx8dG024xu7T6Zdk3jLqx7FJPuF5rKTecWrW8amO3Qq_WTexQEwhcD7QpSHy52bQSBwr798SyJuyVJb8fsgkmjx4BptM5bBGjfZ9PG3wep1JP936gB6k9nBNP_IrziB-0v6TqVh8ihSxM9f5clhZ0Q2bXZfg7lNNp5WVcSnnP49oONFCS4yrg4p3QLAeRxCEQ35kAB1eXIWIQpk_ixNdIo4EQbvi46ptrrV0ty6pbjRzaU0qzqX-Ni99q3AwCMCbURTo_S2cBTumBVlmwsiOaYmubvjWjSo25Mf0qyZ00&sver=2&ad_v=1&ad_ci=SfcpzJHyHEs8_eLaKhFTSuOZ-qUObfzTOGKAaLZ_oC1crq1031mme0iDDoyLZ_rQUa_vcUnHTo0aGW1g1taW36zj3UZRZdjZw6YnQDCalz5V&act=2",
                        "adsShowUrl": "https://mlog.dianping.com/api/cpv/action?ad_cj=SfcpzJHgwPds1byqVVJDSmGHMgqSy2O8yROtqjenx1ToGamx8dG024xu7T6Zdk3jLqx7FJPuF5rKTecWrW8amO3Qq_WTexQEwhcD7QpSHy52bQSBwr798SyJuyVJb8fsgkmjx4BptM5bBGjfZ9PG3wep1JP936gB6k9nBNP_IrziB-0v6TqVh8ihSxM9f5clhZ0Q2bXZfg7lNNp5WVcSnnP49oONFCS4yrg4p3QLAeRxCEQ35kAB1eXIWIQpk_ixNdIo4EQbvi46ptrrV0ty6pbjRzaU0qzqX-Ni99q3AwCMCbURTo_S2cBTumBVlmwsiOaYmubvjWjSo25Mf0qyZ00&sver=2&ad_v=1&ad_ci=SfcpzJHyHEs8_eLaKhFTSuOZ-qUObfzTOGKAaLZ_oC1crq1031mme0iDDoyLZ_rQUa_vcUnHTo0aGW1g1taW36zj3UZRZdjZw6YnQDCalz5V&act=3",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 288724,
                        "template": "pcfood",
                        "imageUrl": "http://p0.meituan.net/w.h/travel/c9f424c6274d1b9e16e10b8f345a403a208792.jpg",
                        "title": "王府井步行街",
                        "address": "东城区东长安街北侧",
                        "lowestprice": 9,
                        "avgprice": 237,
                        "latitude": 39.911979,
                        "longitude": 116.411195,
                        "showType": "travel",
                        "avgscore": 4,
                        "comments": 6,
                        "historyCouponCount": 11408,
                        "backCateName": "步行街",
                        "areaname": "王府井/东单",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "天安门广场、故宫博物院（故宫）、八达岭长城等3日跟团游*惠享纯玩 景点全覆盖699元，【北京+八达岭长城+故宫4日跟团游】品牌连锁酒店、毛主席纪念堂、升旗仪式、免费接送、天天发团690元，【八达岭长城+故宫+颐和园+北海公园+天坛等5日跟团游】豪华酒店、优质导游、纯玩无购物、含升国旗980元，【北京4日跟团游】品牌连锁酒店、游故宫、长城、升旗仪式、免费接送、天天发团730元，天安门广场、故宫博物院（故宫）、人民英雄纪念碑等3日跟团游*连锁酒店  精选爆款539元，奥林匹克森林公园、清华大学、颐和园等纯玩3日跟团游*纯玩无购物，每日发团580元，北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*纯玩O自费，榜单推荐988元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 44509742,
                                "title": "天安门广场、故宫博物院（故宫）、八达岭长城等3日跟团游*惠享纯玩 景点全覆盖",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 699,
                                "value": 999,
                                "sales": 4530,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 37439830,
                                "title": "【北京+八达岭长城+故宫4日跟团游】品牌连锁酒店、毛主席纪念堂、升旗仪式、免费接送、天天发团",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 690,
                                "value": 1310,
                                "sales": 1482,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 37440474,
                                "title": "奥林匹克森林公园、清华大学、颐和园等纯玩3日跟团游*纯玩无购物，每日发团",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 580,
                                "value": 1240,
                                "sales": 688,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 38734326,
                                "title": "【八达岭长城+故宫+颐和园+北海公园+天坛等5日跟团游】豪华酒店、优质导游、纯玩无购物、含升国旗",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 980,
                                "value": 2350,
                                "sales": 615,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 39801888,
                                "title": "【北京4日跟团游】品牌连锁酒店、游故宫、长城、升旗仪式、免费接送、天天发团",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 730,
                                "value": 1490,
                                "sales": 343,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 38732006,
                                "title": "【相约火爆网红2019北京世界园艺博览会+北京4日纯玩跟团游】住全国连锁酒店",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 699,
                                "value": 999,
                                "sales": 469,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 44334809,
                                "title": "北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*畅游帝都、无购物。",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 646,
                                "value": 999,
                                "sales": 258,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 46929379,
                                "title": "天安门广场、故宫博物院（故宫）、人民英雄纪念碑等3日跟团游*连锁酒店  精选爆款",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 539,
                                "value": 799,
                                "sales": 226,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 37442662,
                                "title": "【北京4日跟团游】所有门票和景区小交通一价全含、爸妈放心游、无二次消费、品牌连锁酒店",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 1130,
                                "value": 1680,
                                "sales": 237,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 44128455,
                                "title": "北京天安门、人民英雄纪念碑、北京毛主席纪念堂等纯玩3日跟团游*纯玩O自费，榜单推荐",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 988,
                                "value": 1058,
                                "sales": 470,
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
                        "landmarkDistance": "距故宫1.4km",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 158814250,
                        "template": "pcfood",
                        "imageUrl": "https://img.meituan.net/w.h/msmerchant/102b805c9c7381cff54e3cb4bdb9f62817416.jpg",
                        "title": "故宫餐厅（坤宁宫店）",
                        "address": "东城区景山前街4号（故宫博物院坤宁门东行5米）",
                        "lowestprice": 0,
                        "avgprice": 57,
                        "latitude": 39.921104,
                        "longitude": 116.397029,
                        "showType": "food",
                        "avgscore": 4,
                        "comments": 0,
                        "historyCouponCount": 0,
                        "backCateName": "家常菜",
                        "areaname": "东城区",
                        "tag": [],
                        "cate": [
                            1,
                            20632,
                            20557,
                            20426
                        ],
                        "recentScreen": null,
                        "abstracts": [],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": null,
                        "posdescr": null,
                        "ct_poi": null,
                        "trace": null,
                        "landmarkDistance": "距故宫<500m",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 77328134,
                        "template": "pcfood",
                        "imageUrl": "https://p0.meituan.net/wedding/297a04465fd50d32a6912f031df12fc7296189.jpg",
                        "title": "三仁医疗美容眼整形旗舰店",
                        "address": "东城区朝阳门南小街16-7号（朝阳门南小街小区三区）",
                        "lowestprice": 58,
                        "avgprice": 2944,
                        "latitude": 39.91582,
                        "longitude": 116.427963,
                        "showType": "beauty",
                        "avgscore": 4.6,
                        "comments": 17,
                        "historyCouponCount": 6,
                        "backCateName": "医学美容",
                        "areaname": "朝阳门",
                        "tag": [],
                        "cate": [
                            22,
                            20630,
                            20426
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "680元/券，润百颜水光针 2ml 面部补水"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 65150729,
                                "title": "润百颜水光针 2ml 面部补水",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 680,
                                "value": 2500,
                                "sales": 0,
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
                        "landmarkDistance": "距故宫2.7km",
                        "hasAds": true,
                        "adsClickUrl": "https://mlog.dianping.com/api/cpv/billing?ad_cj=ZwUu2Ima9dAlCRfsobSy7wOrY_NcHbDdBeZ4FY2eX7lHxvZDVK4uZQhTEwTom4QRTvgP0NYXJQarNErvgRFLDx6Ye4Pv94Y4s6LRKXRPVZmRZp8zd0ZaiPxMFOmwURhvMp-sWXi1hP5jJTzXZtVkOwdp3MQF6UIasbaHj3NdNOxGyMqHYqRlWoEjo6qqdlmuJqn5ur0OB-UtjO9ape9QrRNQeBrmBIf6MQCM0AD3Zfp78M6BNIQPPnIfyk-zoiDXkP0rlxSMjkPVKteVJsxtrGDVliqe2VJqbpNEZ8V-4AXSFxI8YY3vEgVIfpRnSXZbef26JxE0ZfpfCepOAufABy_N&sver=2&ad_v=1&ad_ci=ZwUu2ImIKWx1IUnmwvei74Glq2zbWhKqawb_1BO88Nxc8B6TygsbJwa9BaNuEXXJ2XbbiYPRZHuTi0tlaMNwJPB0nkV1fltWmlaQiJ1bUEIPKQ&act=2",
                        "adsShowUrl": "https://mlog.dianping.com/api/cpv/action?ad_cj=ZwUu2Ima9dAlCRfsobSy7wOrY_NcHbDdBeZ4FY2eX7lHxvZDVK4uZQhTEwTom4QRTvgP0NYXJQarNErvgRFLDx6Ye4Pv94Y4s6LRKXRPVZmRZp8zd0ZaiPxMFOmwURhvMp-sWXi1hP5jJTzXZtVkOwdp3MQF6UIasbaHj3NdNOxGyMqHYqRlWoEjo6qqdlmuJqn5ur0OB-UtjO9ape9QrRNQeBrmBIf6MQCM0AD3Zfp78M6BNIQPPnIfyk-zoiDXkP0rlxSMjkPVKteVJsxtrGDVliqe2VJqbpNEZ8V-4AXSFxI8YY3vEgVIfpRnSXZbef26JxE0ZfpfCepOAufABy_N&sver=2&ad_v=1&ad_ci=ZwUu2ImIKWx1IUnmwvei74Glq2zbWhKqawb_1BO88Nxc8B6TygsbJwa9BaNuEXXJ2XbbiYPRZHuTi0tlaMNwJPB0nkV1fltWmlaQiJ1bUEIPKQ&act=3",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 491352,
                        "template": "pcfood",
                        "imageUrl": "http://p0.meituan.net/w.h/travel/4bbf8c6c9291ea1fde41d744a7e0934174175.jpg",
                        "title": "景山公园",
                        "address": "西城区景山西街44号（故宫后门对面）",
                        "lowestprice": 23.5,
                        "avgprice": 6,
                        "latitude": 39.925974,
                        "longitude": 116.396755,
                        "showType": "travel",
                        "avgscore": 4.9,
                        "comments": 1519,
                        "historyCouponCount": 2923,
                        "backCateName": "公园",
                        "areaname": "西城区",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "故宫博物院（故宫）、故宫珍宝馆、天安门广场等纯玩1日跟团游*景山打卡故宫全景1元，故宫博物院（故宫）、景山公园、天安门广场纯玩1日跟团游*全景故宫尽在眼下198元，【北京+天津+故宫+八达岭长城+颐和园双飞5日跟团游】升级1晚国际五星标准酒店、0购物、玉渊潭赏樱花2599元，【北京+天安门广场+故宫+八达岭长城+颐和园双飞6日跟团游】采摘水蜜桃、登景山俯瞰故宫全景3799元，【北京+天安门广场+八达岭长城双飞6日跟团游】0购物、故宫博物院、颐和园、玉渊潭赏樱花2699元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 48838455,
                                "title": "故宫博物院（故宫）、故宫珍宝馆、天安门广场等纯玩1日跟团游*景山打卡故宫全景",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 1,
                                "value": 2,
                                "sales": 2263,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49478417,
                                "title": "【北京+天安门广场+八达岭长城双飞6日跟团游】0购物、故宫博物院、颐和园、玉渊潭赏樱花",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 2699,
                                "value": 14199,
                                "sales": 6,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49252111,
                                "title": "【北京+天津+故宫+八达岭长城+颐和园双飞5日跟团游】升级1晚国际五星标准酒店、0购物、玉渊潭赏樱花",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 2599,
                                "value": 13199,
                                "sales": 0,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49260991,
                                "title": "【北京+天安门广场+故宫+八达岭长城+颐和园双飞6日跟团游】采摘水蜜桃、登景山俯瞰故宫全景",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 3799,
                                "value": 13799,
                                "sales": 0,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 39937752,
                                "title": "故宫博物院（故宫）、景山公园、天安门广场纯玩1日跟团游*全景故宫尽在眼下",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 198,
                                "value": 298,
                                "sales": 95,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49478733,
                                "title": "【北京+天津双飞5日跟团游】升级1晚国际五星标准酒店、故宫博物院、颐和园、八达岭长城",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 2599,
                                "value": 12699,
                                "sales": 0,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49933165,
                                "title": "【北京+承德双飞6日跟团游】升级1晚四星精品酒店、颐和园、军事博物馆、奥林匹克公园、小布达拉宫",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 2499,
                                "value": 11899,
                                "sales": 0,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49334244,
                                "title": "【北京双飞5日跟团游】纯玩无购物、八达岭长城、颐和园、天坛、故宫、天安门广场、雪世界滑雪场等精华景点",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 2888,
                                "value": 8888,
                                "sales": 0,
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
                        "landmarkDistance": "距故宫881m",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 111387655,
                        "template": "pcfood",
                        "imageUrl": "https://img.meituan.net/w.h/msmerchant/6cb529012131aa56e59c2dfa634020b4198645.jpg",
                        "title": "故宫冰窖餐厅",
                        "address": "东城区北长街故宫博物院慈宁宫南侧",
                        "lowestprice": 0,
                        "avgprice": 73,
                        "latitude": 39.9179,
                        "longitude": 116.395223,
                        "showType": "food",
                        "avgscore": 3.5,
                        "comments": 1,
                        "historyCouponCount": 0,
                        "backCateName": "快餐",
                        "areaname": "东城区",
                        "tag": [],
                        "cate": [
                            1,
                            20557,
                            20426
                        ],
                        "recentScreen": null,
                        "abstracts": [],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": null,
                        "posdescr": null,
                        "ct_poi": null,
                        "trace": null,
                        "landmarkDistance": "距故宫<500m",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 309978,
                        "template": "pcfood",
                        "imageUrl": "https://p0.meituan.net/wedding/b80f9e7bdb61a4a2fd441d3f603650d4243516.jpg",
                        "title": "JUVA欧华医学美肤（金宝汇店）",
                        "address": "东城区金宝街88号金宝汇购物中心一期",
                        "lowestprice": 0,
                        "avgprice": 1029,
                        "latitude": 39.915206,
                        "longitude": 116.421307,
                        "showType": "beauty",
                        "avgscore": 5,
                        "comments": 30,
                        "historyCouponCount": 342,
                        "backCateName": "医学美容",
                        "areaname": "王府井/东单",
                        "tag": [],
                        "cate": [
                            22,
                            20630,
                            20426
                        ],
                        "recentScreen": null,
                        "abstracts": [],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": null,
                        "posdescr": null,
                        "ct_poi": null,
                        "trace": null,
                        "landmarkDistance": "距故宫2.1km",
                        "hasAds": true,
                        "adsClickUrl": "https://mlog.dianping.com/api/cpv/billing?ad_cj=9guSD43AnB7XyxM1hnfuZWPZnBKDD5Mn8WMhCEhdU-95mYSfpFtQriK2DOFmt7oFTo4pWnOZsuGVwGzr3aQ1sGrjJPAFqc6GUrzcUS8nXxXAUxRZG-Q771ur18g5jjqH9IhHJjYpsD_8_xLGU7NmwXXmfHkxIewTmzUYWQcPUJGKbxZhpbtXs991bttRNiQO7xrmSMhEgnGP6czDJFusrBhc9wK1Rlrh5nlkRGPEQXhUfuni0LlhzrWV420-hicZaOE7y_xek623rMNUD1pysbwhDgfwdhbWII55MrwwVgsCGb6NBUJmAIMlimwhlm7e1lsEbPKtX-Zxj23hspcvlng&sver=2&ad_v=1&ad_ci=9guSD43SQKKH400h4XXueeLHdkWChtOLbUaryYwUCZs-BW5Af_BBiqehR4KzldSzA3p3UM4fmFJIE6cV0i2Fdrb5x61-xfxrUpozD3XMiV0&act=2",
                        "adsShowUrl": "https://mlog.dianping.com/api/cpv/action?ad_cj=9guSD43AnB7XyxM1hnfuZWPZnBKDD5Mn8WMhCEhdU-95mYSfpFtQriK2DOFmt7oFTo4pWnOZsuGVwGzr3aQ1sGrjJPAFqc6GUrzcUS8nXxXAUxRZG-Q771ur18g5jjqH9IhHJjYpsD_8_xLGU7NmwXXmfHkxIewTmzUYWQcPUJGKbxZhpbtXs991bttRNiQO7xrmSMhEgnGP6czDJFusrBhc9wK1Rlrh5nlkRGPEQXhUfuni0LlhzrWV420-hicZaOE7y_xek623rMNUD1pysbwhDgfwdhbWII55MrwwVgsCGb6NBUJmAIMlimwhlm7e1lsEbPKtX-Zxj23hspcvlng&sver=2&ad_v=1&ad_ci=9guSD43SQKKH400h4XXueeLHdkWChtOLbUaryYwUCZs-BW5Af_BBiqehR4KzldSzA3p3UM4fmFJIE6cV0i2Fdrb5x61-xfxrUpozD3XMiV0&act=3",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 75467992,
                        "template": "pcfood",
                        "imageUrl": "http://p0.meituan.net/w.h/hotel/f43e57ef1843cf86753bba853824db6b1257840.jpg",
                        "title": "故宫珍宝馆",
                        "address": "东城区天安门后边",
                        "lowestprice": 30,
                        "avgprice": 29,
                        "latitude": 39.919819,
                        "longitude": 116.400456,
                        "showType": "travel",
                        "avgscore": 4.8,
                        "comments": 16206,
                        "historyCouponCount": 139434,
                        "backCateName": "展览馆",
                        "areaname": "东城区",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩1日跟团游*送珍宝馆，多套餐选择69元，故宫博物院下午场门票+珍宝馆门票+钟表馆门票（成人票）80元，珍宝馆门票+钟表馆门票+故宫博物院上午场门票（成人票）80元，故宫博物院上午场门票+珍宝馆门票+钟表馆门票（学生票）30元，故宫博物院上午场门票+珍宝馆票+钟表馆票成人票80元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 36062245,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩1日跟团游*送珍宝馆，多套餐选择",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 69,
                                "value": 119,
                                "sales": 10572,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 54864971,
                                "title": "故宫博物院下午场门票+珍宝馆门票+钟表馆门票（成人票）",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 80,
                                "value": 80,
                                "sales": 9163,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 55847069,
                                "title": "珍宝馆门票+钟表馆门票+故宫博物院上午场门票（成人票）",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 80,
                                "value": 80,
                                "sales": 7837,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 41569721,
                                "title": "八达岭长城、故宫博物院（故宫）、颐和园等纯玩1日跟团游*多套餐+多集合点供选",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 88,
                                "value": 138,
                                "sales": 4561,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 53112220,
                                "title": "故宫博物院上午场门票+珍宝馆门票+钟表馆门票（学生票）",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 30,
                                "value": 30,
                                "sales": 6991,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 46189784,
                                "title": "故宫博物院（故宫）、八达岭长城、颐和园等纯玩3日跟团游*0购物景点全免费接送",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 559,
                                "value": 999,
                                "sales": 2409,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 54630609,
                                "title": "故宫博物院上午场门票+珍宝馆票+钟表馆票成人票",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 80,
                                "value": 80,
                                "sales": 5185,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 50390770,
                                "title": "成人上午场故宫门票+珍宝馆票+讲解+无线耳麦（9:00-11:00入园）",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 99,
                                "value": 118,
                                "sales": 2934,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 54640990,
                                "title": "故宫博物院下午场门票+珍宝馆票+钟表馆票成人票",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 80,
                                "value": 80,
                                "sales": 3566,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 55847051,
                                "title": "珍宝馆门票+钟表馆门票+故宫博物院下午场门票（成人票）",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 80,
                                "value": 80,
                                "sales": 3416,
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
                        "landmarkDistance": "距故宫<500m",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
                        "full": false
                    },
                    {
                        "id": 586083,
                        "template": "pcfood",
                        "imageUrl": "http://p1.meituan.net/w.h/hotel/6003187305c146a3ae4818598c6964c454639.jpg",
                        "title": "中山公园",
                        "address": "东城区中华路4号（天安门西侧）",
                        "lowestprice": 3,
                        "avgprice": 7,
                        "latitude": 39.910766,
                        "longitude": 116.394386,
                        "showType": "travel",
                        "avgscore": 3.9,
                        "comments": 77,
                        "historyCouponCount": 430,
                        "backCateName": "公园",
                        "areaname": "东城区",
                        "tag": [],
                        "cate": [
                            20632,
                            20873,
                            20522,
                            20426,
                            195
                        ],
                        "recentScreen": null,
                        "abstracts": [
                            {
                                "text": "",
                                "backgroundColor": null,
                                "borderColor": null,
                                "fontColor": null,
                                "icon": "http://p1.meituan.net/groupop/af71bbba0c83b6693e9f52645bb1cf3c660.png",
                                "message": "【北京双飞6日跟团游】0购物、故宫、古北水镇、司马台长城、天安门广场、纪念堂、纪念碑、国 家博物馆3499元，中山公园（不含门票）大师讲解露娜公益微信版3元，【北京双飞6日跟团游】0购物、天安门广场、纪念堂、纪念碑、国 家博物馆、故宫、古北水镇、司马台长城3499元"
                            }
                        ],
                        "dangleAbstracts": null,
                        "titleTags": [],
                        "iUrl": null,
                        "deals": [
                            {
                                "id": 52286703,
                                "title": "中山公园（不含门票）大师讲解露娜公益微信版",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 3,
                                "value": 20,
                                "sales": 188,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49477402,
                                "title": "【北京双飞6日跟团游】0购物、故宫、古北水镇、司马台长城、天安门广场、纪念堂、纪念碑、国 家博物馆",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 3499,
                                "value": 12799,
                                "sales": 0,
                                "iUrl": "",
                                "stid": null,
                                "trace": null,
                                "tag": {
                                    "promotion": []
                                }
                            },
                            {
                                "id": 49236962,
                                "title": "【北京双飞6日跟团游】0购物、天安门广场、纪念堂、纪念碑、国 家博物馆、故宫、古北水镇、司马台长城",
                                "subtitleA": null,
                                "subtitleB": null,
                                "subtitleC": null,
                                "price": 3499,
                                "value": 13399,
                                "sales": 0,
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
                        "landmarkDistance": "距故宫842m",
                        "hasAds": false,
                        "adsClickUrl": "",
                        "adsShowUrl": "",
                        "distance": "",
                        "cityId": 1,
                        "city": "北京",
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
