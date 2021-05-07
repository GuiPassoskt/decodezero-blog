<template>
  <div>
    <banner />
    <section id="home">
      <div class="card">
        <ul class="left">
          <li>Certificado de Conclusão</li>
          <li>Suporte as Dúvidas</li>
          <li>Mais de 850 Aulas</li>
          <li>Crie projetos na prática</li>
        </ul>
        <ul class="right">
          <li>Total de Alunos: 11584</li>
          <li>Curtidas: 49.152</li>
          <li>Avaliações: 5/5 Estrelas</li>
          <li>Novo: WooCommerce Como CMS</li>
        </ul>
      </div>
    </section>
    <services />
    <semi-footer />
  </div>
</template>

<script>
import Banner from '@/components/Banner'
import SemiFooter from '@/components/home/SemiFooter'
import Services from '@/components/home/Services'
export default {
  name: 'Home',
  components: {
    Banner,
    SemiFooter,
    Services
  }
}
</script>

<style lang="scss" scoped>
#home {
  font-size: 0.875rem;
  line-height: 1.55;
  font-family: 'IBM Italic', monospace;
  letter-spacing: -0.01rem;
  font-style: italic;
  background: #1b1d20;
  color: #b0b2b3;
  height: 300px;
  .card {
    font-size: 0.875rem;
    line-height: 1.55;
    font-family: 'IBM Italic', monospace;
    letter-spacing: -0.01rem;
    font-style: italic;
    background: #282a2d;
    color: #b0b2b3;
    max-width: 37.5rem;
    padding: 1.875rem;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    top: -7.5rem;
    margin: 0 auto -3.75rem auto;
    -webkit-box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 16px 4px rgba(0, 0, 0, 0.3);
    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-right: 1px solid #0e1013;
      li {
        margin: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }
      li::after {
        content: '';
        width: 6px;
        height: 6px;
        background-image: linear-gradient(#ddff01, #2e0);
        border-radius: 50%;
        border: 2px solid #0e1013;
        position: relative;
        left: 4px;
        display: inline-block;
      }
      li::before {
        content: '';
        display: block;
        height: 2px;
        -webkit-transition: 0.3s;
        transition: 0.3s;
        width: 0px;
        position: absolute;
        background: #1b1d20;
        top: 0px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-left: 1px solid #0e1013;
      li {
        margin: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
      }
      li::before {
        content: '';
        width: 6px;
        height: 6px;
        background-image: linear-gradient(#ddff01, #2e0);
        border-radius: 50%;
        border: 2px solid #0e1013;
        position: relative;
        right: 4px;
        display: inline-block;
      }
    }
  }
}
@media (min-width: 360px) and (max-width: 480px) {
  #home .card {
    flex-wrap: wrap;
    width: 300px;
  }
}
</style>
