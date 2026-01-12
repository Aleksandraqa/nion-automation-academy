/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Interact with dropdown lists via webdriveruni", () => {
  it("Select specific values via select dropdown list", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    // select by value
    cy.get('#dropdowm-menu-1').select('c#')
    cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
    //select by text
    cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

    // select Maven based on it's value
    cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    // select Testng base on it's text
    cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    });




})
  


