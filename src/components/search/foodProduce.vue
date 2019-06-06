<template>
    <el-row class="food-produce-card">
        <el-col :span="6" class="main-img">
            <img :src="produce.imageUrl.replace('/w.h', '')">
            <span>{{idx}}</span>
        </el-col>
        <el-col :span="18" class="card-content">
            <el-row class="content-desc">
                <el-row><h3>{{produce.title}}</h3></el-row>
                <el-row>
                    <el-rate
                            v-model="produce.avgscore"
                            disabled
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                    <span v-if="produce.avgscore > 4.5">很好</span>
                    <span v-else-if="produce.avgscore > 4">好</span>
                    <span v-else>不错</span>
                    <span class>{{produce.avgscore}}分</span>
                    <span class="comment-sum">{{produce.comments}}人评论</span>
                </el-row>
                <el-row>
                    <span class="cat-info ellipsis">{{produce.backCateName}}|{{produce.areaname}}</span>
                    <span class="location">{{produce.address}}</span>
                </el-row>
                <el-row>
                    <span>人均¥{{produce.avgprice}}</span>
                </el-row>
            </el-row>
            <el-row class="deal-container" v-if="produce.deals && produce.deals.length>0">
                <div class="deal-wrapper">
                    <router-link to="#" v-for="deal in showDeals" :key="deal.id">
                        <div class="deal">
                            <h3 class="ellipsis">{{deal.title}}</h3>
                            <p>
                                <span class="deal-price">{{deal.price}}</span><span>门市价¥{{deal.value}}</span><span>已售{{deal.sales}}</span>
                            </p>
                        </div>
                    </router-link>
                </div>
                <el-row class="more-btn" v-if="produce.deals.length > 2">
                    <span v-if="showDealCount < produce.deals.length"
                          @click="changeShowDealCount(produce.deals.length)"
                    >更多{{produce.deals.length - showDealCount}}个优惠<i class="el-icon-arrow-down"></i></span>
                    <span v-else @click="changeShowDealCount(2)">收起<i class="el-icon-arrow-up"></i></span>
                </el-row>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "foodProduce",
        props: ['produce', 'idx'],
        data() {
            return {
                showDealCount: 2,
            }
        },
        computed: {
            showDeals() {
                return this.produce.deals.slice(0, this.showDealCount);
            }
        },
        methods: {
            changeShowDealCount(value) {
                this.showDealCount = value;
            }
        }
    }
</script>

<style lang="scss">
    .food-produce-card {

        .ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .main-img {
            img {
                width: 220px;
                height: 125px;
                border-radius: 5px;
            }

            span {
                position: absolute;
                top: 2px;
                left: -3px;
                width: 20px;
                height: 13px;
                background-color: #FB6433;
                line-height: 13px;
                font-size: 12px;
                text-align: center;
                color: #fff;
            }
        }

        .card-content {
            padding-left: 20px;
            padding-bottom: 10px;

            .content-desc {
                padding-bottom: 10px;

                h3 {
                    font-weight: 500;
                    font-size: 16px;
                    color: #333;
                }

                > .el-row {
                    height: 20px;

                    &:not(:first-of-type) {
                        margin-top: 6px;
                    }
                }

                .el-rate {
                    display: inline-block;

                    span {
                        margin: 0;
                    }
                }

                span {
                    margin-right: 10px;
                    font-size: 12px;
                    vertical-align: middle;

                    &.comment-sum {
                        color: #F90;
                    }

                    &.cat-info {
                        width: 104px;
                        display: inline-block;
                    }
                }
            }
        }

        .deal-container {
            border-top: 1px dashed #E5E5E5;
            padding-top: 10px;

            .deal {
                padding: 6px 10px 8px;

                h3 {
                    font-size: 14px;
                    color: #666;
                    height: 20px;
                    line-height: 20px;

                    &:hover {
                        color: #31BBAC;
                    }
                }

                span {
                    margin-right: 10px;
                    font-size: 12px;
                    color: #999999;

                    &.deal-price {
                        color: #f04d4e;
                        font-size: 15px;

                        &:before {
                            content: "¥";
                            font-size: 12px;
                        }
                    }
                }

                &:hover {
                    background-color: #F8F8F8;
                    border-radius: 4px;
                }
            }

            .more-btn {
                margin-left: 10px;
                span {
                    display: inline-block;
                    margin-top: 16px;
                    height: 12px;
                    line-height: 12px;
                    font-size: 12px;
                    cursor: pointer;

                    &:hover {
                        color: #31BBAC;
                    }
                }

            }
        }
    }

</style>
