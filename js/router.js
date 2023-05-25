export default class Router{
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page; //esse objeto receberá o routeName e o page que foram definidos anteriormente
  }

  route(event){ //trouxe a função route pra cá, porém sem a palavra function porque não precisa
    event = event || window.event //verificando se o evento ocorre ou não (se é true ou não)
    event.preventDefault() //prevenindo que a aplicação redirecione
    
    window.history.pushState({}, "", event.target.href) // adicionando o HREF na URL (porque antes ele só navega entre os arquivos)
    this.handle() //tem que usar o this para ser a referencia de algo dentro do par de chaves,
    }
 
    handle(){ //também trouxe a handle, sem a necessidade da palavra function
      const {pathname} = window.location
      const route= this.routes[pathname] || this.routes[404] //criou uma variável chamda route que vai receber a propriedade do objeto routes[propriedade]
      
      fetch(route)
      .then(dadosRoute=>dadosRoute.text()) //criou o fetch para pegar o route /pages/about.html //transformou o data em texto
      .then(retornoRoute=> {
         document.querySelector('#app').innerHTML = retornoRoute
      }) //depois criou um retorno com os dados obtidos no primeiro then (aqui mudei o nome das variáveis para ficar mais claro)
    
    
    
    }

}

