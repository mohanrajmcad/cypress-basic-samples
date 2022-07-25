describe('select dropdown value - devexpress', () => {
  
  it("Positive login" , () => {
    cy.visit('https://devexpress.github.io/testcafe/example/', {timeout: 15000})
    cy.url().should('include','example')
    cy.get('#preferred-interface').select("Both")
    cy.get('#preferred-interface').should("have.value", "Both")
  })    
} )