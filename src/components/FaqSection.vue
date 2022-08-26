<template>
<div id="faq"></div>
    <section class="faq-section">
        <div class="faq-warp">
            <SectionLabel label="FAQ" />
            <div class="container">
                <div class="row">
                    <div class="faq">
                            <AccordionItem v-for="(faq, index) in faqs" :key="faq" :info="faq" :badgeNumber="index + 1" />
                    </div>
                </div>
            </div>
        </div>    
    </section>  
</template>

<script>
import Badge from './accordion/Badge.vue';
import SectionLabel from './SectionLabel.vue'
import AccordionItem from './accordion/AccordionItem.vue';

export default {
    name: 'FaqSection',
    components: {
        Badge,
        SectionLabel,
        AccordionItem
    },
    data: () => ({
        faqs: [
            {
                question: 'When is the event taking place?',
                answer: 'Oct. 12-13'
            },
            {
                question: 'Where will the event be held?',
                answer: 'In our campus or some shit idk'
            },
            {
                question: 'But but but how much does it cost!!!',
                answer: 'I don\'t know but I can assure you that they aren\'t paying me enough'
            },
            {
                question: 'What is the quota?',
                answer: '60... for now ;)'
            }
        ]
    })
}
</script>

<style scoped>
.faq-section {
    min-height: 100vh;
    min-height: 50vh;
    font-weight: bold;
}

.faq-warp {
    padding: 6vh 4vw
}

.faq {
    background: #FFFFFF;
    box-shadow: 0 2px 48px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
}

@media (max-width: 1000px) {
    .faq {
        margin-bottom: 30px;
    }
}
</style>