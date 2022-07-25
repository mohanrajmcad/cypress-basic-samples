const {it } = require("mocha")

describe('Browser Action - booke website', () => {
  it("should load book website" , () => {
    cy.visit('https://books.toscrape.com/', {timeout: 10000})
    cy.url().should('include','toscrape.com')
    cy.log("before loaded")
    cy.reload()
    cy.log("after load")
    cy.wait(2000)

  })


  it("Should click on the Travel Category" , () => {
    cy.get("a").contains("Travel").focus().blur()
    cy.get("a").contains("Travel").click()
    cy.get("h1").contains("Travel")
    cy.get('.product_pod').its('length').should('eq',11)
  })


    
} )