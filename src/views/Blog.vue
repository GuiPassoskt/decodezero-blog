<template>
  <section id="blog">
    <div class="section-title">
      <h1>Blog</h1>
      <p>Em breve mais informações</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style lang="scss" scoped>
#blog {
  padding-top: 0px;
  padding-bottom: 3.75rem;
  color: #b0b2b3;
  background: #282a2d;
}
#blog .section-title {
  background: #131518;
  padding: 1.875rem 0;
}
.section-title {
  text-align: center;
  color: #ffffff;
}
.section-title h1 {
  font-size: 2.25rem;
  font-family: 'Rubik', sans-serif;
  font-weight: normal;
  line-height: 1.2;
  font-weight: normal;
}
.section-title p {
  font-size: 0.875rem;
  line-height: 1.55;
  font-family: 'IBM Italic', monospace;
  letter-spacing: -0.01rem;
  font-style: italic;
}
</style>
