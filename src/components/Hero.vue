<template>
    <section class="landing-section">
        <table id="top_part">
            <tr>
                <td id="landing" class="animated fadeIn" style="animation-delay:1s;">
                    <h1>The official website of the first Varank Debating Championship. Stay tuned!
                    </h1>
                    <button class="btn_one">Sign Up Today</button><br>
                    <!--<table>
                        <tr>
                            <td class="animated zoomIn" style="animation-delay:2.6s;"><a class="social"><i
                                        class="fab fa-instagram"></i></a></td>
                        </tr>
                    </table> -->
                </td>
                <!-- <td id="rightImage" class="animated jackInTheBox" style="animation-delay:2.2s;"></td> -->
            </tr>
        </table>
    </section>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style scoped>
#top_part {
    /*    width: 50%; */
    margin-left: auto;
    margin-right: auto;
}

/*#top_part tr td .button {
    width: 50%;
}*/

#landing {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding: 0px 10%;
}

#landing h1 {
    font-size: 45px;
    /*    word-wrap: break-word; */
    text-align: center;
}

#landing table {
    /*   width: 70%; */
    margin-top: 4vh;
}

#landing table tr td {
    /*   width: 20% !important; */
    text-align: left;
}

/* .social {
    color: rgb(255, 44, 90);
    font-size: 23px;
    padding: 12px 17px;
    border-radius: 50%;
    background: transparent;
    transition: 0.4s ease-in-out;
    font-weight: bold;
    margin: 0px 8px;
}

.social:hover {
    cursor: pointer;
    color: #fff;
    background: rgb(255, 44, 90);
    box-shadow: 0px 10px 30px rgba(255, 66, 107, 0.8);
}
*/
.btn_one {
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: rgb(255, 44, 90);
    background: #fff;
    border: 3px solid rgb(255, 44, 90);
    padding: 8px 40px;
    /*    width: %; */
    border-radius: 80px;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    transition: 0.4s ease-in-out;
}

.btn_one:hover {
    box-shadow: 0px 10px 30px rgba(255, 44, 90, 0.8);
    cursor: pointer;
    color: #fff;
    background: rgb(255, 44, 90);
}

@media (max-width: 1000px) {

    #top_part {
        border: 0px;
    }

    #top_part tr td {
        width: 100%;
        text-align: center;
    }

    #landing {
        width: 92% !important;
        height: 75vh;
        padding-top: 20vh !important;
        text-align: center;
        padding: 0px 4%;
    }

    #landing table {
        width: 100%;
        margin-top: 6vh;
    }

    #landing table tr td {
        text-align: center;
    }

    .btn_one {
        padding: 6px 30px;
        width: 60%;
        margin: 4vh auto;
        box-shadow: 0px 10px 20px rgba(255, 44, 90, 0.8);
        background: rgb(255, 44, 90);
        color: #fff;
    }

    .btn_one:hover {
        box-shadow: 0px 10px 40px rgba(255, 44, 90, 0.8);
        cursor: pointer;
    }
}


/*
#rightImage {
    width: 100%;
    height: 95vh;
    background: linear-gradient(0deg, rgba(255, 44, 90, 0.8), rgba(2255, 44, 90, 0.8)), url("https://images.unsplash.com/photo-1506057527569-6a0285b2fcc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=60") center center;
    background-size: cover;
    background-repeat: no-repeat;
}
*/
</style>