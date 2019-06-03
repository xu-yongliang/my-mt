<template>
    <div class="guest-you-like">
        <h3>猜你喜欢</h3>
        <ul>
            <router-link to="#" v-for="item in items" :key="item.itemId">
                <li>
                    <img :src="item.imgUrl.replace('/w.h', '')" alt="">
                    <p class="name">{{item.title}}</p>
                    <p class="area">{{item.areaName}}</p>
                    <p class="price">{{item.avgPrice}}</p>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "guestYouLike",
        data() {
            return {
                items: [
                    {
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
                ]
            }
        }
    }
</script>

<style lang="scss">
    .guest-you-like {

        padding: 16px 20px 0;

        > h3 {
            height: 22px;
            font-size: 16px;
            line-height: 22px;
            margin: 0 0 12px;
            color: #333;
        }


        li {
            font-size: 0;
            > img {
                border-radius: 5px;
                width: 100%;
                height: 116px;
            }
            > .name {
                font-size: 14px;
                line-height: 20px;
                color: #222;
                margin: 10px 0 4px;
            }

            > .area {
                font-size: 12px;
                line-height: 17px;
                color: #999;
            }

            > .price {
                font-size: 22px;
                color: #f60;
                line-height: 27px;

                &:before {
                    content: "¥";
                    font-size: 14px;
                }
            }
        }
    }

</style>
