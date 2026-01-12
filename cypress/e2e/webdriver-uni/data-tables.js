/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
  it("Calculate and assert the total age of all users", () => {
    // create an array
    var userDetails = [];
    //third variable
    let numb = 0;
    // iterating through each of the cells in the table
    cy.get('#thumbnail-1 td').each(($el, index, $list) => {
        // get each text in each cell and store in the index value within the array 
        userDetails[index] = $el.text();
    }).then(() => {
        // create another variable
        var i;
        // create a for loop
        for(i = 0; i < userDetails.length; i++) {
          if(Number(userDetails[i])) {
            //if it is a nuber it will store in the variable numb
            numb += Number(userDetails[i])
          }
          
          //cy.log(userDetails[i])
        }
        cy.log("Found total age: " + numb)
        //asssertion
        expect(numb).to.eq(322)
    })
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
