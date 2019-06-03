<template>
    <div class="c-content-container">
        <el-row class="cards">
            <!-- 大图卡牌渲染 -->
            <template v-if="renderType === 'bigImg'">
                <el-col :span="8" v-for="(card,idx) in items" :key="card.id">
                    <router-link to="#">
                        <big-img :card="card"/>
                    </router-link>
                </el-col>
            </template>

            <!-- 小图卡牌渲染 -->
            <template v-if="renderType === 'smallImg'">
                <el-col style="width: 20%" v-for="(card) in items" :key="card.id">
                    <router-link to="#">
                        <small-img :card="card"/>
                    </router-link>
                </el-col>
            </template>

            <!-- 小图卡牌渲染 -->
            <template v-if="renderType === 'film'">
                <el-carousel :autoplay="false" indicator-position="none" :loop="false">
                    <el-carousel-item v-for="(items,idx) in filmSlider" :key="idx">
                        <el-col style="width: 20%; padding: 0 10px" v-for="(card) in items"
                                :key="card.id">
                            <router-link to="#">
                                <film :card="card"/>
                            </router-link>
                        </el-col>
                    </el-carousel-item>
                </el-carousel>
            </template>

            <!-- 大图民宿卡牌渲染 -->
            <template v-if="renderType === 'bigImgHome'">
                <el-col :span="8" v-for="(card) in items" :key="card.id">
                    <router-link to="#">
                        <big-img-home :card="card"/>
                    </router-link>
                </el-col>
            </template>

            <!-- 小图卡牌渲染 -->
            <template v-if="renderType === 'smallImgStar'">
                <el-col style="width: 20%" v-for="(card) in items" :key="card.id">
                    <router-link to="#">
                        <small-img-star :card="card"/>
                    </router-link>
                </el-col>
            </template>
        </el-row>
    </div>
</template>

<script>

    import BigImg from "@/components/cards/bigImg";
    import SmallImg from "@/components/cards/smallImg";
    import Film from "@/components/cards/film";
    import BigImgHome from "@/components/cards/bigImgHome";
    import SmallImgStar from "@/components/cards/smallImgStar";

    export default {
        name: "cardContentContainer",
        props: ['renderType', 'items'],
        components: {
            SmallImgStar,
            BigImgHome,
            Film,
            SmallImg,
            BigImg
        },
        computed: {
            filmSlider() {
                if (this.renderType !== 'film') {
                    return [];
                }
                const slides = [];
                for (let i = 0; i < this.items.length; i += 5) {
                    slides.push(this.items.slice(i, i + 5));
                }
                return slides;
            }
        }
    }
</script>

<style lang="scss">

    .c-content-container {
        .el-carousel__arrow--left {
            left: 0px;
            background-color: rgba(31, 45, 61, .9);
        }

        .el-carousel__arrow--right {
            right: 0px;
            background-color: rgba(31, 45, 61, .9);

        }
    }
</style>
