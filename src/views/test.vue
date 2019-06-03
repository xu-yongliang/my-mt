<template>
    <div class="wrapper">
        <!--        <pop-over-category :categories="category" title="分类"/>-->
        <!--        <el-row>-->
        <!--            <el-col :span="4">-->
        <!--                <small-img :card="sc"/>-->
        <!--            </el-col>-->
        <!--        </el-row>-->
        <!--        <el-row>-->
        <!--            <el-col :span="4" :push="1">-->
        <!--                <film :card="fc"/>-->
        <!--            </el-col>-->
        <!--        </el-row>-->

<!--        <el-row>-->
<!--            <el-col :span="8">-->
<!--                <big-img-home :card="hc"/>-->
<!--            </el-col>-->
<!--        </el-row>-->

        <el-row>
            <el-col :span="5">
                <small-img-star :card="ssc"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>


    import BigImg from "@/components/cards/bigImg";
    import SmallImg from "@/components/cards/smallImg";
    import CardContainer from "@/components/index/cardContainer";
    import PopOverCategory from "@/components/search/popOverCategory";
    import Film from "@/components/cards/film";
    import BigImgHome from "@/components/cards/bigImgHome";
    import SmallImgStar from "@/components/cards/smallImgStar";

    export default {
        name: "test",
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
                    }],
                sc: {
                    "id": "46282059_98964361",
                    "style": null,
                    "from": "DEAL_XIUYU",
                    "stid": "013479894671043749050979774221064658212_c0_ee002d59780fd1d6489915274ee9ae3ec",
                    "ctpoi": null,
                    "iUrl": "//www.meituan.com/shenghuo/87596084",
                    "mge": {},
                    "imgUrl": "http://p0.meituan.net/w.h/dpmerchantalbum/37416b9aed59521ca2bd359f30443226383304.jpg",
                    "imageTag": null,
                    "title": "爱之裳鲜花（增城店）",
                    "titleTag": null,
                    "topRightInfo": null,
                    "star": null,
                    "subTitle": "[淘金]【精品单枝】可随意定制520/365/999等10枝起订",
                    "tags": [{"tag": "退", "color": "#333333"}, {"tag": "改签", "color": "#333333"}],
                    "subTitle2": null,
                    "bottomInfo": "已售560",
                    "reasonId": null,
                    "oldPrice": "门市价¥9999999",
                    "currentPrice": "25",
                    "discount": null,
                    "cfrom": null,
                    "priceType": null,
                    "summaryInfos": null,
                    "deal": null,
                    "isSold": null,
                    "recommend": null,
                    "scoreInfo": null,
                    "consumeInfo": null,
                    "abTestValue": null,
                    "layerList": null
                },
                fc: {
                    "bingeWatch": 0,
                    "boxInfo": "上映3天，累计票房39690万",
                    "cat": "科幻,灾难,动作",
                    "civilPubSt": 0,
                    "desc": "主演:凯尔·钱德勒,维拉·法梅加,米莉·波比·布朗",
                    "dir": "迈克尔·道赫蒂",
                    "dur": 132,
                    "effectShowNum": 0,
                    "followst": 0,
                    "fra": "美国",
                    "frt": "2019-05-31",
                    "globalReleased": true,
                    "haspromotionTag": false,
                    "headLineShow": false,
                    "headLines": [],
                    "headLinesVO": [],
                    "id": 246061,
                    "img": "http://p0.meituan.net/w.h/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg",
                    "isMark": false,
                    "late": false,
                    "localPubSt": 0,
                    "mk": 8.6,
                    "movieType": 0,
                    "newsHeadlines": [],
                    "nm": "哥斯拉2：怪兽之王",
                    "pn": 216,
                    "preSale": 0,
                    "preShow": false,
                    "proScore": 0,
                    "proScoreNum": 1,
                    "pubDate": 1559232000000,
                    "pubShowNum": 0,
                    "recentShowDate": 1559404800000,
                    "recentShowNum": 0,
                    "rt": "2019-05-31",
                    "sc": 8.6,
                    "scm": "",
                    "showCinemaNum": 219,
                    "showInfo": "今天219家影院放映3965场",
                    "showNum": 3965,
                    "showTimeInfo": "2019-05-31 本周五上映",
                    "showst": 3,
                    "snum": 130625,
                    "star": "凯尔·钱德勒,维拉·法梅加,米莉·波比·布朗",
                    "totalShowNum": 7826,
                    "ver": "2D/3D/IMAX 3D/中国巨幕/全景声",
                    "videoId": 99291,
                    "videoName": "儿童节新去处，史前动物园包萌娃大开眼界！",
                    "videourl": "http://maoyan.meituan.net/movie/videos/854x4808d1092fd3ea54a0fb6dfc4c4856c5923.mp4",
                    "vnum": 35,
                    "vodPlay": false,
                    "weight": 1,
                    "wish": 325416,
                    "wishst": 0
                },
                hc: {
                    "productId": "7222974",
                    "price": 118,
                    "hostAvatarUrl": "https://img.meituan.net/avatar/53f13ad09e0bd0514bff8cdb87c4c9c820287.jpg",
                    "title": "荧光国际商务豪华大床房",
                    "rentType": 0,
                    "layoutRoom": 1,
                    "maxGuestNumber": 3,
                    "locationArea": "交通学院",
                    "starRating": 50,
                    "commentNumber": 19,
                    "coverImage": "https://img.meituan.net/phoenix/3b4b4ca777d1e930c401e2b771b52534389721.jpg",
                    "favCount": 208,
                    "poiId": "-1",
                    "dpPoiId": "-1"
                },
                ssc: {
                    "itemId": "158809828",
                    "title": "旺顺阁鱼头泡饼（长阳半岛店）",
                    "imgUrl": "https://img.meituan.net/w.h/msmerchant/7bb3dc8d9c439964b77c960b4e40da8810178533.jpg",
                    "score": "4.5",
                    "consumeNum": null,
                    "areaName": "长阳镇",
                    "lowPrice": "95.0",
                    "saleNum": null,
                    "commentNum": 152,
                    "detailUrl": "",
                    "firstCate": [
                        1,
                        20632,
                        20426,
                        20557
                    ],
                    "avgPrice": 123
                }
            }
        },
        components: {SmallImgStar, BigImgHome, Film, PopOverCategory, CardContainer, BigImg, SmallImg},
    }
</script>

<style lang="scss">
    .wrapper {

    }
</style>
