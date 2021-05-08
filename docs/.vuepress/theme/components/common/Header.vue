<template>
  <div>
    <div id="header">
      <label for="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <nav class="container">
        <a href="#">
          <img
            src="https://raw.githubusercontent.com/GuiPassoskt/guipassoskt.github.io/master/img/42.png"
            alt
          />
        </a>
        <ul class="navbar">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <a href="#">Quem sou eu</a>
          </li>
          <li>
            <a href="#">O que faço</a>
          </li>
          <li>
            <router-link to="/portfolio">Portfólio</router-link>
          </li>
          <li>
            <router-link to="blog">Blog</router-link>
          </li>
          <li>
            <router-link to="contact">Contato</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <header class="top-header">
      <div class="overlay">
        <div class="container">
          <img :src="$site.logo" alt />
          <div class="block" v-if="$site.title">
            <h1 class="title is-2">
              <a href="/" class="has-text-white">{{ $page.title }}</a>
            </h1>
          </div>
          <h1 class="title is-1" v-else>
            <a :href="$site.path" class="has-text-white">{{ $site.title }}</a>
          </h1>
          <h2 class="subtitle has-text-white">{{ $site.description }}</h2>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      pages: {
        categories: [],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#header {
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  z-index: 1000;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px;
    ul {
      background: transparent;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      li {
        margin-left: 10px;
        a {
          display: block;
          color: #fff;
          font-family: "IBM Italic", monospace;
          text-transform: uppercase;
          letter-spacing: 2px;
          word-spacing: -5px;
          padding: 10px;
        }
        a:hover {
          color: #aa88ff;
        }
      }
    }
  }
}
#header label {
  margin: 0 40px 0 0;
  font-size: 32px;
  display: none;
}

#header #toggle {
  display: none;
}
@media (min-width: 360px) and (max-width: 480px) {
  #header label {
    cursor: pointer;
    color: #fff;
    display: block;
    font-size: 32px;
    position: absolute;

    right: -15px;
    transform: translate(-20%, 25%);
  }

  #header input {
    position: absolute;
    top: 0;
    right: 0;
  }
  #header nav {
    justify-content: center;
    padding: 0;
    a {
      padding: 10px;
      img {
        margin-left: -25px;
      }
    }
  }
  #header nav ul {
    flex-wrap: wrap;
    justify-content: center;
    display: none;
    li {
      flex: 1 200px;
      text-align: center;
      margin: 0;
    }
  }
  #toggle:checked + .container .navbar {
    display: block;
    top: 99%;
    border-top: 1px solid #0e1013 !important;
    position: absolute;
    background: #0e1013;
    width: 100%;
    margin: 0;
    transform: translateY(0%);
    transition: all 500ms ease;
  }
}
</style>