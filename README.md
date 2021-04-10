# Desafio Real Protect

## Foram utilizadas as seguintes linguagens/ferramentas:
 * MongoDB
 * NodeJs
 * Javascript
 * ReactJs
 * CSS
 * HTML
 * Bootstrap
 * Visual Studio
 * Git
 * GitHub

  <hr/>  
  
##  Neste desafio foram pedidos os seguintes requisitos:   
 * Extrair as informações dos arquivos de log  
 * Salvar a informações tratadas
 * Criar uma API para acessar as informações salvas 
 * Criar métodos que possibilitem realizar filtros por período e por conteúdo da mensagem no padrão “Que Contenha” 
 * Exibir os dados através de interface web

<hr/>

##   Foram realizados 3 programas para cumprir esses pontos:  
1.  Um programa para ler o arquivo log e salvar em um banco de dados  
2.  Criação do back-end para ler o banco de dados e retornar via HTTP por um servidor  
3.  Criação da interface web para visualizar os dados  

  
<hr/>


Antes de iniciar esses passos é preciso instalar as dependências de cada programa e foi
usado apenas uma parte do arquivo log, por ser muito grande e demorar para carregar no servidor, 
mas ele pode ser alterado na pasta  ```'save_bd/index.js'```.

##  Salvando os dados ✏️
O programa consiste em ler cada linha do arquivo com os logs e salvar no banco de dados.
É preciso abrir o MongoDB e rodar o script do arquivo, dentro da pasta, com ```yarn start```.
Feito isso os dados serão salvos na memória.


##  Subindo o servidor 🚀
	
Para subir o arquivo você precisa entrar na pasta "back" e digitar o comando ```yarn start```, feito isso os 
dados serão exibidos em formado JSON na porta ativa.

##  Inicializando a interface Web 💻
Para inicializar o projeto você precisa entrar na pasta "front/app" e digitar o comando ```yarn start```, após
isso o site abrirá no seu navegador, na porta ativa, e mostrará os dados, conforme a imagem.

<img src="https://i.imgur.com/17YR8l5.png" > 

  
 ##  Video da aplicação rodando:
 <a href="https://www.youtube.com/watch?v=S9mJyDhtqx0">Link do video<a/>





