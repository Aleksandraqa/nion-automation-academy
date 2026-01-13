import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Data_Tables_PO from '../../support/pageObjects/webdriver-uni/Data_Tables_PO';
/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  const homepage_PO = new Homepage_PO();
  const data_Tables_PO = new Data_Tables_PO();
  beforeEach(() => {
    cy.visit("/");
    homepage_PO.clickOn_DataTablesAndButtonStates_Button();
  })
  it.only("Calculate and assert the total age of all users", () => {
    data_Tables_PO.calculate_Total_Users_Age(322); 
  });

  it("Calculate and assert the age of a given user based on last name", () => {
    //selects each last name
    cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
      //extract the text of each cells  
      const text = $el.text()
      if(text.includes("Woods")) {
        cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
          // next () - means move to the next cell next to Lastname index (5) "WOODS"
          const userAge = age.text();
          //assertion
          expect(userAge).to.equal("80");
        })

      }
        
    })
  });
});
