<template>
  <section id="banner">
    <div class="container">
      <p>Desenvolvendo soluções para</p>
      <h1>o amanhã</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
#banner {
  background-image: url(~@/assets/img/banner/banner4.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.9);
  background-blend-mode: multiply;
  filter: grayscale(1);
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    h1 {
      text-align: center;
      color: #ffffff;
      font-size: 3rem;
      font-family: 'Rubik', sans-serif;
      font-weight: normal;
      line-height: 1.2;
    }
    h1::after {
      content: '|';
      opacity: 1;
      margin-left: 10px;
      display: inline-block;
      -webkit-animation: blink 1s steps(5, start) infinite;
      animation: blink 1s steps(5, start) infinite;
    }
    p {
      font-family: 'IBM Italic', monospace;
      font-style: italic;
      color: #b0b2b3;
    }
  }
}
</style>
