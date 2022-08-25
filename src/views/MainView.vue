<template>
    <div class="container">
        <Hero />
        <AboutSection />
        <TeamSection />
        <FaqSection />
        <ContactsSection />
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import Hero from '../components/Hero.vue';
import AboutSection from '../components/AboutSection.vue';
import TeamSection from '../components/TeamSection.vue';
import FaqSection from '../components/FaqSection.vue';
import ContactsSection from '../components/ContactsSection.vue';

export default {
    name: 'MainView',
    components: {
    TheHeader,
    Hero,
    AboutSection,
    TeamSection,
    FaqSection,
    ContactsSection
}
}
</script>

<style scoped>
.container {
    height: 100%;
}
</style>