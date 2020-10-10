# API de Gestão de Produtos com Serverless - Product Management API with Serverless

Uma aplicação de API de gestão de produtos feita com Node.js e Serverless com CRUD feito no MongoDB.

A product management API application made with Node.js and Serverless with CRUD made in MongoDB.

# Instalação - Installation

1. Clone o repositório git clone `git@github.com:dev-mariana/projeto.git`.

   Use git clone in the repository git clone `git@github.com:dev-mariana/projeto.git`.

2. Entre no diretório e instale as dependências `npm install`.

   Access the directory of project and install the dependencies `npm install`. 
   
3. Instale o MongoDB `npm i mongodb`.

   Install the MongoDB `npm i mongodb`. 
   
4. Instale o Azure Functions Core Tools em seu computador `https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash`.

   Install the Azure Functions Core Tools in your computer `https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash`. 
  
5. Acesse o diretório do projeto e digite no terminal `func init` para inicializar o Serverless da Azure, e escolha a opção `Node`, depois escolha a linguagem `JavaScript`.

   Go to the project directory and type in the `func init` terminal to start Azure Serverless, and choose the` Node` option, then choose the `JavaScript` language.
   
6. Digite o comando `func new` para criar uma função, em seguida, escolha a opção correspondente a `HTTP Trigger`, e depois dê um nome para a função criada.

   Type the command `func new` to create a function, then choose the option corresponding to `HTTP Trigger`, and then give a name to the created function.
   
7. Use `func host start` para rodar a aplicação.

   Use `func host start` to run the application.
