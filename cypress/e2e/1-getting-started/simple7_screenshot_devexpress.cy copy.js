describe('screenshot example - devexpress', () => {
  
  it("Positive login" , () => {
    cy.visit('https://devexpress.github.io/testcafe/example/', {timeout: 15000})
    cy.url().should('include','example')
    cy.screenshot({capture: 'fullPage'})
    cy.get('#populate').screenshot()
   
  })    
} )