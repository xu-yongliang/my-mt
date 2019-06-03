<template>
    <div class="film-card">
        <img class="main-img" :src="card.img.replace('/w.h', '')" alt="">
        <img v-if="mark === 1" class="film-mark" src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png">
        <img v-else-if="mark === 2" style="width: 55px;height: 20px" class="film-mark" src="//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png">
        <img v-else-if="mark === 3" style="width: 40px;height: 20px" class="film-mark" src="//s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png">
        <div class="film-info">
            <p v-if="!card.preSale" class="score">观众评 <span>{{ card.sc}}</span></p>
            <p v-else class="score"><span>{{ card.wish}}</span> 想看</p>
            <p class="title">{{ card.nm}}</p>
            <div class="btn">{{card.preSale?'预售':'购票'}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "film",
        props: ["card"],
        computed: {
            mark() {
                if (!this.card.ver) {
                    return 0;
                }
                if (this.card.ver.includes('IMAX') && this.card.ver.includes('3D')) {
                    return 1;
                }
                if (this.card.ver.includes('IMAX')) {
                    return 2;
                }
                if (this.card.ver.includes('3D')) {
                    return 3;
                }
                return 0;
            }
        }
    }
</script>

<style lang="scss">
    .film-card {
        position: relative;
        height: 297px;

        .main-img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
        }

        .film-mark {
            width: 78px;
            height: 20px;
            position: absolute;
            top: 10px;
            left: -6px;
            box-shadow: 0 2px 6px 0 rgba(0,0,0,.2);
        }

        .film-info {
            border-radius: 5px;
            position: absolute;
            box-sizing: border-box;
            padding-top: 48px;
            padding-left: 10px;
            width: 100%;
            bottom: 0;
            background-image: linear-gradient(-180deg,rgba(0,0,0,0) 0,rgba(29,45,55,.8) 99%);
            .score {
                font-weight: 500;
                font-size: 12px;
                color: #fff;
                >span {
                    font-size: 16px;
                    color: #FD9827;
                }
            }

            .title {
                color: #fff;
                width: 96px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .btn {
                position: absolute;
                right: 10px;
                bottom: 10px;
                color: #fff;
                width: 28px;
                line-height: 20px;
                height: 20px;
                font-size: 14px;
                background-color: #FF4949;
                padding: 2px 12px 3px;
                border-radius: 12px;
            }
        }

    }
</style>
