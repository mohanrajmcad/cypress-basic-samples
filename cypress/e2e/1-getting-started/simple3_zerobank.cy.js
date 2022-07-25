describe('Browser Action - zerobank', () => {
  it("Negative login" , () => {
    cy.viewport('iphone-6')
    cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
    cy.url().should('include','webappsecurity.com')
    cy.get("#signin_button").click()
    cy.get("h3").contains("Log in to ZeroBank")
    cy.get("#user_login").type("username1")
    cy.get("#user_password").type("password1")
    cy.get("#user_remember_me").click()
    cy.contains("Sign in").click()
    cy.get(".alert-error").should("be.visible")


  })

  it("Positive login" , () => {
    cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
    cy.url().should('include','webappsecurity.com')
    cy.get("#signin_button").click()
    cy.get("h3").contains("Log in to ZeroBank")
    cy.get("#user_login").type("username", {delay:500})
    cy.get("#user_password").type("password")
    cy.get("#user_remember_me").click()
    cy.contains("Sign in").click()
    cy.contains("Account Summary").should("be.visible")
   


  })


    
} )