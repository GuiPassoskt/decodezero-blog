<template>
  <div>
    <Header />
    <!-- Conteudo -->
    <slot></slot>
    <!-- Fim Conteudo -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped></style>
