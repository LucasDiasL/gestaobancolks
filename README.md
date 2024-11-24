# Bancolks

Este projeto é um exemplo de aplicação Java utilizando Hibernate e JPA para gerenciar entidades de um banco.

## Estrutura do Projeto

O projeto contém as seguintes entidades:

### Bancolks

Representa um cliente do banco com os seguintes atributos:
- `nome`: Nome do cliente (obrigatório, até 100 caracteres)
- `login`: Login do cliente (obrigatório, até 100 caracteres)
- `email`: Email do cliente (obrigatório, até 100 caracteres)
- `telefone`: Telefone do cliente (obrigatório, até 15 caracteres)
- `endereco`: Endereço do cliente (até 200 caracteres)
- `dataCadastro`: Data e hora do cadastro do cliente (obrigatório)

### Transferencia

Representa uma transferência entre contas com os seguintes atributos:
- `contaOrigem`: Conta de origem da transferência (obrigatório)
- `contaDestino`: Conta de destino da transferência (obrigatório)
- `valor`: Valor da transferência (obrigatório)
- `dataTransferencia`: Data e hora da transferência (obrigatório)

A entidade `Transferencia` também possui métodos para obter o valor da transferência e os titulares das contas de origem e destino:
- `getValor()`: Retorna o valor da transferência.
- `getTitularContaOrigem()`: Retorna o nome do titular da conta de origem.
- `getTitularContaDestino()`: Retorna o nome do titular da conta de destino.

## Configuração

Certifique-se de que as dependências do Hibernate e JPA estão corretamente configuradas caso não esteja dicione as seguintes dependências ao seu `pom.xml` (para projetos Maven) ou `build.gradle` (para projetos Gradle):


