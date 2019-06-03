<template>
    <div class="right-banner">
        <el-row class="home-header-links">
            <ul>
                <li>
                    <router-link to="/" class="takeout">美团外卖</router-link>
                </li>
                <li>
                    <router-link to="/">猫眼电影</router-link>
                </li>
                <li>
                    <router-link to="/">美团酒店</router-link>
                </li>
                <li>
                    <router-link to="/" class="apartment">民宿／公寓</router-link>
                </li>
                <li>
                    <router-link to="/" class="business">商家入驻</router-link>
                </li>
                <li>
                    <router-link to="/">美团公益</router-link>
                </li>
            </ul>
        </el-row>
        <el-row>
            <el-col :span="14">
                <div class="slide">
                    <el-carousel height="240px">
                        <el-carousel-item v-for="item in imgList" :key="item.img">
                            <router-link to="/">
                                <img :src="item.img" alt="">
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="entertainment">
                    <router-link to="/">
                        <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
                    </router-link>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="user-info">
                    <h4>
                        <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt>
                    </h4>
                    <p class="user-name">Hi！ 你好！</p>
                    <p>
                        <router-link :to="{name: 'register'}">
                            <el-button round>注册</el-button>
                        </router-link>
                    </p>
                    <p>
                        <router-link :to="{name: 'login'}">
                            <el-button round>立即登陆</el-button>
                        </router-link>
                    </p>

                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7">
                <router-link to="/">
                    <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" class="r-hotel">
                </router-link>
            </el-col>
            <el-col :span="7">
                <router-link to="/">
                    <img src="//p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" class="r-music">
                </router-link>
            </el-col>
            <el-col :span="4">
                <router-link to="/">
                    <img src="//p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" class="r-coop">
                </router-link>
            </el-col>
            <el-col :span="6">
                <div class="app-download">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载app">
                    <h3>美团APP手机版</h3>
                    <p><span>1元起</span> 吃喝玩乐</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "rightBanner",
        data() {
            return {
                imgList: [{
                    url: '#',
                    img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                }, {
                    url: '#',
                    img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
                }, {
                    url: '#',
                    img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
                }]
            }
        }
    }
</script>

<style lang="scss">
    .right-banner {
        position: relative;

        .home-header-links {
            position: absolute;
            top: -35px;
            left: 20px;

            ul {
                display: flex;

                li {
                    margin: 0 20px;

                    > a {
                        font-size: 16px;
                        font-weight: 600;
                        color: #222222;

                        &:hover {
                            color: #f04d4e;
                        }

                        &.takeout:hover {
                            color: #fbc700;
                        }

                        &.apartment:hover {
                            color: #FDC411;
                        }

                        &.business:hover {
                            color: #31BBAC;
                        }
                    }
                }
            }
        }

        .slide {
            margin: 10px;

            img {
                height: 240px;
            }
        }

        .entertainment {
            margin: 10px 10px 0 0;

            img {
                width: 100%;
                height: 240px;
            }
        }

        .user-info {
            box-sizing: border-box;
            background-color: #fff;
            margin-top: 10px;
            height: 240px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 30px;

            button {
                width: 118px;
                margin: 5px;
            }

            h4 {
                img {
                    width: 47px;
                    height: 47px;
                    border-radius: 50%;
                    border: 4px solid #E5E5E5;
                }
            }

            .user-name {
                font-size: 16px;
                margin-bottom: 10px;
            }
        }

        .r-hotel, .r-music, .r-coop {
            height: 165px;
        }

        .r-hotel {
            width: calc(100% - 20px);
            margin: 0 10px;
        }

        .r-music {
            width: calc(100% - 10px);
            margin-right: 10px;
        }

        .r-coop {
            width: 147px;
        }

        .app-download {
            height: 165px;
            width: 100%;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 95px;
                height: 95px;
                padding-top: 10px;
            }

            h3 {
                font-size: 16px;
                font-weight: 600;
            }

            p {
                font-weight: 500;
                margin-top: 2px;
                font-size: 12px;
                span {
                    color: #f04d4e;
                }
            }

        }
    }
</style>
