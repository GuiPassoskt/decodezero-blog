<template>
  <div>
    <Header />
    <section class="section" style="flex: 2">
      <div class="container">
        <div class="block has-text-white" v-if="$route.path == '/'">
          <!-- <router-link  :to="category.path" class="tag is-primary is-medium"> -->
          <div class="columns is-multiline">
            <div
              class="column is-12-mobile is-6-tablet is-4-desktop"
              v-for="(category, index) in $site.pages"
              :key="index"
              v-show="category.path != '/' && category.path != '/posts/'"
            >
              <div class="card post-card" :to="category.path">
                <header class="card-header">
                  <p class="card-header-title post-card-title">
                    <router-link class="title is-6" :to="category.path">{{
                      category.title
                    }}</router-link>
                  </p>
                </header>
                <router-link class="card-image" :to="category.path">
                  <figure class="image is-4by3 post-card-cover">
                    <img
                      src="https://wallacemaxters.com.br/uploads/covers/canvas_webcam_html5.png"
                      alt="HTML5: Como capturar imagem da webcam com Canvas?"
                      title="HTML5: Como capturar imagem da webcam com Canvas?"
                      height="280"
                    />
                  </figure>
                </router-link>
                <div class="card-content post-card-content">
                  <div class="block post-card-description resume">
                    Nesse tutorial estaremos aprendendo como capturar uma imagem
                    de uma webcam, através do Canvas
                  </div>
                  <div class="block info">
                    <div class="is-pulled-right is-size-7 has-text-grey">
                      <span class="badge is-primary">{{
                        $site.pages[index].frontmatter.date | formatDate
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </router-link> -->
        </div>
        <Content v-else />
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Post from "./components/posts/Post";
export default {
  name: "Layout",
  components: {
    Header,
    Footer,
    Content: Post,
  },
  filters: {
    formatDate(date) {
      console.log(date);
      let data = new Date(date);
      console.log(data);
      let dia = (data.getDate() + 1).toString();
      let diaF = dia.length == 1 ? "0" + dia : dia;
      let mes = (data.getMonth() + 1).toString();
      let mesF = mes.length == 1 ? "0" + mes : mes;
      let anoF = data.getFullYear();
      return diaF + "/" + mesF + "/" + anoF;
    },
  },
};
</script>
<style lang="scss">
@import "./assets/scss/theme.scss";
</style>