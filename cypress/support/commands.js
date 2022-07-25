// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage();

    cy.get("#signin_button").click()
    cy.get("h3").contains("Log in to ZeroBank")
    cy.get("#user_login").type(username, {delay:300})
    cy.get("#user_password").type(password)
    cy.get("#user_remember_me").click()
    cy.contains("Sign in").click()
    cy.contains("Account Summary").should("be.visible")  



})