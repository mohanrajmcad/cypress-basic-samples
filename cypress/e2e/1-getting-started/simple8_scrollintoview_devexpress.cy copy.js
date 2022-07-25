describe('screenshot example - devexpress', () => {
  
  it("Positive login" , () => {
    cy.visit('https://devexpress.github.io/testcafe/example/', {timeout: 20000})
    cy.url().should('include','example')
    cy.wait(2000)
    cy.get("#submit-button").scrollIntoView()
    cy.wait(2000)
    cy.get("header").scrollIntoView()
     
  })    
} )