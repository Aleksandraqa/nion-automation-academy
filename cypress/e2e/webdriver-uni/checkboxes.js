/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(() => {
    //cy.visit("/")
    // custom command that we will use as a global variable
    //cy.navigateTo_WebdriverUni_Homepage();
    //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
  
    //Custom commant + Dynamic URL
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  })

  it("Check and validate checkbox", () => {
    //assert- the test should faile - negative testing
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked')

    //assert- the test should pass - positive testing
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

    // improve the code by using alias
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    cy.get('@option-1').check().should('be.checked')
    });


    it("Uncheck and validate checkbox has been unchecked", () => {

    cy.get('#checkboxes > :nth-child(5) > input').as('option-3')
    cy.get('@option-3').check().should('be.checked')
    cy.get('@option-3').uncheck().should('not.be.checked')
    });

    it("Check multiple checkboxes", () => {
    
    // pass the values (option-1, option-2....)
    cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    });


})
  


