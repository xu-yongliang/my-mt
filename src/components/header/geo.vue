<template>
    <div class="m-geo">
        <div class="city">
            <i class="el-icon-location"/>
            <span class="current-city">{{city}}</span>
            <router-link class="change-city" :to="{name:'changeCity'}">切换城市</router-link>
            <div class="near-city">
                [
                <router-link v-for="item in nearCity" :to="{name:'index', params: {name: item}, query: {name: item}}">
                    {{item}}
                </router-link>
                ]
            </div>
        </div>
        <div class="user-enter">
            <router-link to="/" class="login">立即登录</router-link>
            <router-link to="/" class="register">注册</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "geo",
        data() {
            return {}
        },
        computed: {
            city() {
                return this.$store.state.userInfo.city;
            },
            nearCity() {
                return ['大厂回族', '自治县', '门头沟']
            }
        }

    }
</script>

<style scoped lang="scss">
    .m-geo {
        .city {
            display: inline-block;

            .change-city {
                border: 1px solid #E5E5E5;
                color: #666;
                margin: 0 4px;

                &:hover {
                    color: #41B883;
                }
            }

            .near-city {
                display: inline-block;

                a {
                    color: #999;
                    margin: 0 4px;

                    &:hover {
                        color: #41B883;
                    }
                }
            }
        }

        .user-enter {
            display: inline-block;
            margin-left: 15px;

            a {
                margin-left: 10px;
                color: #666;

                &:hover {
                    color: #41B883;
                }
            }

            .login {
                color: #41B883;
            }

        }


    }

</style>
