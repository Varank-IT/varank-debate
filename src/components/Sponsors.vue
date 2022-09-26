<template>
    <section id="clients" class="wow fadeInUp">
        <div class="container">

            <header class="section-header">
                <h3 class="sponsors">Our Sponsors</h3>
            </header>

            <div class="owl-carousel clients-carousel">
                <img src="img/sponsors/golf.jpg" alt="foto">
                <img src="img/sponsors/aves.jpg" alt="foto">
                <img src="img/sponsors/doz.jpg" alt="foto">
                <img src="img/sponsors/suptex.jpg" alt="foto">
                <img src="img/sponsors/telemden.jpg" alt="foto">
                <img src="img/sponsors/cocacola.jpg" alt="foto">
            </div>

        </div>
    </section>
</template>

<style scoped>
#clients {
    padding: 60px 0;
}

#clients img {
    max-width: 100%;
    opacity: 0.5;
    transition: 0.3s;
    padding: 15px 0;
    background-color: rgba(255, 255, 255, 255);
}

#clients .sponsor {
    width: 15px;
    height: 0px;
}

#clients img:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 255);
}

#clients .owl-nav,
#clients .owl-dots {
    margin-top: 5px;
    text-align: center;
}

#clients .owl-dot {
    display: inline-block;
    margin: 0 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #CCCCCC;
}

@media(max-width: 500px) {
    #clients .sponsors {
        font-size: 35px;
    }
}

#clients .owl-dot.active {
    background-color: #930000;
}
</style>