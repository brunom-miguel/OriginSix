
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