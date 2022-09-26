<template>
    <section class="bio-section">
        <div id="bio">
            <SectionLabel label="About" />
            <p>
                VDebate is a Debate Championship that will be organized in the last quarter of 2022 and for the first
                time in the history of Varank
                Science High School. Participants eliminate their opponents by debating on
                the topics given to them.

                Be the First Champions of Varank Debate. Sign Up Today.
            </p>
        </div>
    </section>
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
#bio {
    font-size: 20px;
    margin-left: 17%;
    margin-right: 17%;
    text-align: center;
}
</style>
