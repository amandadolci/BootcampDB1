# Repositório aula GitHub

## Primeira aula

- Contexto teórico
- Instalação e configuração inicial
  - `git config --global user.name "meuUsuario"` _configurar nome de usuário_
  - `git config --global user,email "meuEmail@mail.com"` _configurar e-mail_
  - `git --help` _verificar comandos possíveis_
- Primerios comandos

### Primeira atividade

- Criar um arquivo em JS que dado o array de valores [2, 4, 3, 1, 6, 7, 9], retorne quais são pares
- Alterar o arquivo README.md
- Gerar o commit
- Enviar para o GitHub

## Segunda aula

- Conventional commits
- Branches
- Git flow
- Merge/pull request

### Segunda atividade

- Criar um commit que refatore (trocar o nome das variáveis, melhorar o console.log) o código do arquivo "pares.js"
- Criar um novo arquivo que implemente a solução para o problema: dado um array de valores [9, 4, 5, 10, 2, 90, 8, 6, 33] exiba quais são os maiores que 20. Crie um commit separado para este arquivo
- Crie outro commit para atualizar o arquivo de documentação README.md

### Terceira atividade

- Criar um Pull Request da development para a main
- Ir para a branch Main local e atualiza-la
- Criar uma nova branch a partir dela (atividade-soma)
- Alterar o arquivo user.js, criando mais um usuário e exibindo as informações dele
- Deletar o arquivo maiores20.ts
- Criar um novo arquivo que retorne a soma dos itens de um array
- Fazer o commit
- Fazer o pull request da branch atividade-soma para a main
- Resultado esperado: o código implementado na branch atividade-soma e na branch development devem estar na branch main

## Terceira aula

- Git log
- Conflitos
  - Merge e rebase
- Cherry pick

### Primeira Atividade

- Ir para a branch main
- Criar uma nova branch chamada "calc"
- Criar um commit que: edite o arquivo pares.js, crie um novo arquivo "calc.js" e implemente soma, subtração, divisão e multiplicação para 2 números (deixar os números fixos no código mesmo). Imprimir os resultados
- Criar outro commit que edite o arquivo README.md, adicionando as informações aprendidas sobre conflitos e gitlog
- Fazer o push
- Voltar para a branch main "edit-readme"
- Criar uma nova branch que tenha um commit para editar o arquivo README e editar o arquivo pares.js
- Fazer o push
- Fazer o merge da branch "calc" na branch "edit-readme" e aceitar o código da branch "calc"
- Fazer o pull request da branch calc para a main
