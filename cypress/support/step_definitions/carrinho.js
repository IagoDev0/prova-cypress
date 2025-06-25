describe('Funcionalidade do Carrinho de Compras', () => {
  
 beforeEach(() => {
    cy.visit('/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').should('not.be.disabled').type('secret_sauce');
    
    cy.get('#login-button').click();
    cy.url().should('contain', '/inventory.html');
  });
  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_link').click();
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });

  it('Deve adicionar múltiplos produtos ao carrinho', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('#add-to-cart-sauce-labs-bike-light').click();
    cy.get('.shopping_cart_badge').should('have.text', '2');
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 2);
    cy.contains('.inventory_item_name', 'Sauce Labs Backpack').should('be.visible');
    cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').should('be.visible');
  });

  it('Deve remover um produto do carrinho', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('be.visible');
    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('.shopping_cart_badge').should('not.exist');
  });
});