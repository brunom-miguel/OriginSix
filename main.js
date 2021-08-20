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
// function
function changeHeaderWhenScroll() {
  // checar se o scroll no eixo Y (vertical) da janela inteira (window) é maior ou igual à altura do header (navHeight)
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do HEADER
    header.classList.add('scroll') // se for maior, vai adicionar a classe ".scroll" no elemento header
  } else {
    // scroll é menor que a altura do HEADER
    header.classList.remove('scroll') // se for menor, vai remover a classe ".scroll" no elemento header
  }
}

/* TESTIMONIALS CAROUSEL SLIDER SWIPER */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1, // quantos slides quero ver
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, // quando rodar o scroll do mouse
  keyboard: true, // quando operar com os teclados
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    1023: {
      slidesPerView: 3
    }
  }
})

/* SCROLLREVEAL: mostra elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top', // vai vir do "top"
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// BOTÃO 'BACK TO TOP'
//procuro a classe '.back-to-top' e coloco na const 'backToTopButton'
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  // se o eixo Y na PAGINA for maior que 560
  if (window.scrollY >= 560) {
    // adiciona classe '.show' na lista de classe do 'backToTopButton'
    backToTopButton.classList.add('show')
  } else {
    // senão, tira
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SESSÃO VISÍVEL NA PÁGINA */
// 'section[id]' = sections que tenham algum ID = '<section id='...'>
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  //window.pageYOffSet = "pega da pagina o deslocamento do eixo Y"
  /*além disso, vai pegar todo o tamanho da página (window.innerHeight) e divide por 8 (8 pedaços) */

  // o 'checkpoint' é o calculo do deslocamento do eixo Y somando com a divisão do tamanho da página por 8 multiplicado por 4
  //vai ver qual é o checkpoint do momento

  //(window.innerHeight / 8) * 4 = altura da pagina divida por 8 + 4, isso da, mais ou menos, na metade da página... então o checkpoint é na metade da pagina
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  // para cada sessão de sessões
  for (const section of sections) {
    const sectionTop = section.offsetTop //offSetTop = deslocamento do topo
    const sectionHeight = section.offsetHeight //offSetHeight = altura (seria deslocamento, mas é altura)
    //como 'section' faz referencia a um elemento html, posso chamar uma função para pegar um atributo dessa tag (que no caso é o 'id')
    const sectionId = section.getAttribute('id')

    //checkpointStart será 'true' se o checkpoint for MAIOR que o topo da sessão -> isso quer dizer que a sessão entrou na vista
    const checkpointStart = checkpoint >= sectionTop
    //checkpointEnd será 'true' se o checkpoint for MENOR que a soma do topo da sessão + a altura da sessão
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      //documento vai pegar o elemento <a> que tem um 'href' de valor que o sectionId tiver de valor (#home,#services, etc...)
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL */

// adiciono evento de 'scroll' passando todas as funções que são de 'scroll'
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
