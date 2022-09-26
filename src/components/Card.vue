<template>
    <div class="carousel-team-card-cell">
        <div class="carousel-card-team">
            <div class="card-team-img">
                <img :src="image" alt="" />
            </div>
            <div class="card-team-name">
                <h3>{{ name }}</h3>
                <span>{{ position }}</span>
            </div>
            <div class="card-team-content">
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        image: String,
        name: String,
        position: String,
        desc: String
    }
}
</script>

<style lang="scss" scoped>
.carousel-team-card-cell {
    width: 32%;
    // margin: 0px 20px 20px 0;
    background: #661032;
    min-height: 400px;
    height: auto;
    border-radius: 10px;
}

.carousel-team-card-cell * {
    color: #ffffff;
}

.carousel-team-card-cell.doctor {
    background: red;
}

.carousel-team-card-cell.cardio {
    background: red;
}

.carousel-team-card-cell.physio {
    background: red;
}

.carousel-team-card .flickity-prev-next-button.previous {
    left: -50px;
}

.carousel-team-card .flickity-prev-next-button.next {
    right: -50px;
}

.carousel-team-card-cell .carousel-card-team {
    text-align: center;
    // border-radius: 10px;
}

.carousel-team-card-cell .card-team-img {
    width: 100%;
    // padding: 10px;
    margin: 20px auto 0;
}

.carousel-team-card-cell .card-team-img img {
    border-radius: 50%;
    border: 5px solid white;
    max-width: 150px;
    -o-object-fit: cover;
    -o-object-position: center;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 150px;
}

.carousel-team-card-cell .card-team-name {
    margin: 20px 0;
    padding: 0px 40px 0 40px;
}

.carousel-team-card-cell .card-team-content p {
    font-size: 14px;
    margin-bottom: 0;
}

.carousel-team-card-cell .card-team-content {
    margin: 0 40px 30px 40px;
    border-bottom: 1px solid white;
    padding-bottom: 30px;
}
</style>