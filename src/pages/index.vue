<template>
    <el-container>
        <el-header class="header flex">
            <div class="logo flex0">
                <span>后台管理系统</span>
            </div>
            <div class="top flex flex1">
                <div class="collapse flex0" @click="handleCollapse">
                    <i :class="[isCollapse?'el-icon-d-arrow-right':'el-icon-d-arrow-left']"></i>
                </div>
            </div>
        </el-header>
        <el-container :style="mainStyle">
            <el-aside class="aside" :style="asideStyle">
                <el-menu
                        :collapse="isCollapse"
                        background-color="#545c64"
                        text-color="#fff"
                        class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            <span slot="title">导航一</span>
                        </template>
                        <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    import http from "../lib/http"
    import {debug} from "../lib/util"

    export default {
        mixins: [],
        data() {
            return {
                isCollapse: false,
                mainStyle: {},
            };
        },
        computed: {
            asideStyle() {
                if (this.isCollapse) {
                    return {
                        width: "64px"
                    }
                }
            }
        },
        components: {},
        created() {
            this.init();
            this.demo();
        },
        mounted() {
        },
        beforeDestroy() {
        },
        watch: {},
        methods: {
            init() {
                this.mainStyle.height = `${window.innerHeight - 60}px`
            },
            demo() {
                http("/index/index", {}).then((res) => {
                    debug("demo", res);
                })
            },
            handleCollapse() {
                this.isCollapse = !this.isCollapse;
            }
        }
    };
</script>
<style lang="scss">
    @import "../common/common.scss";

    .header, .aside {
        background-color: #545c64;
    }

    .aside {
        transition: all .5s;
    }

    .el-menu {
        border-right: 0px none;
    }

    .logo {
        width: 300px;
        span {
            line-height: 60px;
            color: white;
            font-size: 20px;
        }
    }

    .collapse {
        cursor: pointer;
        line-height: 60px;
        font-size: 16px;
        color: white;
    }

    .aside {

    }
</style>
