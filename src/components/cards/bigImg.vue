<template>
    <div class="m-big-img">
        <img :src="card.imgUrl.replace('/w.h', '')" alt="">
        <h3 class="title">{{card.title}}</h3>
        <p class="des">{{card.subTitle}}</p>
        <div class="foot-info">
            <span class="price">{{card.currentPrice}}</span>
            <span v-if="card.oldPrice" class="source-price">{{card.oldPrice}}</span>
            <span v-else class="per-consumer">/人均</span>
            <span class="location">
                {{card.location}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bigImg",
        props: ['card'],
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">
    .m-big-img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 5px;
        font-size: 0;

        &:hover {
            background-color: #f4f4f4;
        }

        /*.post {*/
        /*    width: 100%;*/
        /*    height: 208px;*/

        img {
            width: 100%;
            height: 208px;
            border-radius: 5px;
            margin-bottom: 10px;
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
