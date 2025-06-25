import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const login = () => {
  cy.visit("https://www.saucedemo.com/")
  cy.get("#user-name").type("standard_user")
  cy.get("#password").type("secret_sauce")
  cy.get("#login-button").click()
}

Given('que estou logado como {string} com a senha {string}', (usuario, senha) => {
  cy.visit("https://www.saucedemo.com/")
  cy.get("#user-name").type(usuario)
  cy.get("#password").type(senha)
  cy.get("#login-button").click()
})

Then('devo ver a lista de produtos', () => {
  cy.get(".inventory_list").should("be.visible")
})

When('clico no nome de um produto', () => {
  cy.get(".inventory_item_name").first().click()
})

Then('devo ver os detalhes desse produto', () => {
  cy.get(".inventory_details_name").should("be.visible")
  cy.get(".inventory_details_desc").should("be.visible")
  cy.get(".inventory_details_price").should("be.visible")
})

When('seleciono ordenação por {string}', (opcao) => {
  cy.get(".product_sort_container").select(opcao)
})

Then('os produtos devem estar em ordem alfabética', () => {
  cy.get(".inventory_item_name").then(($els) => {
    const nomes = [...$els].map(el => el.innerText)
    const ordenado = [...nomes].sort()
    expect(nomes).to.deep.equal(ordenado)
  })
})

Then('os produtos devem estar ordenados do mais barato ao mais caro', () => {
  cy.get(".inventory_item_price").then(($els) => {
    const precos = [...$els].map(el => parseFloat(el.innerText.replace("$", "")))
    const ordenado = [...precos].sort((a, b) => a - b)
    expect(precos).to.deep.equal(ordenado)
  })
})
