<template>
    <div class="container" style="margin-top:50px;">
        <div class="row">
            <div class="col-5">
            </div>
            <div class="col-7">
                <p style="max-width: 450px;">Meet the pioneers of Varank's first ever Debate.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="carousel-team-card cards">
                    <Card image="https://cdn.pixabay.com/photo/2018/02/26/21/04/owl-3184032__340.jpg"
                        name="Öykü Şensel & Eylül Kalkınan" position="Directors General" />
                    <Card image=" https://cdn.pixabay.com/photo/2018/02/26/21/04/owl-3184032__340.jpg"
                        name="Bengü Kuzubaşoğlu & Elif Dilmaç" position="Co-Heads of PR" />
                    <Card image="https://cdn.pixabay.com/photo/2018/02/26/21/04/owl-3184032__340.jpg" name="Irmak Öncel"
                        position="Head of Finance" />
                </div>
                <button class="btn_one" v-if=" !show_more" @click="show_more = true">Show more</button>
                <div v-if="show_more" class="carousel-team-card cards">
                    <Card image="https://cdn.pixabay.com/photo/2018/02/26/21/04/owl-3184032__340.jpg"
                        name="Berra Melek Demir" position="Head of Administrative Staff" />
                    <Card image="https://cdn.pixabay.com/photo/2018/02/26/21/04/owl-3184032__340.jpg"
                        name="Alp Biçersin & Maxim Coppieters" position="Co-Heads of IT" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
    name: 'TeamSection',
    components: {
        Card
    },
    data: () => ({
        show_more: false
    })
}




</script>

<style lang="scss" scoped>
.carousel-team-card {
    // margin-top: 50px;
    margin-top: 1rem;
    width: 100%;
}

.cards {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    /* max-width: 820px; */
    /* max-width: 80%;*/
    gap: 1rem;
    flex-wrap: wrap;
}
</style>