describe('Browser Action', () => {
  it("my first test - should load correct url" , () => {
    cy.visit('https://example.com', {timeout: 5000})
    cy.url().should('include','example.com')
    cy.get('h1').should('be.visible')
  })
    
} )