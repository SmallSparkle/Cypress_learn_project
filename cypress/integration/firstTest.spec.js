// it('By id', () => {
//     cy.visit("https://facebook.com/")
//     cy.get("#email")
// });

// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax")
//     cy.get(".DocSearch-Button-Placeholder")
// });

// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax")
//     cy.get("nav")
// });

// it('By Tag Value', () => {
//     cy.visit("https://facebook.com/")
//     cy.get("[name='pass']")
// });

// it.only('By Diferent Tag', () => {
//     cy.visit("https://facebook.com/")
//     cy.get("[data-testid='open-registration-form-button'][role='button']")
// });

it('Using Get with Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get("tbody").find("td").find("div").find("button").eq("0")
});

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/cypress-api/custom-commands#Syntax")
    cy.get(".scrollactive-nav").find("li").find("a").eq("0")
});