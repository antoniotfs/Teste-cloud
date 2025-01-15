# Gerenciador de Empresas

Este projeto é uma aplicação web para gerenciar empresas, permitindo listar, criar, editar e excluir registros de empresas. Foi desenvolvido utilizando React no frontend e uma API REST no backend.

## Tecnologias Utilizadas

### Frontend
- **React**: Framework para construção da interface de usuário.
- **React Router**: Para navegação entre páginas.
- **Formik**: Para gerenciamento de formulários.
- **Yup**: Para validação de formulários.
- **Axios**: Para realizar chamadas à API.
- **CSS Customizado**: Para estilização responsiva.

### Backend
- A aplicação espera uma API REST em `http://localhost:5000/api/companies` com os seguintes endpoints:
  - `GET /companies`: Retorna a lista de empresas.
  - `POST /companies`: Cria uma nova empresa.
  - `PUT /companies/:id`: Atualiza uma empresa existente.
  - `DELETE /companies/:id`: Exclui uma empresa.

## Funcionalidades

1. **Listar Empresas**
   - Exibe uma tabela com nome, CNPJ, endereço, telefone e ações (Editar e Excluir).

2. **Criar Nova Empresa**
   - Formulário para criar uma nova empresa.

3. **Editar Empresa**
   - Formulário com preenchimento automático dos dados existentes da empresa para edição.

4. **Excluir Empresa**
   - Botão para excluir empresas diretamente na tabela de listagem.

## Estrutura do Projeto

### Componentes Principais

1. **CompanyList**
   - Lista todas as empresas e permite navegar para criar ou editar registros.

2. **CompanyForm**
   - Componente reutilizável para criar e editar empresas.

3. **EditPage**
   - Página que utiliza o `CompanyForm` para criar ou editar uma empresa com base no ID fornecido pela URL.

### Estilização
- O CSS está dividido em classes responsivas para garantir uma boa experiência em dispositivos de diferentes tamanhos.

## Requisitos de Instalação

Certifique-se de ter o Node.js e o npm instalados.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-empresas.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd gerenciador-empresas
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## Como Usar

1. Acesse o projeto no navegador em `http://localhost:3000`.
2. Navegue entre as páginas para listar, criar, editar e excluir empresas.

## API Esperada

A API deve seguir o seguinte modelo para uma empresa:

```json
{
  "_id": "64b0c9ecf1f3f8a1e4d9d8f6",
  "name": "Empresa X",
  "cnpj": "00.000.000/0000-00",
  "address": "Rua ABC, 123",
  "phone": "(11) 99999-9999"
}
```

## Melhorias Futuras

- Implementação de paginação na lista de empresas.
- Modal de confirmação ao excluir uma empresa.
- Testes unitários e de integração.
- Implementação de autenticação.

