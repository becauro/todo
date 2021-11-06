# Front-End de um Todo List


### Introdução:

Esse é o código de uma aplicação básica de **Lista de Tarefas**.
Bora se organizar ?

[Clique aqui](https://becauro-todo-list.herokuapp.com/) e veja a aplicação funcionando em teu navegador, graças ao **Heroku**.

### Funcionalidades básicas:

* **Visualização** de todas tarefas;
* **Inserção** de tarefa;
* **Remoção** de tarefa da lista;
* **Atualização** de tarefa da lista;
* Cada tarefa possui um dos seguintes **status** editável: _pendente_, em _andamento_ ou _pronto_;

### Tecnologias usadas

* **React** 
* **Bootstrap**
* **CSS**

### Requisitos para configurar e rodar o projeto em modo desenvolvimento:

1. Ter **Node.js** para baixar as dependências via NPM.
2. Ter a **porta 3000** disponível ou configurar outra no package.json.
3. Ter um **Browser** como _Chrome_ ou _Firefox_ pra Interação com a Aplicação.

### Como configurar o projeto:

Um vez que no package.json já tem as dependências necessários, basta digitar um comando na pasta do repositório clonado:

    `npm install`

### Como executar o projeto:

1. `npm start`
2. Abrir o navegador e digitar: **http://localhost:3000**

### Sobre a estrutura do projeto:

Para fins de testes de desenvovimento e de forma temporária, depedendo do momento que esteja lendo esse Readme, foi usado _Local Storage_ para armazenamento dos dados (ou seja, fazendo o papel de um Banco de Dados) e também foi usado como intermediador de dados entre as páginas/componentes (Ou seja, subtituindo Redux).

Parte da Lógica, que seria em uma Camada Service de um backend, do modelo MSC, está no arquivo `src/services/api_localStorage.js`.

Foi usado, nesse projeto, apenas **Componentes Tipo Classe**.


## Futuras Features:

1. Ordenar tarefas por **Ordem alfabética**, **Data de Criação** ou **Status**.
2. Botão para _redirecionar_ para página de listagens de tarefas, ao invés fazer isso, automaticamente, após Criação ou Atualização de tarefas.
3. Botão para _desfazer as mudanças_ no formulario de atualização, antes de salvá-las.
4. **Cadastro** e **Login** de Usuários da plataforma, cada um tendo conta gereniamento de tarefas.

## Futuras Tecnologias :

1. **Redux** como intermediador, ao invés de localStorage.
2. BACKEND: **MongoDb** como Banco de Dados, ao invés de localStorage.
3. BACKEND: **Express** como API parar Banco de Dados e lógica de negócio, ao invés de um arquivo de API exportando funcões JS de métodos que manipulam LocalStorage. 
5. **Arquitetura MSC** para implantar os itens anteriores.
6. **JWT** para gerenciamento de permissões de usuários.


## Referencias:

* [Trybe Course](https://www.betrybe.com/)
* [Este Repositório](https://github.com/satansdeer/mern-crud)
* [Stackoverflow](https://stackoverflow.com/)
