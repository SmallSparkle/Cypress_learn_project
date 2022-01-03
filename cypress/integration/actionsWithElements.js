/// <reference types = "Cypress" />

/*
.type() - ввести значение
.focus() - кликнуть в поле для ввода
.blur() -  вызов метода CSS подсветки поля некорректно отработавшего
.clear() - очистить поле
.submit() - подтвердить форму
.click() - кликнуть
.dblclick() - двойной клик
.rightclick() - клик правой кнопкой мыши
.check() - кликнуть чекбокс или радиобаттон
.uncheck() - анчек только чекбокса
.select() - выбор из списка
.scrollIntoView() - скрол к опр элементу
.cy.scrollTo() - скролить к опр координатам
.trigger() - событие позволяющее использывать определенный ивент
*/

it("type", ()=> {
cy.visit("https://next.privat24.ua/mobile?lang=en")
    .get("[data-qa-node='phone-number']")
    .type(112233344);
})

it("focus", ()=> {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
        .get("[data-qa-node='amount']")
        .focus();
})

it("blur", ()=> {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
        .get("[data-qa-node='amount']")
        .focus()
        .blur();
})

it("clear", ()=> {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
        .get("[data-qa-node='amount']")
        .type(999)
        .wait(2000)
        .clear()
})

it("submit", ()=> {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
        .get("form[method='post']")
        .submit();
})

it("click", ()=> {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
        .get("[data-qa-value='manual']")
        .click();
})

it("rightclick", ()=> {
    cy.visit("https://example.cypress.io/commands/actions")
        .get(".rightclick-action-div")
        .rightclick();
})

it("dblclick", ()=> {
    cy.visit("https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.Examples.html")
        .contains("My Card")
        .dblclick();
})

it("check", ()=> {
    cy.visit("https://example.cypress.io/commands/actions")
    cy.get(".action-checkboxes")
        .get("[value='checkbox1']")
        .check();
})

it("uncheck", ()=> {
    cy.visit("https://example.cypress.io/commands/actions")
    cy.get(".action-check")
        .get("[value='checkbox1']")
        .uncheck();
})

it("select", ()=> {
    cy.visit("https://example.cypress.io/commands/actions")
    cy.get(".action-select")
        .select("oranges");
})

it("scrollIntoView", ()=> {
    cy.visit("https://next.privat24.ua/mobile?lang=en")
    cy.get("[data-qa-node='lang']")
        .wait(2000)
        .scrollIntoView();
})

it.only("scrollTo", ()=> {
    cy.visit("https://next.privat24.ua/?lang=en")
        .contains("Services")
        .trigger('mouseover');
})