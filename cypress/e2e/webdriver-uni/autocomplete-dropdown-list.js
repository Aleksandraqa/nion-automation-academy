/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Verify Autocomlete dropdown list via webdriveruni", () => {
    it("Select specific product via autocomlete list", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if (prod === productToSelect) {
                // $el.click();
                $el.trigger("click");

                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
        }).then(() => {
            cy.get('#myInput').type('g')

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const productToSelect = 'Grapes';

                if (prod === productToSelect) {
                    // $el.click();
                    $el.trigger("click");

                    cy.get('#submit-button').click();
                    cy.url().should('include', productToSelect)
                }
            })

        })
    });




})



