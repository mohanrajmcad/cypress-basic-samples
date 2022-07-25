describe('Write File example', () => {
  it("Write Json File", () => {
    cy.writeFile("logsample.json", { name: "Krishna", age: "26" })
  })

  it("Read Json File", () => {
    cy.readFile("logsample.json").its('age').should('eq', "26")
  })

  it("Write text File", () => {
    cy.writeFile("logtxt.txt", "Mohanraj")
  })

  it("Read text File", () => {
    cy.readFile("logtxt.txt").should('eq', "Mohanraj")
  })

  it("read and verify browser content", () => {
    cy.visit('http://example.com')
    cy.wait(2000)
    cy.document().its('contentType').should("eq", "text/html")
    cy.document().should('have.property', 'charset').and('eq', "UTF-8")
  })

})