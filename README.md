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

![npm-install-cypress](https://github.com/user-attachments/assets/f81690ea-f627-470b-9712-93dc2f12418d)


* Ainda no terminal, dentro da pasta do projeto, para abrir a interface do Cypress e executar os testes, use o comando:
```
npx cypress open
```
![npx-cypress-open](https://github.com/user-attachments/assets/6260a39a-0248-433d-9fb1-8004e4a63724)

#
* Arquivos '.cy.js' são arquivos de testes, ou seja, no exemplo abaixo temos 1 arquivo de execução de teste de Login:


![image](https://github.com/user-attachments/assets/767000f9-125d-44e0-af55-54a88c51a74d)


#

<h4 'login.cy.js' é um arquivo de teste que contém 8 casos de testes do cenário de login.</h4>


- Para executar o teste, basta clicar em cima do nome do arquivo
![exec-casos-de-teste](https://github.com/user-attachments/assets/861a5e35-a8a7-4e3d-ad08-fc560dd5d908)







