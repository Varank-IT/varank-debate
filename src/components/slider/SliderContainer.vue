<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'SliderContainer'
}
</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    gap: 20px
}
</style>