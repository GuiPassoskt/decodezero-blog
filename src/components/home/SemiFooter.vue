<template>
  <div class="semi-footer">
    <div class="container">
      <div class="box">
        <h3>Menu</h3>
        <ul class="site-map">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Quem sou eu</a>
          </li>
          <li>
            <a href="#">O que faço</a>
          </li>
          <li>
            <a href="#">Portfólio</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
      <div class="box">
        <h3>Redes Sociais</h3>
        <ul class="social">
          <li>decodezero.io@gmail.com</li>
          <li>instagram.com/gui_pimpa</li>
          <li>youtube.com/origamid</li>
        </ul>
      </div>
      <div class="box">
        <h3>Contatos</h3>
        <ul class="contact">
          <li>Telefone: (31) 99937-9043</li>
          <li>decodezero.io@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemiFooter'
}
</script>

<style lang="scss" scoped>
.semi-footer {
  background: #0e1013;
  color: #ffffff;
  padding: 1.875rem 0;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    .box {
      h3 {
        font-size: 1.125rem;
        font-family: 'Rubik', sans-serif;
        font-weight: normal;
        line-height: 1.2;
        margin-bottom: 0.9375rem;
      }
      .site-map {
        display: grid;
        grid-template-columns: 110px 110px;
        grid-gap: 5px;
        li {
          font-family: 'Ibm Italic', monospace;
          font-size: 0.87rem;
          line-height: 1.55;
          margin-bottom: 0.625rem;
          a {
            color: #b0b2b3;
          }
          a:hover {
            color: #aa88ff;
          }
          a:before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            border: 2px solid #0e1013;
            margin-right: 6px;
            background: linear-gradient(#c1f, #70e);
          }
        }
      }
      .contact,
      .social {
        li {
          color: #b0b2b3;
          font-family: 'Ibm Italic', monospace;
          font-size: 0.87rem;
          line-height: 1.55;
        }
      }
    }
  }
}
@media (min-width: 360px) and (max-width: 480px) {
  .semi-footer .container {
    flex-wrap: wrap;
    h3 {
      text-align: center;
    }
    .box {
      margin: 10px;
      .site-map {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
      }
      .social,
      .contact {
        display: grid;
        grid-gap: 20px;
      }
    }
  }
}
</style>
