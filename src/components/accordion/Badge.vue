<template>
    <span class="badge">{{ number }}</span>
</template>

<script>
export default {
    name: 'Badge',
    props: {
        number: Number
    }
}
</script>

<style scoped>
.badge {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
    text-align: center;
    background: #E91E63;
    color: #fff;
    font-size: 12px;
    margin-right: 20px;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none !important;
}
</style>