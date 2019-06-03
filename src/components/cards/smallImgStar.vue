<template>
    <div class="m-small-img-star">
        <div class="img-wrapper">
            <img :src="card.imgUrl.replace('/w.h', '')">
        </div>
        <p class="title ellipsis">{{card.title}}</p>
        <div class="score">
            <el-rate class="score-star"
                     v-model="floatScore"
                     disabled
                     text-color="#ff9900"
                     score-template="{value}">
            </el-rate>
            <span class="count">{{card.commentNum}}个评价</span>
        </div>
        <p class="subTitle">{{card.areaName}}</p>
        <p class="info">
            <span class="price">{{card.lowPrice}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "smallImgStar",
        props: ['card'],
        computed: {
            floatScore() {
                return parseFloat(this.card.score);
            }
        }
    }
</script>

<style lang="scss">
    .m-small-img-star {
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
        }

        .score {
            font-size: 12px;
            color: #999;
            margin-bottom: 10px;
            height: 20px;
            line-height: 20px;

            .el-rate {
                display: inline-block;
                span {
                    vertical-align: middle;
                }
            }

            .count {
                vertical-align: middle;
            }

        }

        .info {
            height: 27px;

            .price {
                font-size: 22px;
                color: #F60;
                margin-right: 6px;
                letter-spacing: -.5px;

                &:before {
                    font-size: 14px;
                    content: "¥ ";
                }

                &:after {
                    font-size: 14px;
                    content: " 起";
                }
            }
        }
    }
</style>
