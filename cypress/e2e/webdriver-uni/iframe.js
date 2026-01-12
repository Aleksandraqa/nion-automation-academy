/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Handling IFrame & Modals", () => {
  it("Handle webdriveruni iframe and modal", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

    cy.get('#frame').then($iframe=> {
        const body = $iframe.contents().find('body')
        cy.wrap(body).as('iframe')
    })
    // alias - we use @
    cy.get('@iframe').find('#button-find-out-more').click()
    cy.get('@iframe').find('#myModal').as('modal')
    
    //assertion
    cy.get('@modal').should(($expectedText) => {
        const text = $expectedText.text()
        expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range');
    })
    
    cy.get('@modal').contains('Close').click()
  
    });


})
  


