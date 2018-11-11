

function Header() {
return (
<header>
<h2>Getting Started</h2>
<p>Descrição</p>
</header>
)
}

function MainSection() {
return (
  <section id='main' style={{width: '70%', float: 'left'}}>
    <h2>Main Section</h2>
    <Article title='Título 1' description="Descrição 1" />
    <Article title='Título 2' description="Descrição 2" />
    <Article title='Título 3' description="Descrição 3" />
  </section>

  // section(,
  //   h2(null, "Main Section"),
  //   Article({title: "Título 1", description: "Descrição 1"}),
  //   Article({title: "Título 2", description: "Descrição 2"}),
  //   Article({title: "Título 3", description: "Descrição 3"})
  // )
)

}

function Article(params) {
return (
  <article>
    <h3>{params.title}</h3>
    <p>{params.description}</p>
    <hr/>
  </article>
)
}

function Link(params) {
  return (
    <li>
      <a href={params.url}>
        {params.text}
      </a>
    </li>
  )
}

function clicou(){
  alert('oi')
}

class Aside extends React.Component {
  clicou(){
    alert('oi');
  }
render(){
return (
  <aside style={{width: '25%', float: 'right'}}>
    <h4>Links</h4>
    <button onClick={this.clicou}>Vai
    </button>
    <ul>
      <Link text='Link 1' url="http://www.playax.com"/>
      <Link text='Link 2'/>
      <Link text='Link 3'/>
      <Link text='Link 4'/>
    </ul>
  </aside>

)
}
}

function Page() {
return (
  <div>
    <Header />
    <MainSection />
    <Aside />
  </div>
)
}

ReactDOM.render(
Page(),
document.getElementById('container')
);
