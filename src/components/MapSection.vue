<template>
    <section class="map-section">
        <div class="map-frame">
            <div class="map">
                <SectionLabel label="Location" />
                <table>
                    <tr>
                        <td>
                            <div id="inner_div">
                                <table id="inner_table">
                                    <tr>
                                        <td><i class="fas fa-phone"></i> &nbsp; number</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-at"></i> &nbsp; email</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fas fa-map-marker-alt"></i>
                                            <div id="address">
                                                Aydınevler Mahallesi<br>
                                                Saygı Caddesi, No: 28<br>
                                                Maltepe/İstanbul
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.3233333091694!2d29.124876851287386!3d40.95249513070231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6880b8786f5%3A0x1da8998bd491da0b!2s%C5%9Eehit%20%C4%B0lhan%20Varank%20High%20School%20of%20Science!5e0!3m2!1sen!2str!4v1664199525623!5m2!1sen!2str"
                    width="450" height="300" style="border:0;" allowfullscreen="true" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</template>

<script>
import SectionLabel from './SectionLabel.vue';

export default {
    name: 'MapSection',
    components: {
        SectionLabel
    }
}
</script>

<style scoped>
.map {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5vh;
    padding-left: 12vw;
    padding-right: 12vw;
    padding-top: 5vh
}

@media (max-width: 1000px) {
    .map {
        flex-direction: column;
    }
}

#contact {
    width: 92vw;
    padding: 6vh 4vw;
}


#contact table {
    width: 100%;
}

#contact table tr td {
    width: 50%;
}


#inner_div table {
    width: 100%;

}

#inner_div table tr td {
    font-weight: bold;
}

#inner_table tr td {
    padding: 10px 50px !important;
}

#contact form {
    width: 100%;
}

#contact form input {
    width: 96%;
    margin: 20px 1%;
    background: transparent;
    border: 0px;
    border-bottom: 3px solid rgba(255, 44, 90, 0.5);
    padding: 8px 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    transition: 0.4s ease-in-out;
    color: #000;
    font-weight: bold;
}

#contact form textarea {
    width: 96%;
    margin: 20px 1%;
    padding: 8px 10px;
    border: 0px;
    border-bottom: 3px solid rgba(255, 44, 90, 0.5);
    padding: 8px 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    background: transparent;
    resize: none;
    transition: 0.4s ease-in-out;
    color: #000;
    font-weight: bold;
}

#contact form input:focus {
    outline: none;
    border-bottom: 3px solid rgba(255, 44, 90, 1);
}

#contact form textarea:focus {
    outline: none;
    border-bottom: 3px solid rgba(255, 44, 90, 1);
}

#address {
    position: relative;
    top: -25px;
    left: 30px;
}
</style>