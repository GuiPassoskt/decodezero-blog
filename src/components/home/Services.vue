<template>
  <section class="service">
    <h3>O que faço</h3>
    <p>SERVIÇOS E SOLUÇÕES</p>
    <div class="row">
      <div class="box">
        <div class="icon">
          <img src="~@/assets/img/icons/smartphone.svg" alt />
        </div>
        <span>Aplicativos</span>
        <p>
          Desenvolvimento de aplicativos híbridos ou nativo para Android e IOS
          programados em Ionic, Quasar ou React Native.
        </p>
        <button>Saiba mais</button>
      </div>
      <div class="box">
        <div class="icon">
          <img src="~@/assets/img/icons/site.svg" alt />
        </div>
        <span>Criação de Sites</span>
        <p>
          Desenvolvimento de Sites, HotSites, especialista em HTML, CSS,
          JavaScript, PHP, MySql.
        </p>
        <button>Saiba mais</button>
      </div>
      <div class="box">
        <div class="icon">
          <img src="~@/assets/img/icons/inovation.svg" alt />
        </div>
        <span>Inovação e StartUps</span>
        <p>
          Experiência no Ecosistemas de Startups e Desenvolvimento Rápido e
          Criativo.
        </p>
        <button>Saiba mais</button>
      </div>
    </div>
    <div class="row">
      <div class="box">
        <div class="icon">
          <img src="~@/assets/img/icons/blog.svg" alt />
        </div>
        <span>Criação de Blog</span>
        <p>
          Criação de blogs e sites para gestão de conteudo utilizando WordPress
          e Laravel.
        </p>
        <button>Saiba mais</button>
      </div>
      <div class="box">
        <div class="icon">
          <img src="~@/assets/img/icons/ecommerce.svg" alt />
        </div>
        <span>Loja Virtual / Ecommerce</span>
        <p>
          Criação de Loja Online, venda produtos ou receba pagamentos através da
          Internet.
        </p>
        <button>Saiba mais</button>
      </div>
      <div class="box">
        <div class="icon">
          <img src="~@/assets/img/icons/front-end.svg" alt />
        </div>
        <span>Desenvolvedor Front-End</span>
        <p>
          Especialista em HTML5, JavaScript, CSS, jQuery, BootStrap, AngularJS,
          Vue.js, React...
        </p>
        <button>Saiba mais</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="scss" scoped>
.service {
  position: relative;
  text-align: center;
  // background: url(~@/assets/img/icons/fundo.png) center no-repeat;
  background-color: #282a2d;
  background-position: center;
  padding: 15px;
  h3 {
    color: #b0b2b3;
    font-size: 48px;
    font-weight: normal;
    font-family: 'Rubik', sans-serif;
    background-image: url(~@/assets/img/bg-section.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 800px;
    margin: 0 auto;
  }
  p {
    font-family: 'IBM Italic', monospace;
    color: #b0b2b3;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 30px 10px;
    flex-wrap: wrap;
    .box {
      width: 300px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 10px;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      font-family: 'Rubik', sans-serif;
      color: #b0b2b3;
      margin: 15px;
      .icon {
        // background: #0e1013;
        border-radius: 4px;
        // box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
        width: 60px;
        height: 60px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 6rem;
      }
      p {
        font-size: 0.875rem;
        line-height: 1.55;
        font-family: 'IBM Italic', monospace;
      }
      button {
        background: transparent;
        border-radius: 30px;
        border: 1px solid #913af3;
        color: #913af3;
        font-size: 14px;
        padding: 10px 30px;
        display: inline-block;
        margin: 0 auto;
        letter-spacing: 2px;
      }
    }
  }
}
@media (min-width: 360px) and (max-width: 480px) {
  .service h3 {
    width: 100%;
    font-size: 30px;
  }
}
</style>
