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
  pegarNoticia.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${buscaPalavra()}&api-key=bb5941bcf6e44f729d49a6496198dc1e`);
  pegarNoticia.onload = carregaPost;
  pegarNoticia.onerror = erro;
  pegarNoticia.send();
}

function carregaPost(){
  docs  = JSON.parse(this.responseText)['response']['docs'];
  exibePosts();
}

function exibePosts(){
  let exibeBusca = document.getElementById('exibe-busca');
  exibeBusca.innerHTML = `
  <div class = 'area-noticia'>${docs.map(doc => `
    <div class='noticia'>
      <h3>${doc.headline.main}</h3>
      <p>${doc.smippet}</p>
      <a>href='${doc.web_url}'>link para original</a>
    </div>
    `).join('')}
  </div>`;
}
