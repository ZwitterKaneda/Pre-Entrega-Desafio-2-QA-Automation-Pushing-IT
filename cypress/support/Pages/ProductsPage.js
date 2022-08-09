/// <reference types="cypress" />

export class ProductsPage {
     

addProductToCart(product){
    cy.get(`[value='${product}']`).click();
  }

CloseModal(){
    cy.get('#closeModal').click();
}

goShoppingCart(){
    cy.xpath('//button//ancestor::button[@id="goShoppingCart"]').click();
}
};