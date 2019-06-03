<template>
    <div class="city-list">
        <dl>
            <dt>{{ title}}:</dt>
            <dd v-for="city in cities" :key="city">
                <router-link :to="{name:'index', params: {name: city}, query: {name: city}}">
                    {{city}}
                </router-link>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: "cityList",
        props: ['title', 'cities']
    }
</script>

<style lang="scss">

    .city-list {
        padding-top: 20px;
        dl {
            display: flex;
            align-items: center;
            dt {
                font-size: 16px;
            }
            dd {
                font-size: 14px;
                margin: 0 20px;
            }
        }
    }
</style>
