# Front-End de um Todo List


### Introdução:

Esse é o código de uma aplicação básica de lista de Lista de Tarefas.
Bora se organizar ?

### Funcionalidades básicas:

* Visualização da lista de tarefas;
* Inserção de uma nova tarefa na lista;
* Remoção de uma tarefa da lista;
* Atualização de uma tarefa da lista;
* Cada tarefa possui um dos seguintes status editável: pendente, em andamento ou pronto;

### Tecnologias usadas

* **React** 
* **Bootstrap**
* **CSS**

### Requisitos para configurar e rodar o projeto em modo desenvolvimento:

1. Ter **Node.js** para baixar as dependência via NPM.
2. Ter a **porta 3000** disponível ou configurar outra no package.json.
3. Ter um **Browser** como _Chrome_ ou _Firefox_ pra Interação com a Aplicação.

### Como configurar o projeto:

Um vez que no package.json já tem as dependências necessários, basta digitar um comando na pasta do repositório clonado:

    `npm install`

### Como executar o projeto:

1. `npm start`
2. Abrir o navegador e digitar: **http://localhost:3000**

### Sobre a estrurura do projeto:

Para fins de testes de desenvovimento e de forma tempoária, depedendo do momento que esteja lendo esse Readme, foi usado _Local Storage_ para armazenamento dos dados (ou seja, fazendo o papel de um Banco de Dados) e também foi usado como um intermediador de dados entre as páginas e componentes (Ou seja, subtituindo Redux).

Parte da Lógica, que seria em uma Camada Service de um back-end, do modelo MSC, está no arquivo `src/services/api_localStorage.js`.

Foi usado nesse projeto, apenas Componentes Tipo Classe.


## Futuras Features:

1. Ordenar tarefas por Ordem alfabética, Data de Criação ou Status.
2. Botão para redirecinar para página de listagem ao invés de ir automaticamente após Criação ou Inserção de tarefas.
3. Botão de desfazer mudanção no formulario de UpdateTodo.
4. Cadastro e Login dos Usuários da plataforma, cada um tendo com sua seção de gereniamento de tarefas independentemente.

## Futuras Tecnologias :

1. **Redux** como intermediador, ao invés de localStorage.
2. BACKEND: **MongoDb** como Banco de Dados, ao invés de localStorage.
3. BACKEND: **Express** como API parar Banco de Dados e lógica de negócio, ao invés de um arquivo de API exportando funcões JS de métodos que manipulam LocalStorage. 
5. **Arquitetura MSC** para implantar os itens anteriores.
6. **JWT** para gerenciamento de permissões de usuários.
7. **Heroku** para armazenar o projeto em moedo "Produção".


## Referencias:

[Trybe Course](https://www.betrybe.com/)
[Este Repositório](https://github.com/satansdeer/mern-crud);
[Stackoverflow](https://stackoverflow.com/)
