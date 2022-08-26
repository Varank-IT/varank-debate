<template>
<div id="contact">
        <h1>Contact</h1>
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
                                        -<br>
                                        -<br>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>/

<style scoped>
#contact {
    width: 92vw;
    padding: 6vh 4vw;
}

#contact h1 {
    padding: 5px 0px;
    border-bottom: 4px solid rgb(255, 44, 90);
    width: 10%;
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
    padding: 10px 20px !important;
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

#contact table tr td {
        width: 100%;
        display: block;
    }

    #inner_table tr td {
        padding: 10px 0px !important;
    }

    #contact form input {
        width: 90%;
    }

    #contact form textarea {
        width: 90%;
    }

</style>

