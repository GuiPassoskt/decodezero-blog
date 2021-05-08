module.exports = {
  title: "Decode Zero",
  description: "Blog de conteúdos para devs.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css",
      },
    ],
  ],
  themeConfig: {
    logo: "https://guipassoskt.github.io/img/42.png",
    nav: [
      // { text: 'Início', link: '/' },
      // { text: 'Posts', link: '/posts/' },
      { text: "Portifolio", link: "/portifolio/" },
    ],
    sidebar: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Mais",
        path: "/mais",
      },
      {
        title: "Posts",
        children: [
          "/posts/closures",
          "/posts/como_capturar_imagem_da_webcam_com_canvas",
          "/posts/detectar_links_em_strings",
          "/posts/diferenca_entre_for_in_e_for_of",
          "/posts/every",
          "/posts/extrair_numero_de_strings",
          "posts/fetch",
          "/posts/forcar_parametros_obrigatorios",
          "/posts/mascara_em_strings",
          "/posts/observando_mudancas_em_objetos",
          "/posts/obter_o_maior_e_o_menor_numero_do_array",
          "/posts/some",
          "/posts/upload_de_arquivos_com_js_puro",
          "/posts/vuejs_com_typescript",
        ],
      },
    ],
    repo: "https://github.com/GuiPassoskt/decodezero.git",
    repoLabel: "Github",
    docsRepo: "https://github.com/GuiPassoskt/decodezero.git",
    docsDir: "docs",
    docsBranch: "dev",
    editLinks: true,
    sidebarDepth: 1,
    //editLinkText: 'Ajude a atualizar essa página!'
  },
};
