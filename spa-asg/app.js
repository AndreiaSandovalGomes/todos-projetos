//
// const router = new Router({
//   mode: 'history',
//   page404: (path) => {
//     const html = errorTemplate({
//       color: 'yellow',
//       title: 'Error 404 - Page NOT Found!',
//       message: `The path '/${path}' does not exist on this site`,
//     });
//     el.html(html);
//   },
// });
//
// router.add('/', () => {
//   let html = pageTemplate();
//   el.html(html);
// });
//
// router.add('/products', () => {
//   let html = productsTemplate();
//   el.html(html);
// });
//
// router.add('/list', () => {
//   let html = listTemplate();
//   el.html(html);
// });
//
// $('a').on('click', (event) => {
//   // Block browser page load
//   event.preventDefault();
//
//   // Highlight Active Menu on Click
//   const target = $(event.target);
//   $('.item').removeClass('active');
//   target.addClass('active');
//
//   // Navigate to clicked url
//   const href = target.attr('href');
//   const path = href.substr(href.lastIndexOf('/'));
//   router.navigateTo(path);
// });
//
// // Navigate app to current url
// router.navigateTo(window.location.pathname);
//
//  // Highlight Active Menu on Refresh/Page Reload
// const link = $(`a[href$='${window.location.pathname}']`);
// link.addClass('active');



const btnBusca = document.getElementById('btn-busca');
btnBusca.addEventListener('click', trazBusca);
let docs = [];

function buscaPalavra(){
  return document.getElementById('campo-busca').value;
}

function erro(){
  console.log('erro');
}

function trazBusca(event){
  event.preventDefault();
  const pegarNoticia = new XMLHttpRequest();
  pegarNoticia.open('GET', `https://api.mercadolibre.com/sites/MLB/search?q=ferrari`);
  // pegarNoticia.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaPalavra()}&api-key=bb5941bcf6e44f729d49a6496198dc1e`);
  pegarNoticia.onload = carregaPost;
  pegarNoticia.onerror = erro;
  pegarNoticia.send();
}

function carregaPost(){
  docs  = JSON.parse(this.responseText)['results'];
  console.log(docs)
  exibePosts();
}

function exibePosts(){
  let search = document.getElementById('search');
  search.innerHTML = `
  <div class = 'area-noticia'>${docs.map(doc => `
    <div class='noticia'>
      <h3>${doc.title}</h3>
      <p>${doc.price}</p>

      <img src='${doc.thumbnail}'>
    </div>
    `).join('')}
  </div>`;
}
