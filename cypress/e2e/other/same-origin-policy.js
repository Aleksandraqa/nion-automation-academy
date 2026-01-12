/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Cypress web security", () => {
    // the test should fail - security restrictions message
    it.skip("Validate vivsiting two different domains", () => {
        cy.visit('https://www.webdriveruniversity.com/');
        cy.visit('https://www.automationteststore.com/');


    });
    //If you starts on one website nut needs to interact with another, you must sue cy.origin() 
    it("Validate vivsiting two different domains via user actions", () => {

        cy.visit('https://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();

        cy.origin('automationteststore.com', () => {
            cy.get('.info_links_footer > :nth-child(5) > a', {
                timeout: 10000}).should('be.visible').click();//click contact us element - footer

        })

    });

    // it("Origin command", () => {
    //     cy.origin('webdriveruniversity.com', () => {
    //         cy.visit("/");

    //     })

    //     cy.origin('automationteststore.com', () => {
    //         cy.visit("/");

    //     })

    // });
});


