<template>
    <div class="mul-select"
         :class="{'disable': disable}"
         @click="show">
        <span>{{value}}</span>
        <i class="el-icon-caret-bottom"></i>
        <div class="selection"
             v-if="showSelection"
             :style="{width: itemCols.length * 90 + 15 + 'px'}">
            <h4>{{title}}</h4>
            <div class="col-wrapper">
                <div class="item-col" v-for="(col,idx) in itemCols" :key="idx">
                        <span :class="{active:name === value}"
                              v-for="name in col" :key="name"
                              @click="change(name, $event)">{{name}}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "mulSelect",
        props: ["value", "title", "options", "showSelection", "disable"],
        data() {
            return {}
        },
        computed: {
            itemCols() {
                const res = [];
                for (let i = 0, end = this.options.length; i < end; i += 12) {
                    res.push(this.options.slice(i, i + 12));
                }
                return res;
            }
        },
        methods: {
            change(value, e) {
                e.stopPropagation();
                this.$emit("changeValue", value);
                this.$emit("changeShow", false);
            },
            show(e) {
                if (this.disable) {
                    return;
                }
                e.stopPropagation();
                this.$emit("changeShow", true);
            }
        },
        mounted() {
            document.addEventListener("click", () => this.$emit("changeShow", false), false)
        }
    }
</script>

<style lang="scss">


    .mul-select {
        display: inline-block;
        cursor: pointer;

        &.disable {
            cursor: not-allowed;
        }

        box-sizing: border-box;
        position: relative;
        padding: 10px 0 10px 10px;
        margin: 0 10px 0 20px;
        width: 150px;
        height: 40px;
        border-radius: 4px;
        border: 1px solid #E5E5E5;
        font-size: 14px;
        color: #666666;

        .el-icon-caret-bottom {
            height: 10px;
            position: absolute;
            right: 4px;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
        }

        .selection {
            z-index: 666;
            border-radius: 4px;
            cursor: default;
            background-color: #fff;
            box-sizing: border-box;
            position: absolute;
            top: calc(100% + 10px);
            padding: 20px 0 20px 15px;
            height: 375px;
            width: 15px + 160px;
            border: 1px solid #E5E5E5;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);

            h4 {
                font-size: 16px;
                color: #CCC;
                margin-bottom: 11px;
            }

            .col-wrapper {
                .item-col {
                    display: flex;
                    flex-direction: column;
                    float: left;

                    span {
                        cursor: pointer;
                        font-size: 12px;
                        box-sizing: border-box;
                        padding: 1px 8px;
                        margin: 0 38px 6px 0;

                        &:hover {
                            color: #13D1BE;
                        }

                        &.active {
                            background: #13D1BE;
                            border-radius: 10px;
                            color: #fff;
                        }
                    }
                }
            }

            &:before, &:after {
                position: absolute;
                content: "";
                left: 26px;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
            }

            &:before {
                top: -7px;
                border-bottom: 6px solid #E5E5E5
            }

            &:after {
                top: -5px;
                border-bottom: 6px solid #fff;
            }
        }
    }

</style>
