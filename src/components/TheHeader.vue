<template>
    <header id="header" class="animated slideInDown" :class="{ 'isScrolled': hasScrolled }" style="animation-delay:0.8s;">
        <table>
            <tr>
                <td id="logo">Varank Debate</td>
                <td id="navigation">
                    <a href="#bio">About</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact">Contact</a>
                </td>
            </tr>
        </table>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    data: () => ({
        hasScrolled: false
    }),
    methods: {
        handleScroll() {
            if (window.innerWidth >= 1000) {
                this.hasScrolled = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
            }
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
/* so this is how vue works -a*/ 
// yes, every vue component has 3 parts, a template for your haitch tee em el,z a script for your functional shit and a style for your styling shit -m
// also notice how scss can use // for comments -m
// that's awesome! -a
// pro tip: use ctrl+/ to automatically comment/uncomment something -m
// oh, thanks! -a

header {
    /* width: 92vw; */
    width: 100vw;
    /* padding: 6vh 4vw; */
    padding-top: 1.5vh;
    padding-bottom: 1.5vh;
    position: fixed;
    font-weight: bold;
    background: transparent;
    color: #fff;
    box-shadow: none;
    transition: 0.4s ease-in-out;
    z-index: 2;
}

header.isScrolled {
    background-color: #ffffff;
    color: #000000;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.09);
}


header table {
    width: 100%;
}

#logo {
    width: 20%;

    padding-left: 2vw;
}
/* i want to die */

#navigation {
    width: 80%;
    
    padding-right: 2vw;
}

#logo {
    font-size: 24px;
    color: rgb(255, 44, 90);
}

#navigation {
    text-align: right;
}

#navigation a {
    color: inherit;
    text-decoration: none;
    padding: 5px 10px;
    border-bottom: 2px solid transparent;
    margin-left: 4vw;
    transition: 0.4s ease-in-out;
}

#navigation a:hover {
    border-bottom: 2px solid #fff;
}
</style>