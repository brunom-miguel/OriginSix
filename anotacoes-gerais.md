
# Mobile First Design Approach

## box-sizing: border-box

O **comportamento padrão** é somar o valor do *conteúdo* que definimos, com o valor do *padding*, *margin* e etc. Fazendo com que o conteúdo seja ainda maior.

Exemplo:

```CSS
  div {
    width: 100px;
    padding: 20px;
  }
```

A especificação acima fez com que a **largura** fosse do tamanho **140px** (100px do conteúdo + 20px padding esquerdo + 20px padding direito).

O **`box-sizing: border-box`** faz com que o valor do conteúdo que definimos, com o valor do *padding*, *margin* e etc seja subtraído, diminuindo o valor do conteúdo.

Exemplo:

```CSS
  div{
    box-sizing: border-box;
    width: 100px;
    padding: 20px;
  }
```

A especificação acima fez com que a **largura** total fosse do tamanho **100px** (60px do conteúdo + 20px padding esquerdo + 20px padding direito).

## Medida relativa

`rem` = root element

Tamanho de fonte padrão do navegador:

```CSS
:root {
  font-size: 100%; /* 16px */
}
```

O **`rem`** é uma medida relativa ao `root`, ou seja se definirmos `4.5rem` o tamnho sera *4.5 x 16px = 72px*. Se o tamanho da fonte alterar, muda também esse tamanho:

```CSS
:root {
  font-size: 100%;
}

.header {
  height: 4.5rem;
}
```

## Position 

### `relative`

Se um elemento está definido como `relative`, então o elemento sempre terá seu posicionamento de acordo com os valores de posição definidos, como:

* `right`;
* `left`
* `top`
* `bottom`

Relativos ao posicionamento normal, e seu movimento está ligado ao "scrolling" da página.

```CSS
#home .image img {
  position: relative;
  right: 2.93rem;
}
```

### `static`

Se um elemento está definico como `static`, então o elemento sempre terá a posição de acordo com o "flow" normal da página. Essa é a condição quando nada é definido como um elemento em uma página HTML. É o valor **`padrão`**. 

*A posição `static` não muda o posicionamento na página.*

### `fixed`

Se um elemento for definido como `static`, então o elemento sempre terá a posição que é **fixa** em relação ao ponto de vista ou à página. 

*Ele sempre reside no mesmo lugar, mesmo se rolarmos a página.*

### `absolute`

Apesas do nome ser `absolute` (absoluto), se um elemento for definido como `absolute` então ele sempre terá a posição relativa em relação ao seu elemento vizinho mais próximo em vez do ponto de vista ou página. Se não houver vizinho, ele será posicionado em relação ao corpodo documento e seu movimento está em contato com a rolagem da página.

### `sticky` 

Se um elemento está definido como `relative`, então o elemento sempre seguirá o "scroll" da página e "pegajoso" ao scrolling. Elementos `sticky` nunca deixam o usuário enquanto "scrolla" a página.

## `::before`

No CSS abaixo, criei uma "caixa" antes da classe `.image` na cor `red` com `position: absolute` na posição `top: 0`. Se eu não coloco a `position: relative` na classe `.image`, o elemento vermelho que criei ele ficaria na posição `top: 0` da página toda, com o relativo ele fica na posição `top: 0` da `<div class="image">`

```CSS
#home .image {
  position: relative;
}

#home .image::before {
  content: '';
  height: 2rem;
  width: 2rem;
  background: red;
  position: absolute;
  top: 0;
  z-index: 1;
}
```

## tag `a`

A tag `a`, assim como a `span`, tem como padrão `display: inline`. Por isso, não recebem definições de altura ou largura que extrapole o tamanho do conteúdo.

Com o atributo `display: block` o elemento passa a ter seu tamanho relacionado com o seu elemento pai, sendo assim, no exemplo abaixo, a largura do elemento a será a linha inteira da classe `.text`.

```CSS
main .section .container .text {
  width: 100%;
}
```

No entanto, se utilizarmos `display: inline-block`, o elemento tem comportamento de `inline` respeitando o limite do seu conteúdo, mas conseguimos (com o `block`) atribuir alturas e larguras que quisermos. Mas com o `display: inline-block` não consigo alinhar o elemento no centro.

Já com o `display: inline-flex`, além de conseguirmos as mesmas atribuições de altura e largura do `display: inline-block`, conseguimos alinhar o elemento ao centro.

## Object-fit

### `object-fit: cover`

Se usarmos `object-fit: cover;` a imagem mantém sua proporção e preenche a dimensão dada. A imagem será cortada para caber.

### `object-fit: contain`

Se usarmos `object-fit: contain;` a imagem mantém sua proporção, mas é redimensionada para se encaixar dentro da dimensão estabelecida.

### `object-fit: fill`

Se usarmos `object-fit: fill;` a imagem é redimensionada para preencher a dimensão dada. Se necessário, a imagem será *esticada* ou *espremida* para caber.

