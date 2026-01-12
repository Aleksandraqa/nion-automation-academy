/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


//Cypress Chaining Commands
describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => { 
      cy.visit("https://www.automationteststore.com/");
    //   cy.get('#block_frame_featured_1769 a[title="Skinsheen Bronzer Stick"]').click()

      cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });

    it.only("Click on the first item using item text", () => { 
      cy.visit("https://www.automationteststore.com/");
      cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
        console.log("Selected the following item: " + itemHeaderText.text())
      })
    });

    it("Click on the first item using index", () => { 
      cy.visit("https://www.automationteststore.com/");
      cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });

  })

