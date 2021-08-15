// DOM Document Object Model
// coloca o background do "body" na cor "vermelho"
//document.body.style.background = 'red'

/* ABRE E FECHA MENU QUANDO CLICAR NO ICONE*/

// fazendo JS procurar o seletor "#header nav" e colocar dentro da constante "nav"
const nav = document.querySelector('#header nav')
// JS procura TODOS os seletor ".toggle" dentro do <nav> e coloca dentro da constante "toggle"
const toggle = document.querySelectorAll('nav .toggle') //tem 2 elementos

//element = cada element é um dos elementos de "toggle" -> o nome ñ precisa ser "element"
for (const element of toggle) {
  //addEventListener = "adiciona um evento ouvinte", "peço para fazer algo por meio de uma ação"
  //function() = função anônima/sem nome
  //em resumo: quando eu clicar no elemento, faça a função...
  element.addEventListener('click', function () {
    //pegar o <nav>, na lista de CLASSES do <nav>, e fazer um "toggle()" (toggle = troca)
    nav.classList.toggle('show') // troca o "show" -> se tem, tira.. se não tem, coloca
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU */

// os itens do menu estão nos links que estão em <nav> -> <ul> -> <li> -> <a>
const links = document.querySelectorAll('nav ul li a')

// para cada link dentro de links (onde está aglomerdao todos os links, definidos na const)
for (const link of links) {
  link.addEventListener('click', function () {
    // pegar o <nav>, na lista de CLASSES do <nav> e REMOVER a classe ".show"
    // se eu consigo clicar nos links, é porque o menu já está aberto e, então, o ".show" está aparecendo
    nav.classList.remove('show')
  })
}

/* MUDAR HEADER DA PÁGINA QUANDO DER SCROLL */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight // offsetHeight = deslocamento do height/altura

// adicionando o evento "scroll" na janela inteira (window)
window.addEventListener('scroll', function () {
  // checar se o scroll no eixo Y (vertical) da janela inteira (window) é maior ou igual à altura do header (navHeight)
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do HEADER
    header.classList.add('scroll') // se for maior, vai adicionar a classe ".scroll" no elemento header
  } else {
    // scroll é menor que a altura do HEADER
    header.classList.remove('scroll') // se for menor, vai remover a classe ".scroll" no elemento header
  }
})
