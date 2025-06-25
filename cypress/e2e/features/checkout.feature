Feature: Checkout

  Scenario: Iniciar checkout
    Given que tenho um produto no carrinho
    When clico em "Checkout"
    Then devo ver o formulário de informações

  Scenario: Preencher informações obrigatórias
    Given que estou na tela de informações do cliente
    When preencho nome "João", sobrenome "Silva" e CEP "12345"
    And clico em "Continue"
    Then devo ver o resumo da compra

  Scenario: Finalizar compra com sucesso
    Given que estou no resumo do pedido
    When clico em "Finish"
    Then devo ver a mensagem de sucesso
