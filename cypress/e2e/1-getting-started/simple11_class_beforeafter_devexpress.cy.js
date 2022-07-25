class BasePage{
  static loadHomePage() {
    cy.visit('https://devexpress.github.io/testcafe/example/', {timeout: 20000})
    cy.url().should('include','example')
  }

  static wait(number){
    cy.wait(number)
  }
}


class HomePage extends BasePage{
  static scrollToBottm() {
    cy.get("#submit-button").scrollIntoView()
  }

  static scrollToTop(){
    cy.get("header").scrollIntoView()
  }

}

describe('class example - devexpress', () => {
  before(function() {
    HomePage.loadHomePage()
  })

  after(function() {
    cy.log("i am in after block")
  })

  beforeEach(function() {
    cy.log("i am in beforeEach block")
  })

  afterEach(function() {
    cy.log("i am in afterEach block")
  })
  
  it("simple class example1" , () => {
   
    HomePage.wait(2000)
    HomePage.scrollToBottm()
    HomePage.wait(2000)
    HomePage.scrollToTop()   
  })    

  it("simple class example2" , () => {
   
    HomePage.wait(2000)
    HomePage.scrollToBottm()
    HomePage.wait(2000)
    HomePage.scrollToTop()   
  }) 
} )
