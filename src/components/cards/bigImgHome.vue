<template>
    <div class="m-big-img-home">
        <div class="img-wrapper">
            <img class="cover" :src="card.coverImage.replace('/w.h', '')" alt="">
            <img class="header" :src="card.hostAvatarUrl.replace('/w.h', '')" alt="">
        </div>
        <h3 class="title">{{card.title}}</h3>
        <p class="des"> 整套{{card.layoutRoom}}居室·可住{{card.maxGuestNumber}}人 | {{card.locationArea}} </p>
        <div class="foot-info">
            <span class="price">{{card.price}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bigImgHome",
        props: ['card'],
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .m-big-img-home {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 5px;
        font-size: 0;

        &:hover {
            /*background-color: #f4f4f4;*/
        }

        .img-wrapper {
            position: relative;
            width: 100%;
            height: 208px;
            margin-bottom: 10px;

            .cover {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }

            .header {
                position:absolute;
                top: 100%;
                right: 20px;
                margin-top: -27px;
                width: 52px;
                height: 52px;
                border: 2px solid #fff;
                border-radius: 50%;
            }
        }

        /*}*/

        .title, .des {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .title {
            height: 22px;
            font-weight: 500;
            font-size: 16px;
            color: #222222;
            margin-bottom: 8px;
        }

        .des {
            height: 18px;
            color: #999999;
            font-size: 12px;
            margin-bottom: 7px;
        }

        .foot-info {
            height: 27px;

            .price {
                font-size: 22px;
                color: #BE9E4D;
                margin-right: 6px;

                &:before {
                    font-size: 14px;
                    content: "¥";
                }
            }

            .source-price {
                color: #999;
                text-decoration: line-through;
                font-size: 12px;
            }

            .per-consumer {
                color: #BE9E4D;
                font-size: 12px;
            }

            .location {
                margin-top: 10px;
                float: right;
                color: #999;
                font-size: 12px;
            }
        }


    }
</style>
