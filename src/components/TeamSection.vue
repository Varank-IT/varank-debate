<template>
   <div id="ourteam">
   <div class="team">
        <SectionLabel label="Our Team!" />
        <SliderContainer>
            <Slide v-for="(member, index) in theTeam" :key="member" :info="member" :isActive="activeItem === index" @click="activeItem = index" />
        </SliderContainer>
    </div>
    </div>
</template>

<script>
import SectionLabel from './SectionLabel.vue';
import SliderContainer from './slider/SliderContainer.vue';
import Slide from './slider/Slide.vue';

const placeholderImageURL = new URL('../assets/placeholder.png', import.meta.url).href;

export default {
    name: 'TeamSection',
    components: {
        SectionLabel,
        SliderContainer,
        Slide
    },
    data:  () => ({
        theTeam: [
            {
                name: 'Eylül Kalkınan & Öykü Şensel',
                team: 'Co-Directors General',
                image: placeholderImageURL
            },
            {
                name: 'Bengü Kuzubaşoğlu & Elif Dilmaç',
                team: 'Co-Heads of PR',
                image: placeholderImageURL
            },
            {
                name: 'Alphen Biçersin & Maxim Coppieters',
                team: 'Head of IT',
                image: placeholderImageURL
            },
            {
                name: 'Defne Zeynep Göğremiş',
                team: 'Head of Academy',
                image: placeholderImageURL
            },
            {
                name: 'Irmak Öncel',
                team: 'Head of Finance',
                image: placeholderImageURL
            },
            {
                name: 'Berra Demir',
                team: 'Head of Administrative Staff',
                image: placeholderImageURL
            }
        ],
        activeItem: 2
    })
}
</script>

<style scoped>
.team {
    padding: 6vh 4vw;
}
</style>