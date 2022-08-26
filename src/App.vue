<template>
  <TheHeader />
  <MainView />
  <TheFootie />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import MainView from './views/MainView.vue';
import TheFootie from './components/TheFootie.vue';
</script>

<style>
/* yayyy */
@import url('https://fonts.googleapis.com/css?family=Poppins');



body {
    font-family: 'Poppins', sans-serif;
    padding: 0px;
    margin: 0px;
    /* max-width: 100vw; */
    width: 100vw;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background-color: white;
}

.wife,
.women-in-general { /* excluding aegean chicks */
    right: 100%;
    margin: 0;
}

::placeholder {
    color: #000;
}

button:focus {
    outline: none;
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: rgb(0, 0, 0);
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.8);
}
</style>
