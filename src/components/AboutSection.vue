<template>
<div id="about">
    <section class="bio-section">
        <div id="bio">
            <SectionLabel label="About" />
            <p>
                Hello there! Are you a 15 year + white person losing your argument on Twitter? Are you tired of being
                outsmarted by your teenage followers? Try VDebate! It's an IRL Twitter simulator with more than 50
                participants that last for 2 days!
            </p>
        </div>
    </section>
</div>    
</template>

<script>
import SectionLabel from './SectionLabel.vue'

export default {
    name: 'AboutSection',
    components: {
        SectionLabel
    }
}
</script>

<style scoped>
#about {
    width: 92vw;
    padding: 6vh 4vw;
    font-weight: bold;
}
</style>

