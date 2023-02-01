# Boas vindas ao exercício Formulário com Redux


## Parte 01 - Implementando o Redux

Crie a estrutura de pastas necessária para a implementação do Redux. A estrutura é opcional e você pode implementar da forma que desejar, mas abaixo deixamos uma sugestão.

<details>
  <summary>
    Sugestão de estrutura de pastas:
  </summary>

- Crie a pasta `src/redux` para agrupar todos os arquivos relacionados ao Redux;
- Crie a pasta `src/redux/actions/` para armazenar as `actions` do projeto;
- Crie a pasta `src/redux/reducers` para armazenar os `reducers` do projeto;
- Crie o arquivo `src/redux/index.js`, que será o arquivo responsável por criar e exportar a `store` da aplicação.
- Implemente o `reducer`.
- Implemente a `store`.
- Implemente as `actions`.

</details>

👀 **De olho nas dicas:**

- De início, você pode implementar seu reducer apenas com o valor `default`;
- O `composeWithDevTools` pode te ajudar a visualizar as etapas do **_Redux_**;
- Lembre-se que, ao montar a estrutura do Redux, é preciso importar o `Provider`, que recebe a `store`, no `index.js`;
- Caso tenha dificuldade para montar a estrutura do Redux, você pode consultar o **Checklist do Redux com React**, na seção 7 dia 3;
- Faça as importações corretas para o bom funcionamento da sua aplicação.

## Parte 02 - Salvando as informações

Salve as informações das páginas `PersonalForm` e `ProfessionalForm` na `store`

👀 **De olho na dica:**  

- Lembre-se que o `mapStateToProps` lê as informações da `store` e a função `dispatch` envia as informações para a `store`;
- Lembre-se que para acessar o `dispatch` nas _props_ e o estado mapeado pela `mapStateToProps` você precisa _conectar_ sua aplicação e o componente ao _Redux_.

## Parte 03 - Renderizando as informações

Renderize as informações que estão salvas na `store` em `FormDataDisplay`

---
