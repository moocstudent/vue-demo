<template>
        <svg viewBox="0 0 600 300" class="small">
            <symbol id="id">
                <text dy="1em">{{showText}}</text>
            </symbol>
            <use class="text" xlink:href="#id"></use>
            <use class="text" xlink:href="#id"></use>
            <use class="text" xlink:href="#id"></use>
            <use class="text" xlink:href="#id"></use>
            <use class="text" xlink:href="#id"></use>
        </svg>
</template>

<script>
    export default {
        props: {
            showText: String,
        },
        data: function () {
            return {}
        },
        methods: {},
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            },


        }
    }
</script>

<style scoped>
    p {
        text-align: center
    }

    .text {
        vertical-align: middle; /*设置该元素在父元素中的位置*/
        font: 5em/1 Arial Rounded MT Bold;
        text-transform: uppercase;
        fill: none;
        stroke-width: 3;
        stroke-linejoin: round;
        stroke-dasharray: 70 330;
        stroke-dashoffset: 0;
        animation: stroke 6s infinite;
    }

    .text:nth-child(5n + 1) {
        stroke: #9fa8da;
        animation-delay: -1.5s;
    }

    .text:nth-child(5n + 2) {
        stroke: #9fa8da;
        animation-delay: -3s;
    }

    .text:nth-child(5n + 3) {
        stroke: #7986cb;
        animation-delay: -4.5s;
    }

    .text:nth-child(5n + 4) {
        stroke: #5c6bc0;
        animation-delay: -6s;
    }

    .text:nth-child(5n + 5) {
        stroke: #3f51b5;
        animation-delay: -7.5s;
    }

    @keyframes stroke {
        100% {
            stroke-dashoffset: -400;
        }
    }

    /*.big {*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*    border: black solid 1px;*/
    /*    position: absolute;*/
    /*    left: 150px;*/
    /*}*/
    .small {
        /*height: 200px;*/
        width: 60%;
        position: relative;
        left: 100px;
        top: 100px;
        margin-top: -50px;
        margin-left: -50px;
    }
</style>