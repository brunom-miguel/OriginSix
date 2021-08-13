
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