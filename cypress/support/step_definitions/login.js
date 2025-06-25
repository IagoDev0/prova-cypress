import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const URL = "https://www.saucedemo.com/";

// Acesso à página de login
Given("que estou na página de login", () => {
  cy.visit(URL);
});

// Preenchimento de usuário e senha
When("eu preencho usuário com {string} e senha com {string}", (usuario, senha) => {
  cy.get('[data-test="username"]').type(usuario);
  cy.get('[data-test="password"]').type(senha);
});

// Clique no botão de login
When("clico em login", () => {
  cy.get('[data-test="login-button"]').click();
});

// Validação: estou na página de produtos
Then("devo ver a página de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get('.inventory_list').should("be.visible");
});