# 🛒 Shopee Cart - Node.js

Sistema de carrinho de compras inspirado na Shopee, desenvolvido com **Node.js** e executado diretamente pelo terminal.

O projeto simula operações básicas de um carrinho de compras, permitindo adicionar, remover, excluir e alterar produtos, além de calcular automaticamente quantidades, subtotais e o valor total da compra.

---

## 📌 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos fundamentais de **JavaScript** e **Node.js**, aplicando organização de código, modularização e regras de negócio em uma aplicação simples executada no terminal.

Toda a lógica do carrinho é processada no backend, sem necessidade de interface gráfica.

---

## 🎯 Objetivo

Criar um sistema capaz de gerenciar produtos dentro de um carrinho de compras, simulando algumas das principais funcionalidades encontradas em plataformas de e-commerce.

O sistema permite:

* Criar produtos
* Adicionar produtos ao carrinho
* Identificar produtos existentes
* Aumentar quantidades
* Diminuir quantidades
* Alterar quantidades
* Remover unidades
* Excluir produtos completamente
* Calcular subtotal por produto
* Calcular quantidade total
* Calcular valor total do carrinho
* Exibir todas as informações no terminal

---

## 🚀 Funcionalidades

### ➕ Adicionar produtos

Produtos podem ser adicionados ao carrinho.

Caso o produto já exista, sua quantidade é atualizada automaticamente.

### ➖ Remover unidade

Permite diminuir uma unidade de determinado produto.

Caso reste apenas uma unidade, o produto é removido do carrinho.

### 🗑️ Excluir produto

Remove completamente um produto do carrinho, independentemente da quantidade.

### 🔄 Atualizar quantidade

Permite alterar diretamente a quantidade de determinado produto.

Caso a nova quantidade seja igual ou menor que zero, o produto é excluído.

### 💰 Calcular subtotal

Cada produto possui seu subtotal calculado através da fórmula:

```text
Subtotal = Preço × Quantidade
```

### 🧮 Calcular total

O sistema soma automaticamente os subtotais de todos os produtos.

### 📦 Calcular quantidade total

O sistema também calcula a quantidade total de itens existentes no carrinho.

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* JavaScript
* ES Modules
* Git
* GitHub

---

## 📂 Estrutura do Projeto

```text
shopee-cart-nodejs/
│
├── src/
│   ├── index.js
│   │
│   └── services/
│       ├── cart.js
│       └── item.js
│
├── .gitignore
├── package.json
└── README.md
```

---

## 📄 Arquivos Principais

### `src/index.js`

Arquivo principal da aplicação.

Responsável por:

* Criar o carrinho
* Criar produtos
* Executar operações
* Simular alterações
* Mostrar os resultados no terminal

---

### `src/services/item.js`

Responsável pela criação dos objetos que representam os produtos.

Cada produto possui:

```javascript
{
  name,
  price,
  quantity
}
```

Também possui uma função responsável pelo cálculo do subtotal.

---

### `src/services/cart.js`

Responsável pelas regras de negócio do carrinho.

Contém funções como:

```javascript
addItem()
removeItem()
deleteItem()
updateQuantity()
calculateTotal()
calculateTotalQuantity()
displayCart()
```

---

## 🧠 Conceitos Aplicados

Durante o desenvolvimento foram utilizados conceitos importantes do JavaScript:

* Funções
* Objetos
* Arrays
* Métodos de arrays
* Modularização
* Importação e exportação
* Template Strings
* Arrow Functions
* ES Modules
* Regras de negócio
* Separação de responsabilidades

Também foram utilizados métodos como:

```javascript
find()
findIndex()
reduce()
push()
splice()
toLowerCase()
toFixed()
```

---

## ▶️ Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/Ronaldo94-GITHUB/shopee-cart-nodejs.git
```

### 2. Entre na pasta

```bash
cd shopee-cart-nodejs
```

### 3. Verifique se o Node.js está instalado

```bash
node --version
```

### 4. Execute o projeto

```bash
npm start
```

---

## 📦 Dependências

O projeto utiliza apenas recursos nativos do JavaScript e Node.js.

Por isso, atualmente não possui dependências externas.

---

## 💻 Exemplo de Execução

```text
CARRINHO INICIAL

==============================
       SHOPEE CART
==============================

1. Mouse Gamer
Preço: R$ 100.00
Quantidade: 2
Subtotal: R$ 200.00

2. Teclado Mecânico
Preço: R$ 250.00
Quantidade: 1
Subtotal: R$ 250.00

3. Headset Gamer
Preço: R$ 180.00
Quantidade: 1
Subtotal: R$ 180.00

------------------------------
Quantidade total: 4
TOTAL: R$ 630.00
------------------------------
```

Depois o sistema executa outras operações, como:

```text
REMOVENDO 1 MOUSE
```

```text
ALTERANDO HEADSET PARA 3 UNIDADES
```

```text
EXCLUINDO TECLADO
```

Os valores e quantidades são recalculados automaticamente após cada operação.

---

## 🔄 Fluxo da Aplicação

```text
Usuário / Terminal
        │
        ▼
     index.js
        │
        ├──────────► item.js
        │             │
        │             └── Criação dos produtos
        │
        ▼
      cart.js
        │
        ├── Adicionar produto
        ├── Remover unidade
        ├── Excluir produto
        ├── Atualizar quantidade
        ├── Calcular subtotal
        ├── Calcular quantidade
        └── Calcular total
```

---

## 🏗️ Arquitetura

O projeto utiliza uma estrutura simples baseada em separação de responsabilidades.

```text
Aplicação
│
├── Execução
│   └── index.js
│
├── Produto
│   └── item.js
│
└── Carrinho
    └── cart.js
```

Essa organização facilita a manutenção e futuras evoluções do projeto.

---

## 📈 Possíveis Evoluções

O projeto pode futuramente receber novas funcionalidades, como:

* Menu interativo
* Cadastro de produtos pelo usuário
* Entrada de dados pelo terminal
* Cupons de desconto
* Sistema de promoções
* Cálculo de frete
* Diferentes formas de pagamento
* Persistência de dados
* Banco de dados
* API REST
* Fastify
* Express
* Autenticação
* Interface web
* Frontend com React
* Testes automatizados
* GitHub Actions
* Docker

---

## 🧪 Melhorias Futuras

Uma possível evolução seria transformar o projeto em uma API:

```text
Frontend
   │
   ▼
API Node.js
   │
   ├── Produtos
   ├── Carrinho
   ├── Pedidos
   └── Pagamentos
   │
   ▼
Banco de Dados
```

Isso permitiria transformar o projeto atual em uma aplicação de e-commerce mais completa.

---

## 📚 Aprendizados

O desenvolvimento deste projeto possibilitou praticar:

* Desenvolvimento backend com Node.js
* Organização de projetos JavaScript
* Manipulação de arrays e objetos
* Modularização
* Criação de regras de negócio
* Controle de versões com Git
* Publicação de projetos no GitHub

---

## 📌 Status do Projeto

```text
Projeto funcional ✅
Execução via terminal ✅
Controle de carrinho ✅
Cálculo automático ✅
Versionamento Git ✅
Repositório GitHub ✅
```

---

## 👨‍💻 Autores

**Ronaldo Augusto Sabino**

**Rogério Augusto Sabino**

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de aprendizado.

Licença utilizada:

**MIT**

---

⭐ Projeto desenvolvido para prática de **Node.js, JavaScript, lógica de programação e desenvolvimento backend**.
