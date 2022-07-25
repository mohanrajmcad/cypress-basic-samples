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
  
  it("simple class example" , () => {
    HomePage.loadHomePage()
    HomePage.wait(2000)
    HomePage.scrollToBottm()
    HomePage.wait(2000)
    HomePage.scrollToTop()   
  })    
} )
