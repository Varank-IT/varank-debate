<template>
    <h1>{{ label }}</h1>
</template>

<script>
export default {
    name: 'SectionLabel',
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
h1 {
    margin: auto;
    border-bottom-width: auto;
    border-bottom-style: solid;
    border-bottom-color: rgb(255, 44, 90);
    width: auto;
    text-align: center;
}
</style>