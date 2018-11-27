<template>
    <div :style="styles" />
</template>

<script>
export default {
    name: 'SkeletonLoading',
    props: [
        'height'
    ],
    computed: {
        styles() {
            return {
                height: `${this.height || 18}px`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
        margin: 0 12px 14px;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background-image: -webkit-gradient(linear, left center, right center, from(#f6f7f8), color-stop(.2, #edeef1), color-stop(.4, #f6f7f8), to(#f6f7f8));
        background-image: -webkit-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
        background-size: 980px 898px;
        position: relative;
    }
    @keyframes placeHolderShimmer {
        0% {
            background-position: -490px 0,
        }
        100% {
            background-position: 490px 0,
        }
    }
</style>
