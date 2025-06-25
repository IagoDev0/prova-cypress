Feature: Produtos

  Scenario: Exibir lista de produtos após login
    Given que estou logado como "standard_user" com a senha "secret_sauce"
    Then devo ver a lista de produtos

  Scenario: Visualizar detalhes de um produto
    Given que estou logado como "standard_user" com a senha "secret_sauce"
    When clico no nome de um produto
    Then devo ver os detalhes desse produto

  Scenario: Ordenar produtos por nome (A-Z)
    Given que estou logado como "standard_user" com a senha "secret_sauce"
    When seleciono ordenação por "Name (A to Z)"
    Then os produtos devem estar em ordem alfabética

  Scenario: Ordenar produtos por preço (baixo para alto)
    Given que estou logado como "standard_user" com a senha "secret_sauce"
    When seleciono ordenação por "Price (low to high)"
    Then os produtos devem estar ordenados do mais barato ao mais caro
