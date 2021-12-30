/// <reference types = "Cypress" />

/* have priority:
input[type='submit']
button
a
lable
*/

var url = "https://next.privat24.ua/mobile?lang=en"

it("1", () => {
    cy.visit(url)
    cy.contains("Sign in");
})

it("2", () => {
    cy.visit(url)
    cy.contains("div", "Sign in");
})

it("3", () => {
    cy.visit(url)
    cy.contains("SIGN IN", {matchCase: false});
})
