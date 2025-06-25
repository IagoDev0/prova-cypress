import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('que tenho um produto no carrinho', () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get("#user-name").type("standard_user")
  cy.get("#password").type("secret_sauce")
  cy.get("#login-button").click()
  cy.get(".btn_inventory").first().click()
  cy.get(".shopping_cart_link").click()
})

When('clico em "Checkout"', () => {
  cy.get(".checkout_button").click()
})

Then('devo ver o formulário de informações', () => {
  cy.get("#first-name").should("be.visible")
  cy.get("#last-name").should("be.visible")
  cy.get("#postal-code").should("be.visible")
})

Given('que estou na tela de informações do cliente', () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get("#user-name").type("standard_user")
  cy.get("#password").type("secret_sauce")
  cy.get("#login-button").click()
  cy.get(".btn_inventory").first().click()
  cy.get(".shopping_cart_link").click()
  cy.get(".checkout_button").click()
})

When('preencho nome {string}, sobrenome {string} e CEP {string}', (nome, sobrenome, cep) => {
  cy.get("#first-name").type(nome)
  cy.get("#last-name").type(sobrenome)
  cy.get("#postal-code").type(cep)
})

When('clico em "Continue"', () => {
  cy.get(".cart_button").contains("Continue").click()
})

Then('devo ver o resumo da compra', () => {
  cy.get(".summary_info").should("be.visible")
})

Given('que estou no resumo do pedido', () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get("#user-name").type("standard_user")
  cy.get("#password").type("secret_sauce")
  cy.get("#login-button").click()
  cy.get(".btn_inventory").first().click()
  cy.get(".shopping_cart_link").click()
  cy.get(".checkout_button").click()
  cy.get("#first-name").type("João")
  cy.get("#last-name").type("Silva")
  cy.get("#postal-code").type("12345")
  cy.get(".cart_button").contains("Continue").click()
})

When('clico em "Finish"', () => {
  cy.get(".cart_button").contains("Finish").click()
})

Then('devo ver a mensagem de sucesso', () => {
  cy.contains("THANK YOU FOR YOUR ORDER").should("be.visible")
})
