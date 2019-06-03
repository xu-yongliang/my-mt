<template>
    <div class="m-small-img">
        <div class="img-wrapper">
            <img :src="card.imgUrl.replace('/w.h', '')">
        </div>
        <p class="title ellipsis">{{card.title}}</p>
        <p class="subTitle ellipsis">{{card.subTitle}}</p>
        <p class="tag">
            <span v-for="tag in card.tags" :key="tag.tag">{{tag.tag}}</span>
        </p>
        <p class="info">
            <span class="price">{{card.currentPrice}}</span>
            <span class="oldPrice">{{card.oldPrice}}</span>
            <span class="bottomInfo">{{card.bottomInfo}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "smallImg",
        props: ['card'],
    }
</script>

<style lang="scss">
    .m-small-img {
        box-sizing: border-box;
        width: 100%;
        height: 290px;
        padding: 10px;
        border-radius: 5px;
        &:hover {
            background-color: #f4f4f4;
        }

        .ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .img-wrapper {
            height: 120px;
            width: 100%;
            margin-bottom: 11px;
            img {
                height: 100%;
                width: 100%;
            }
        }

        .title {
            margin-bottom: 6px;
            height: 22px;
            font-size: 16px;
            color: #222;
            line-height: 22px;
            font-weight: 500;
        }

        .subTitle {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
        }

        .tag {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
            height: 20px;

            span {
                margin-right: 10px;
                border: 1px solid #d8d8d8;
                padding: 0 3px;
            }
        }

        .info {
            height: 27px;
            .price {
                font-size: 22px;
                color: #F60;
                margin-right: 6px;

                &:before {
                    font-size: 14px;
                    content: "¥";
                }
            }

            .oldPrice {
                font-size: 12px;
                color: #999;
                text-decoration: line-through;
            }

            .bottomInfo {
                font-size: 12px;
                color: #999;
                float: right;
                margin-top: 10px;
            }
        }
    }
</style>
