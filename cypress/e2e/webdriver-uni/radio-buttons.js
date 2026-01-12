/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Verify radion buttons via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
  })
  it("Check specific radio buttons", () => {
    // cy.visit("https://www.webdriveruniversity.com/")
    // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    //find - createing a selector that going to select all radio buttons
    cy.get('#radio-buttons').find('input[type=radio]').first().check()
    cy.get('#radio-buttons').find('input[type=radio]').eq(2).check()

    });

 it("Validate the states of specific radio buttons", () => {
    //cy.visit("https://www.webdriveruniversity.com/")
    //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    
    cy.get("[value='lettuce']").should('not.be.checked')
    cy.get("[value='pumpkin']").should('be.checked')
    //check the first radio button
    cy.get("[value='lettuce']").check()
    cy.get("[value='lettuce']").should('be.checked')
    cy.get("[value='pumpkin']").should('not.be.checked')

    // Validate the disabled checkebox
    cy.get("[value='cabbage']").should('be.disabled')
    
    });

})
  


