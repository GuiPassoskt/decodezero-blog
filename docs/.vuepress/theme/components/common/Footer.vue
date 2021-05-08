<template>
  <footer>
    <div class="footer semifooter">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h5 class="title is-6">
              <strong>Onde estou na web?</strong>
            </h5>
            <ul>
              <li>
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <a :href="$site.github" rel="nofollow">Github</a>
              </li>
              <li>
                <span class="icon">
                  <i class="fab fa-stack-overflow"></i>
                </span>
                <a :href="$site.stackoverflow" rel="nofollow">Stackoverflow</a>
              </li>
              <li>
                <span class="icon">
                  <i class="fab fa-facebook"></i>
                </span>
                <a :href="$site.facebook" rel="nofollow">Facebook</a>
              </li>
            </ul>
          </div>
          <div class="column is-narrow">
            <h5 class="title is-6">
              <strong>Faça o seu site ou aplicativo com a gente!</strong>
            </h5>
            <a href="https://decodezero.surge.sh">
              <img src="https://raw.githubusercontent.com/GuiPassoskt/guipassoskt.github.io/master/img/42.png" alt="DecodeZero" title="WorDecodeZeroktab" width="200" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="footer">
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
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
</style>