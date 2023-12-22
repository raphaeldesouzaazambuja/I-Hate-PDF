# PDF Splitter

Este projeto em Node.js utiliza a biblioteca `pdf-lib` para dividir arquivos PDF em páginas individuais e organizá-las em subpastas de saída. Cada subpasta corresponde a um arquivo PDF de entrada, e cada página é salva como um novo arquivo PDF com um nome único.

O script foi criado a fim de facilitar um serviço de certa forma manual e desnecessário no laborátorio onde trabalho.

## Como usar

1. Certifique-se de ter o Node.js instalado em seu ambiente.
2. Clone o repositório:

```
git clone https://github.com/seu-usuario/pdf-splitter.git
```

- Navegue até o diretório do projeto:

```
cd pdf-splitter
```
    
- Instale as dependências(os pacotes):
    
```
npm install
```

- Execute o script:
    
```
node index.js
```

O script lerá os arquivos PDF da pasta de entrada(garanta que essa pasta exista e esteja no raíz), dividirá cada página e salvará os resultados na pasta de saída.

## Dependências

- pdf-lib: Biblioteca para manipulação de arquivos PDF em Node.js.
- fs.promises: Módulo nativo do Node.js para manipulação de arquivos.
- path: Módulo nativo do Node.js para manipulação de caminhos de arquivos.
- date-fns: Biblioteca para manipulação de datas em JavaScript.