<template>
    <div id="app" :style="appStyle">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data() {
            return {
                appStyle: {}
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                this.appStyle.width = `${window.innerWidth}px`;
                this.appStyle.height = `${window.innerHeight}px`;
            }
        },
        watch: {}
    }
</script>

<style lang="scss">
    @import "./common/common.scss";

    #app {
        overflow: hidden;
        position: fixed;
        @include t_r_b_l();
    }
</style>
