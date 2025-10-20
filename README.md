# 🛒 Lista de Produtos — Projeto Express + Handlebars

Este é um exemplo simples de aplicação Node.js com **Express**, **Handlebars**, **Controllers** e **Routes**, desenvolvido para apresentação em laboratório.

---

## 🚀 Funcionalidades

- Renderiza uma **lista de produtos** com nome e preço.
- Usa `{{#each}}` para iterar produtos.
- Usa `{{#if}}` para destacar produtos em promoção.
- Estrutura com **controllers** e **routes.js** separados.
- Inclui **CSS** e **JavaScript** simples.
- Pronto para rodar localmente com `npm start`.

---

## 📁 Estrutura de pastas

```
lista-produtos-handlebars/
├── controllers/
│   └── homeController.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   └── home.handlebars
├── routes.js
├── server.js
├── package.json
└── README.md
```

---

## 🧠 Conceitos utilizados

| Conceito | Descrição |
|-----------|------------|
| **Express** | Framework para criar o servidor web. |
| **Handlebars** | Template engine usada para gerar HTML dinâmico. |
| **Controllers** | Arquivos que controlam a lógica de cada rota. |
| **Routes** | Define os caminhos e chama os controllers correspondentes. |
| **CSS/JS** | Arquivos estáticos servidos pela pasta `public/`. |

---

## ⚙️ Como executar o projeto

1. **Instale as dependências:**  
   ```bash
   npm install
   ```

2. **Execute o servidor:**  
   ```bash
   npm start
   ```

3. **Abra no navegador:**  
   [http://localhost:3000](http://localhost:3000)

---

## 💡 O que mostrar na apresentação

- Estrutura organizada (controllers, rotas, views).  
- Uso do Handlebars com `{{#each}}` e `{{#if}}`.  
- Funcionamento do CSS e JS.  
- Demonstração de execução no navegador.  

---

## 👨‍💻 Autor
Trabalho desenvolvido por **Eduardo Henrique** para disciplina de **Desenvolvimento Web com Node.js**.

