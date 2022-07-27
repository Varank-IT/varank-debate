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
    padding: 5px 0px;
    border-bottom: 4px solid rgb(255, 44, 90);
    width: 8%;
}
</style>