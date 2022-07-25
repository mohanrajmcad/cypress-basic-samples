describe('Fixture data example - zero bank', () => {
  
  it("Positive login" , () => {
    cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
    cy.fixture('sample4_zerobank_user').then((user) => {
        const uname = user.username
        const passwd = user.password


        cy.url().should('include','webappsecurity.com')
        cy.get("#signin_button").click()
        cy.get("h3").contains("Log in to ZeroBank")
        cy.get("#user_login").type(uname, {delay:300})
        cy.get("#user_password").type(passwd)
        cy.get("#user_remember_me").click()
        cy.contains("Sign in").click()
        cy.contains("Account Summary").should("be.visible")       
    })

  })    
} )