/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
      //cy.viewport(550, 750)
      cy.viewport('iphone-6', 'landscape')
      cy.fixture("userDetails").as("user") //.as("user") - is alias
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        // cypress code  
      cy.visit("https://www.automationteststore.com/");
      cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click().then(function(linkText) {
      cy.log("Clicked on link using text: " + linkText.text())
      })
      // call the alias fixture.then command and reference to the user parameter...
      cy.get("@user").then((user) => {
        cy.get('#ContactUsFrm_first_name').type(user.first_name);
        cy.get('#ContactUsFrm_email').type(user.email);
      })
    
      cy.get('#ContactUsFrm_email').should('have.attr','name', 'email');
      cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?");
      // cy.get('button[title="Submit"]').click();   
      cy.xpath('//button[@title="Submit"]').click(); 
      // cy.get('#maincontainer section.mb40 p:nth-of-type(2)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
      cy.xpath('//*[@id="maincontainer"]//p[contains(text(),"Your enquiry has been successfully sent to the store owner!")]').should('be.visible');
      //assertions
      //Xpath
      //*[@id="maincontainer"]//section[@class="mb40"]//p[2]
      //css
      // #maincontainer section.mb40 p:nth-of-type(2)

      // xpath
      //*[@id="maincontainer"]//p[contains(text(),"Your enquiry has been successfully sent to the store owner!")]

      cy.log("Test has completed!");
    });


  })




//describe("Test Contact Us form via WebdriverUni") is a test suite description
// This is a call back
//   () => {}
// it('passes') - is a Mocha keyword to define a test case 
// cypress uses a keyword "cy"   