<template>
    <div class="page-change-city">
        <el-row>
            <span class="name">按省份选择:</span>
            <mul-select class="province-select" :title="'省份'" :value="selectProvince"
                        :options="province"
                        :showSelection="showProvince"
                        :disable="false"
                        @changeValue="changeProvince"
                        @changeShow="changeProvinceShow"/>
            <mul-select :title="'城市'" :value="selectCity"
                        :options="city"
                        :showSelection="showCity"
                        :disable="selectProvince==='省份'"
                        @changeValue="changeCity"
                        @changeShow="changeCityShow"/>
            <span style="margin-left: 20px">直接搜索:</span>
            <el-select
                    v-model="searchWord"
                    remote
                    filterable
                    placeholder="请输入城市中文或拼音"
                    :remote-method="searchCity"
                    :loading="loading">
                <el-option
                        v-for="item in searchOptions"
                        :key="item"
                        :label="item"
                        :value="item">
                    <router-link :to="{name:'index', params: {name: item}, query: {name: item}}"
                                 style="display: inline-block; width: 100%">{{item}}
                    </router-link>
                </el-option>
            </el-select>
        </el-row>
        <el-row class="hot-city">
            <city-list :title="'热门城市'" :cities="['北京','上海','广州','深圳','天津','西安','重庆','杭州','南京','武汉','成都']"/>
        </el-row>
        <el-row class="history-city">
            <city-list :title="'最近访问'" :cities="historyCity"/>
        </el-row>
        <el-row class="select-index">
            <city-category/>
        </el-row>
    </div>
</template>

<script>
    import SelectName from "@/components/city/selectName";
    import MulSelect from "@/components/city/mulSelect";
    import CityList from "@/components/city/cityList";
    import CityCategory from "@/components/city/cityCategory";

    export default {
        name: "changeCity",
        components: {CityCategory, CityList, MulSelect, SelectName},
        data() {
            return {
                showProvince: false,
                province: ["山东", "甘肃", "江苏", "北京", "云南", "海南", "浙江", "上海", "天津", "陕西", "新疆", "贵州", "安徽", "澳门", "湖南", "河北", "香港", "辽宁", "四川", "宁夏", "吉林", "福建", "湖北", "广东", "重庆", "山西", "江西", "黑龙江", "青海", "河南", "台湾", "内蒙古", "西藏", "广西"],
                selectProvince: "省份",

                showCity: false,
                city: ["石家庄", "保定", "廊坊", "唐山", "秦皇岛", "邯郸", "邢台", "张家口", "承德", "沧州", "衡水", "涿州", "迁安", "武安", "三河", "辛集", "晋州", "霸州", "遵化", "藁城", "沙河", "高碑店", "黄骅", "鹿泉", "滦南", "承德县", "乐亭", "滦州市", "曹妃甸", "正定", "永年", "定州", "栾城", "磁县", "涉县", "临漳", "肥乡区", "成安", "昌黎", "易县", "安平", "宁晋", "赵县", "高阳", "新乐", "平山", "任丘", "平泉市", "丰宁", "宽城", "围场", "清河", "隆尧", "内丘", "南宫", "香河", "东光", "任县", "南和", "无极", "青县", "深州市", "威县", "泊头市", "南皮县", "河间市", "肃宁县", "献县", "隆化县", "深泽县", "大厂回族自治县", "迁西县", "玉田县", "固安县"],
                selectCity: "城市",

                searchWord: '',
                loading: false,
                searchOptions: []
            }
        },
        methods: {
            changeProvince(value) {
                this.selectProvince = value;
            },
            changeProvinceShow(flag) {
                this.showProvince = flag;
                this.showCity = false;
            },
            changeCity(value) {
                this.selectCity = value;
            },
            changeCityShow(flag) {
                this.showCity = flag;
                this.showProvince = false;
            },
            searchCity(query) {
                if (!query) {
                    this.searchOptions = [];
                    return
                }
                this.loading = true;
                setTimeout(() => this.loading = false, 200);
                this.searchOptions = ["石家庄", "保定", "廊坊", "唐山"];
            }
        },
        computed: {
            historyCity() {
                return this.$store.state.userInfo.historyCity;
            }
        }
    }
</script>

<style lang="scss">
    .page-change-city {
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
        border: 1px solid #E5E5E5;
        border-radius: 4px;

        margin-top: 20px;
        padding: 20px;

        > .el-row:not(:last-of-type) {
            padding-bottom: 20px;
            border-bottom: 1px solid #E5E5E5;;
        }

        .el-select {
            margin-left: 10px;
        }
    }
</style>
