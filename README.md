<div align="center">
  <h1>
    Portal educacional da ProGirls
  </h1>
  <!--
<p>
  <img src="./docs/preview.png" alt="preview do projeto" width="80%">
</p>
  -->
</div>

<!-- 
🖼️ Preview

Adicione uma imagem ou GIF do sistema em funcionamento

Priorize:

Tela principal
Fluxo mais importante (ex: login, dashboard)
Salve a imagem na pasta /docs

✔ Dica: GIFs aumentam muito a qualidade do projeto
 -->

<p align="center">
  Aplicação frontend desenvolvida com React para [objetivo do sistema].
</p>

<p align="center">
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#estrutura">Estrutura</a> •
  <a href="#funcionalidades">Funcionalidades</a> •
  <a href="#como-executar">Como executar</a> •
  <a href="#variáveis-de-ambiente">Variáveis de ambiente</a> •
  <a href="#testes">Testes</a> •
  <a href="#integração-com-backend">Integração com Backend</a> •
  <a href="#padrões-e-arquitetura">Padrões e Arquitetura</a> •
  <a href="#licença">Licença</a> •
  <a href="#contribuidores">Contribuidores</a>
</p>

---

Este projeto foi desenvolvido para **agrupar cursos, materiais e eventos relevantes para a área de tecnologia**, permitindo **acesso facilitado e organizado** a todas as estudantes e membros da comunidade da ProGirls.

---

## Tecnologias

* React
* Vite
* Tailwind CSS
* Typescript
* JavaScript
* HTML
* CSS

---

## Estrutura

```bash
docs/                          # documentação do projeto
portal-progirls/               # aplicação React principal - A pasta raiz da aplicação frontend construída com React + TypeScript + Vite. Contém configurações do projeto, index.html e todas as dependências.
src/
 ├── public/                   # arquivos estáticos públicos - Imagens, ícones, fontes e outros arquivos que não são processados pelo bundler. Servidos como estão na aplicação.
 ├── assets/                   # arquivos estáticos (imagens, ícones) - Ativos da aplicação. Imagens, ícones, SVGs e outros recursos usados nos componentes. Importados diretamente no código.
 ├── components/               # componentes reutilizáveis
 ├── pages/                    # páginas da aplicação -componentes de página que representam rotas completas (Home), que levam para diferentes partes da UI
 ├── routes/                   # configuração de rotas para definir a estrutura de navegação e roteamento da aplicação
 └── styles/                   # estilos globais 
```
---

## Funcionalidades

* Liste funcionalidades **do ponto de vista do usuário**
* Foque em valor, não em implementação

✔ Exemplo:

* Listar com filtro (data, categoria, tipo, tema, etc)
- Conteúdo organizado por ordem de postagem
- Add tags para facilitar a navegação (tipo de conteúdo - documento, vídeo, live, etc.)
- Barra de Pesquisa
- Tags de Áreas (front, back, Cyber, dados, etc.)
- Abas separadas para: Roadmaps, Conteúdos e Eventos
- Filtro de busca
- Referências externas (cadastro, teste, etc)
  
* Temas: conteúdo dentro das áreas
* Página Home
* Página de categoria (categoria -> roadmap, workshop, eventos, etc)
* Página Sobre

``
Evite:
* "uso de React hooks"
* "consumo de API"
``

---
[PARA ATUALIZAR]
## Como executar

* Deve permitir que qualquer pessoa rode o projeto
* Teste o passo a passo antes de subir

Inclua:

* Clone
* Instalação
* Execução

✔ Se usar:

* `yarn` ou `npm`, atualizar comandos
* Docker, adicionar instruções extras

---

## Variáveis de ambiente

* Liste todas as variáveis necessárias
* Use nomes claros e padronizados

Para cada variável:

* Explique **o que ela representa**

✔ Exemplo:

* `VITE_API_URL` → URL base da API backend

Evite:

* Variáveis sem explicação
* Variáveis desnecessárias

---

## Testes

* Incluir apenas se o projeto possuir testes
* Garantir que o comando funciona

✔ Exemplo:

* `npm run test`

---

## Integração com Backend

* Informar o repositório da API
* Explicar como a comunicação acontece

Descrever:

* Autenticação (ex: JWT)
* Onde o token é armazenado
* Como as requisições são feitas

✔ Objetivo: mostrar visão de integração frontend + backend

---

## Padrões e Arquitetura

* Descrever decisões técnicas importantes

✔ Exemplos:

* Separação por responsabilidade
* Uso de hooks customizados
* Gerenciamento de estado

Evite:

* Explicações muito detalhadas ou técnicas demais
* Listar coisas óbvias

---

## Licença

<!-- TODO: linkar licença -->

Este projeto está sob a licença MIT.

---

## Contribuidores

- **Tech Leader:** [Natália](https://github.com/nataliatsi)
- **Frontend:** [Mariana Ferreira](https://github.com/ferreiramrs)

<!-- Adicione:
- Função (Frontend, Tech Lead, etc.)
- Nome
- Link do GitHub
-->

