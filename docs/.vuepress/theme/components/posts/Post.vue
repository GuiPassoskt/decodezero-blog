<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-12-mobile is-9-desktop">
          <div class="columns">
            <div class="column is-10">
              <h2 class="title is-4">{{ $page.title }}</h2>
            </div>
            <div class="column">
              <div class="badge is-primary">{{ $frontmatter.date | formatDate }}</div>
            </div>
          </div>
          <div class="box">
            <article class="content">
              <Content />
            </article>

            <!-- Your share button code -->
            <!-- <div class="fb-share-button" data-href="{{ $page.url }}" data-layout="button"></div> -->
          </div>
          <!-- <div>{% include ads_common.html %}</div> -->
        </div>
        <div class="column is-12-mobile is-3-desktop">
          <h4 class="title is-5">Artigos relacionados</h4>
          <div class="box">
            <aside class="menu">
              <div v-for="(category, index) in $site.pages" :key="index">
                <p class="menu-label">{{ category.title }}</p>
                {{ category.$frontmatter }}
                <!-- {% for post in site.categories[category] %}
                {% if post.url != page.url %}
                <li>
                  <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
                {% endif %}
                {% endfor %}-->
                <!-- <ul class="menu-list">
                  <li v-for="post in $site.pages[category]" v-if="post.url != $page.url">
                    <router-link :to="post.path">{{ post.title }}</router-link>
                  </li>
                </ul>-->
              </div>
            </aside>
          </div>
          <!-- <div>{% include ads_common.html %}</div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  computed: {
    dados() {
      this.$route.params
    }
  },
  filters: {
    formatDate(date) {
      console.log(date)
      let data = new Date(date)
      console.log(data)
      let dia = (data.getDate() + 1).toString()
      let diaF = dia.length == 1 ? '0' + dia : dia
      let mes = (data.getMonth() + 1).toString()
      let mesF = mes.length == 1 ? '0' + mes : mes
      let anoF = data.getFullYear()
      return diaF + '/' + mesF + '/' + anoF
    }
  }
}
</script>

<style lang="scss" scoped>
</style>