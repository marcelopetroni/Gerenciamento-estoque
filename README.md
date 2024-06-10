<h1 align="center">Gerenciamento Estoque</h1>

<div align="center">
  <h3> 
    <a href="https://gerenciamento-estoque.vercel.app">
      Acesse o site aqui
    </a>
  </h3>
</div>
<h3>1. Descrição</h3>
<p>O projeto foi desenvolvido em React.js - Vite + Sass e o backend foi implementado via back4app que contêm o banco de dados.</p>

![Captura de tela 2024-06-10 081706](https://github.com/marcelopetroni/Gerenciamento-estoque/assets/105806830/dad8052a-b63c-4e6f-933e-b15a02d1054e)

<h3>2. Proposta</h3>
<p>Este projeto visa permitir o gerenciamento de estoque para empresas e realizar operações CRUD (create, read, update e delete), permitindo que os administradores registrem e gerenciem produtos e funcionários. Apenas usuários autenticados têm acesso às funcionalidades do sistema, e há uma diferenciação de permissões entre administradores e funcionários.</p>

<h3>3. Funcionalidades</h3>
<ul>
  <li>Autenticação de usuários: Apenas usuários registrados podem acessar o sistema.</li>
  <li>CRUD de Produtos: Funcionalidades de criar, ler, atualizar e deletar produtos no estoque.</li>
  <li>Gerenciamento de Funcionários: Apenas administradores podem registrar novos funcionários e gerenciar suas informações.</li>
  <li>Logout: Botão para sair da sessão do usuário.</li>
</ul>
<h3>4. Demonstração</h3>
<p><b>Create:</b></p>
<p>É inserido os campos nome, código, descrição e preço e enviado para o banco de dados.</p>

![Captura de tela 2024-06-10 081728](https://github.com/marcelopetroni/Gerenciamento-estoque/assets/105806830/965e7e10-af52-4c4a-9822-f8c8bc11ce32)

<p><b>Read:</b></p>
<p>É feito uma solitação do tipo GET para exibir informações dos produtos em uma tabela.</p>

![Captura de tela 2024-06-10 081751](https://github.com/marcelopetroni/Gerenciamento-estoque/assets/105806830/43875f8d-67a0-49d7-8e42-174f1ffd50b4)

<p><b>Update:</b></p>
<p>É solicitado o código do produto e em seguida exibido uma página com os campos a serem inseridos novamente com novos valores.</p>

![Captura de tela 2024-06-10 081808](https://github.com/marcelopetroni/Gerenciamento-estoque/assets/105806830/c93f0ce4-a3c4-4a21-8de7-cf65d8b684f5)

<p><b>Delete:</b></p>
<p>É solicitado o código do produto e em seguida, se achado no banco de dados, é apagado.</p>

![Captura de tela 2024-06-10 081808](https://github.com/marcelopetroni/Gerenciamento-estoque/assets/105806830/7f216986-9799-40d3-ae56-c4d8384eacf1)

<p><b>Registrar Funcionários:</b></p>
<p>É inserido os campos nome, id, posição, username e senha e enviado para o banco de dados.</p>

![Captura de tela 2024-06-10 082118](https://github.com/marcelopetroni/Gerenciamento-estoque/assets/105806830/e1152250-ad84-4d69-a3bb-f94b2df21806)
