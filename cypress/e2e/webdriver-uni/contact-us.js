import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config('defaultCommandTimeout', 20000)  //will overwrite the config.js defaultCommandTimeout. -20000=20 sec - only for thistest suite
  const homepage_PO = new Homepage_PO();
  const contact_Us_PO = new Contact_Us_PO();
  // before hook to initialise the fixture files
  before(function() {
    cy.fixture('example').then(function(data) {
      //this.data = data;
      globalThis.data = data;
    })
  })

  beforeEach(() => {
    // webdriveruni_homepage is a global variable and + "Contact-Us/contactus.html" is extendable URL
    //cy.visit(Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html");
    //const homepage_PO = new Homepage_PO();
    homepage_PO.visitHomepage();
    cy.wait(3000);
    homepage_PO.clickOn_ContactUs_Button();
    //cy.pause();
  })

  it("Should be able to submit a successful submission via contact us form", () => {
     // cypress code 
    // cy.visit("https://www.webdriveruniversity.com/") 
    // cy.get('#contact-us').click({force: true})  
    // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.visit("https://www.webdriveruniversity.com/")

    //Handling Multiple Browser Tabs
    //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us');
    cy.url().should('include', 'contactus');
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email)
    // cy.get('textarea.feedback-input').type("Comments First Task")
    // cy.get('[type="submit"]').click()
    // cy.get('#contact_reply > h1').should('have.text', 'Thank You for your Message!');
      // assert('Thank You for your Message!')

    //cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Comments First Task", '#contact_reply > h1', 'Thank You for your Message!');
    //const contact_Us_PO = new Contact_Us_PO(); 
    contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "Comments First Task", '#contact_reply > h1', 'Thank You for your Message!');
  });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // cypress code
      // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      //cy.visit("https://www.webdriveruniversity.com/")

      //Handling Multiple Browser Tabs
      //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
      // cy.get('[name="first_name"]').type(data.first_name);
      // cy.get('[name="last_name"]').type(data.last_name);
      // cy.get('textarea.feedback-input').type("Comments First Task")
      // cy.get('[type="submit"]').click()
      // cy.get('body').contains('Error: all fields are required');

      //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "Comments First Task", 'body', 'Error: Invalid email address');
      //const contact_Us_PO = new Contact_Us_PO();
      contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "Comments First Task", 'body', 'Error: Invalid email address');
    });


})
  




//describe("Test Contact Us form via WebdriverUni") is a test suite description
// This is a call back
//   () => {}
// it('passes') - is a Mocha keyword to define a test case 
// cypress uses a keyword "cy"   
// if I want to execute specific scenario then I should put only after it  (it.only)