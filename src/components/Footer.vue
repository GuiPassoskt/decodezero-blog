<template>
  <div>
    <footer id="footer">
      <div class="container">
        <div class="row">
          <div class="col">
            <p>DecodeZero &copy; Todos os direitos reservados.</p>
          </div>
          <div class="col">
            <img src alt />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
#footer {
  background-image: linear-gradient(#9b30f9, #84e);
  padding: 1.875rem 0;
  color: #ffffff;
  width: 100%;
  position: relative;
  bottom: 0;
  .container {
    padding: 15px;
    max-width: 1200px;
    margin: 0 auto;
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .col {
        p {
          font-size: 0.875rem;
          line-height: 1.55;
          font-family: 'IBM Italic', monospace;
          letter-spacing: -0.01rem;
          font-style: italic;
        }
      }
    }
  }
}
@media (min-width: 360px) and (max-width: 480px) {
  #footer {
    .container {
      .row {
        .col {
          p {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
