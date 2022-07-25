describe('command and Fixture data example - zero bank', () => {
  
  it("Positive login" , () => {
    cy.visit('http://zero.webappsecurity.com/', {timeout: 10000})
    cy.fixture('sample4_zerobank_user').then((user) => {
        const uname = user.username
        const passwd = user.password
        cy.url().should('include','webappsecurity.com')
        cy.login(uname, passwd)
            
    })

  })    
} )jj