<h1 align="center"> Projeto de automação com Cypress - SwagLabs (SauceDemo) </h1>

<p align="center">
<img src="https://img.shields.io/badge/CYPRESS-13.17.0-brightgreen"/>
<img src="https://img.shields.io/badge/LICENSE-MIT-green"/> 
</p>

<h4 align="center"> • Este repositório consiste em um projeto de testes automatizados utilizando Cypress, do site:
    https://www.saucedemo.com/v1/ </h4>

## 👉 Índice 

* [Índice](#-índice) - [Sobre o Projeto](#-sobre-o-projeto) - [Começando](#-começando) - [Acesso ao projeto](#-acesso-ao-projeto) - [Abrir e rodar o projeto](#️-abrir-e-rodar-o-projeto)

## ⚒ Sobre o Projeto
Este projeto tem como objetivo aplicar minhas habilidades em automação de testes utilizando Cypress para validar o cenário de login do site Swag Labs. Foco em garantir que o fluxo de autenticação funcione corretamente, cobrindo testes positivos (login com credenciais válidas) e negativos (erros ao usar credenciais inválidas ou ao deixar campos em branco). Além disso, busco aprimorar minhas práticas em escrita de código limpo, uso de Page Objects e geração de relatórios automatizados, tornando o processo mais eficiente e confiável.

## 🏁 Começando

![NodeV](https://img.shields.io/badge/NODE-20.17.0-blue)

O passo a passo para executar o projeto de testes automatizado com Cypress é muito simples, será necessário que você tenha o NodeJS instalado previamente. No meu caso, o NodeJS utilizado foi a versão 20.17.0.

## 📁 Acesso ao projeto

* No terminal, clone o repositório na sua máquina usando:
```
git clone https://github.com/byoirad/SwagLabs-Cypress-Automation.git 
```

## 🛠️ Abrir e rodar o projeto

* Lembre-se entrar na pasta do projeto e instalar as depedências com:
```
npm install cypress --save-dev
```

![npm-install-cypress](https://github.com/user-attachments/assets/d26d1f4f-28d0-45a2-a3b8-85cf4a7ae040)


* Ainda no terminal, dentro da pasta do projeto, para abrir a interface do Cypress e executar os testes, use o comando:
```
npx cypress open
```
![npx-cypress-open](https://github.com/user-attachments/assets/e20410f3-a0a3-4ba3-a22d-3b2d0450986d)

#
* Arquivos '.cy.js' são arquivos de testes, ou seja, no exemplo abaixo temos 1 arquivo de execução de teste de Login:


![2025-01-28_11-16](https://github.com/user-attachments/assets/44158fb2-3cb1-425a-a01b-afebaa6ee8d2)


#

<h4 'login.cy.js' é um arquivo de teste que contém 8 casos de testes do cenário de login.</h4>


- Para executar o teste, basta clicar em cima do nome do arquivo
  - Execução do testes automatizados:

![exec-casos-de-teste](https://github.com/user-attachments/assets/9a0dee49-0a9e-4efd-98b9-73a7db59a14b)








