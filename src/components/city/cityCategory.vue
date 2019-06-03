<template>
    <div class="city-category-wrapper">
        <el-row>
            <dl class="alphabet">
                <dt>按拼音首字母选择：</dt>
                <dd v-for="letter in alphabets">
                    <a :href="'#city-' + letter">{{letter}}</a>
                </dd>
            </dl>
        </el-row>
        <el-row :id="'city-' + item.letter" class="letter-data" v-for="(item) in letterCity" :key="item.letter">
            <el-col class="l-title" :span="2">
                <h4>{{item.letter}}</h4>
            </el-col>
            <el-col :span="22">
                <router-link class="city"
                        v-for="city in item.data"
                             :to="{name:'index', params: {name: city}, query: {name: city}}"
                >{{city}}
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "cityCategory",
        data() {
            return {
                alphabets: "ABCDEFGHJKLMNPQRSTWXYZ".split(''),
                letterCity: [
                    {
                        letter: "A",
                        data: ["鞍山", "安庆", "安阳", "安顺", "安康", "安丘", "安岳", "安陆市", "阿克苏", "安州区", "阿图什市", "安吉", "阿拉善盟", "阿荣旗", "安平", "安溪", "安宁", "安化", "阿拉尔", "安福", "阿勒泰市", "阿城区", "澳门", "阿勒泰", "阿里", "阿坝"]
                    },
                    {
                        letter: "B",
                        data: ["北京", "包头", "保定", "蚌埠", "亳州", "滨州", "宝鸡", "白城", "霸州", "巴彦淖尔", "北海", "百色", "巴中", "毕节", "保山", "本溪", "白银", "白山", "璧山", "拜泉县", "拜城县", "宝应", "北流", "博爱", "巴楚县", "宝丰", "博兴", "泌阳", "彬州市", "巴彦县", "博山", "宾阳", "泊头市", "博罗县", "博白县", "北镇市", "北安市", "滨海", "北碚", "博尔塔拉", "巴州"]
                    },
                    {
                        letter: "C",
                        data: ["重庆", "成都", "常州", "长沙", "长春", "沧州", "长治", "赤峰", "慈溪", "滁州", "常熟", "常德", "承德", "郴州", "潮州", "从化", "巢湖", "朝阳", "长兴", "昌邑", "苍南", "长葛", "池州", "澄江县", "长乐", "昌吉", "澄迈县", "崇左", "楚雄", "赤壁", "淳安", "承德县", "昌乐", "曹妃甸", "磁县", "长垣", "成安", "昌黎", "岑溪", "茌平", "曹县", "城固", "长汀", "潮安", "长寿", "常山", "赤水", "慈利", "常宁市", "茶陵", "长丰县", "苍溪县", "长清区", "崇明区", "成武县", "崇州", "昌都"]
                    },]
            }
        }
    }
</script>

<style lang="scss">
    .city-category-wrapper {
        padding: 30px 0;

        .alphabet {
            display: flex;
            justify-items: center;
            margin-bottom: 30px;
            dt {
                font-size: 16px;
            }

            dd {
                font-size: 14px;
                margin: 0 10px;

                a {
                    display: inline-block;
                    width: 25px;
                    height: 25px;
                    line-height: 25px;
                    text-align: center;
                    color: #666666;

                    &:hover {
                        background-color: #F8F8F8;
                        border-radius: 50%;
                    }
                }
            }
        }

        .letter-data {

            padding: 13px 30px 13px 10px;
            border-radius: 10px;

            &:hover {
                background-color: #F8F8F8;
            }

            h4 {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: #13D1BE;
                line-height: 40px;
                text-align: center;
                font-size: 16px;
                font-weight: 500;
                color: #ffffff;
            }

            .city {

                display: inline-block;
                margin: 10px 20px;

                color: #666666;
                font-size: 14px;

                &:hover {
                    color: #13D1BE;
                }
            }

        }

    }

</style>
