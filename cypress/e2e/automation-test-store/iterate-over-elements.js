/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Iterate over elements", () => {
    it("Log information of all Hair Care products", () => {
        cy.visit("https://www.automationteststore.com/");
        // Recommended approach
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        });

    });

    it("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click()
            }
        });
    });

});


