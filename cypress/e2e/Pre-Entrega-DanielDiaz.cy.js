/// <reference types="cypress" />

import { HomePage } from "../support/Pages/HomePage"
import { LoginPage } from "../support/Pages/LoginPage"
import { ProductsPage } from "../support/Pages/ProductsPage"
import { ShoppingCartPage } from "../support/Pages/ShoppingCartPage"
import { RegisterPage } from "../support/Pages/RegisterPage"


describe('hooks everything', () => {
const homepage = new HomePage();
const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const shoppingCartPage = new ShoppingCartPage();
const registerPage = new RegisterPage();

let loginData, productsData;

before('hooks from json',()=>{

    cy.fixture('loginData').then(data =>{
        loginData = data
    });
    cy.fixture('productsData').then(Pdata =>{
        productsData = Pdata
    })

});

beforeEach('Ingreso',()=>{
    cy.visit('/');
    registerPage.DobleClick();
    loginPage.typeUser(loginData.username);
    loginPage.typePassword(loginData.password);
    loginPage.clickloginbutton();
    homepage.clickOnlineShop();

});
it('searching, adding, checking', () => {
    productsPage.addProductToCart(productsData.FirstProduct.name);
 //   productsPage.CloseModal();
    cy.CloseModal();
    productsPage.addProductToCart(productsData.SecondProduct.name);
 //   productsPage.CloseModal();
 cy.CloseModal();
    productsPage.goShoppingCart();
    shoppingCartPage.CheckProducts(productsData.FirstProduct.name);
    shoppingCartPage.CheckProducts(productsData.SecondProduct.name);
    shoppingCartPage.CheckPriceProducts(productsData.FirstProduct.price, productsData.FirstProduct.name);
    shoppingCartPage.CheckPriceProducts(productsData.SecondProduct.price, productsData.SecondProduct.name);
    shoppingCartPage.CheckFinalPrice(productsData.FirstProduct.price, productsData.SecondProduct.price);
});
});
