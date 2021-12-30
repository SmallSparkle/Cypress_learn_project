/// <reference types='Cypress' />

var url = "https://next.privat24.ua/mobile?lang=en"

it("SOULD", () => {
    cy.visit(url)
    cy.get("[data-qa-node='amount']")
        .type(100)
        .should('have.value', 100)
        .and('be.visible');
})

it("EXPECT", () => {
    cy.visit(url)
    cy.get("[data-qa-node='amount']")
        .type(100)
        .then(input=> {
            expect(input).to.have.value(100)
        });
})

it("Check defolt value for Deposits", () => {
    cy.visit("https://next.privat24.ua/deposit/open?lang=en")
    cy.get("[data-qa-value='UAH']")
        .should('be.checked');
})

it("Check is visible Archive link", () => {
    cy.visit("https://next.privat24.ua/deposit/open?lang=en")
    cy.contains("Мої депозити")
        .trigger('mouseover')
        .get("#archiveDeposits")
        .should('be.visible');
})

it("Check is correct attr in button", () => {
    cy.visit("https://next.privat24.ua?lang=en")
    cy.contains("Show cards")
        .should('have.attr', 'type')
        .and('match', /button/);
})

it.only("Check is correct attr in button", () => {
    cy.visit("https://next.privat24.ua?lang=en")
    cy.url()
        .should('eq', 'https://next.privat24.ua/?lang=en');
})