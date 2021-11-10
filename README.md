# Front-end de um Todo List

### Introdução:

Esse é o código de uma aplicação básica de **Lista de Tarefas**.
Bora se organizar ?

[Clique aqui](https://becauro-todo-list.herokuapp.com/) e veja a aplicação rodando, graças ao **Heroku**.

**Observação**: Por ora não foquei em estética, está em desenvolvimento ainda.

### Funcionalidades básicas:

* **Visualização** de todas tarefas, ordenável por:
  * Tarefa
  * Status
  * Data de Criação
* **Inserção** de tarefa
* **Remoção** de tarefa
* **Atualização** de tarefa

### Dados de cada Tarefa:
* **Task**: Conteúdo da tareda em si.
* **status**: Situação de cada tarefa:
  * Pendente 
  * Em andamento
  * Pronto
* **Created**: Data de criação, gerada automáticamente.

### Tecnologias usadas

* **Java Script**
* **React** 
* **Bootstrap**
* **CSS**
* **Heroku**

### Requisitos para configurar e rodar o projeto em modo desenvolvimento:

1. Ter **Node.js** para baixar as dependências via NPM.
2. Ter a **porta 3000** disponível, menos que configure outra porta.
3. Ter um **Browser** compatível com as últimas tecnologias de mercado ( ex.: _Chrome_ ou _Firefox_) para interação com a interface da Aplicação.

### Como configurar as dependências do projeto:

Um vez que no arquivo `package.json` é listado as dependências necessárias, basta digitar o seguinte comando estando na pasta do repositório clonado:

    `npm install`

### Como executar o projeto:

1. Uma vez na pasta do projeto, basta executar o comando: `npm start`
2. Em seguida, abra o navegador e digite: **http://localhost:3000** (Essa é a porta padrão).

### Sobre a estrutura do projeto:

Para fins de testes de desenvolvimento e de forma temporária, dependendo do momento que esteja lendo este Readme, foi usado _Local Storage_ para:

* Armazenamento dos dados (ou seja, simulando o papel de um Banco de Dados e camada MODEL).
* Intermediar os dados entre as páginas/componentes (Ou seja, simulando o papel de um Redux e camada SERVICES).

O arquivo que armazena essas lógicas acima é o `src/services/api_localStorage.js`.

Nesse projeto foi usado apenas **Componentes Tipo Classe**.


## Futuras Funcionalidades:

1. Botão para _redirecionar_ para página de listagens de tarefas, ao invés fazer isso, automaticamente, após Criação ou Atualização de tarefas.
2. Botão para _desfazer as mudanças_ no formulario de atualização, antes de salvá-las.
3. **Cadastro** e **Login** de Usuários da plataforma, cada um tendo sau própria conta parar gereniamento de tarefas. Cadastro e login mesmo(de verdade), não uma validação de forms de tela de login (hehe). Para isso usarei a stack **MERN**.

## Futuras Tecnologias :

1. **Redux** como intermediador, ao invés de localStorage.

#### BACKEND (outro repo):

2. **MongoDb** como Banco de Dados, ao invés de localStorage.
3. **Express** como API parar Banco de Dados e lógica de negócio, ao invés de um arquivo de API exportando funcões JS de métodos que manipulam LocalStorage. 
5. **Arquitetura MSC** para implantar os itens anteriores.
6. **JWT** para gerenciamento de permissões de usuários.

## Referências:

* [Trybe Course](https://www.betrybe.com/)
* [Este Repositório](https://github.com/satansdeer/mern-crud)
* [Stackoverflow](https://stackoverflow.com/)
