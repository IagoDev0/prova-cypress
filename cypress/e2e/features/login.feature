Feature: Login e Logout

  Scenario: Login com credenciais válidas
    Given que estou na página de login
    When eu preencho usuário com "standard_user" e senha com "secret_sauce"
    And clico em login
    Then devo ver a página de produtos