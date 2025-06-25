Feature: Carrinho de Compras

  Scenario: Adicionar produto ao carrinho
    Given que estou logado como "standard_user" com a senha "secret_sauce"
    When eu clico em "Add to cart" em um produto
    Then o carrinho deve indicar 1 item

  Scenario: Remover produto do carrinho
    Given que adicionei um produto ao carrinho
    When eu clico em "Remove"
    Then o carrinho deve indicar que está vazio

  Scenario: Validar itens no carrinho
    Given que adicionei dois produtos ao carrinho
    When acesso o carrinho
    Then devo ver os dois produtos com nome e preço
