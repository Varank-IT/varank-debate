<template>
    <section class="container section-4">
      <!-- SPONSOR group 1 -->
      <div class="sponsor sponsor-1"><img src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/microsoft.svg" alt=""></div>
      <div class="sponsor sponsor-2"><img src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/apple.svg" alt=""></div>

      <!-- SPONSOR group 2 -->
      <div class="sponsor sponsor-3"><img src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/dell.svg" alt=""></div>
      <div class="sponsor sponsor-4"><img src="https://raw.githubusercontent.com/r-e-d-ant/Computer-store-website/b90ac65459206fef22e9b87313f587185554263b/assets/images/ibm.svg" alt=""></div>
    </section>
</template>

<script>
</script>


<style>
.section-4 {
  margin: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.sponsor img {
  cursor: pointer;
  width: 40px;
  height: 40px;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: opacity 300ms;
}
.sponsor img:hover {
  /* filter: grayscale(0); */
  opacity: 1;
}
</style>