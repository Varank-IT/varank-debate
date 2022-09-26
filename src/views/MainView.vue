<template>
    <div class="container">
        <Hero />
        <AboutSection />
        <TeamSection />
        <FaqSection />
        <Day1Table />
        <Day2Table />
        <TransportationSection />
        <MapSection />
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import Hero from '../components/Hero.vue';
import AboutSection from '../components/AboutSection.vue';
import TeamSection from '../components/TeamSection.vue';
import FaqSection from '../components/FaqSection.vue';
import MapSection from '../components/MapSection.vue';
import Day1Table from '../components/Day1Table.vue';
import Day2Table from '../components/Day2Table.vue';
import TransportationSection from '../components/TransportationSection.vue';

export default {
    name: 'MainView',
    components: {
        TheHeader,
        Hero,
        AboutSection,
        TeamSection,
        FaqSection,
        Day1Table,
        Day2Table,
        MapSection,
        TransportationSection
    }
}
</script>

<style scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>