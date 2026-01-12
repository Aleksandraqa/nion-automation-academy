/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Test Contact Us form via WebdriverUni", () => {
  // before hook to initialise the fixture files
  before(function() {
      cy.fixture("userDetails").as("user") //.as("user") - is alias
    })

  beforeEach(() => {
    cy.visit("/");
  })

  it("Should be able to submit a successful submission via contact us form", () => {
     

    //Handling Multiple Browser Tabs
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');

    // call the alias fixture.then command and reference to the user parameter...
      cy.get("@user").then((user) => {
        cy.get('[name="first_name"]').type(user.first_name);
        cy.get('[name="last_name"]').type("blogs");
        cy.get('[name="email"]').type(user.email);
      })

    
    //cy.get('[name="last_name"]').type("blogs");
    
    cy.get('textarea.feedback-input').type("Comments First Task")
    cy.get('[type="submit"]').click()
    cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!');
      // assert('Thank You for your Message!')
    });

   


})
  




//describe("Test Contact Us form via WebdriverUni") is a test suite description
// This is a call back
//   () => {}
// it('passes') - is a Mocha keyword to define a test case 
// cypress uses a keyword "cy"   
// if I want to execute specific scenario then I should put only after it  (it.only)