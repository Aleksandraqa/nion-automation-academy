
describe("Iterate over the elements", () => {
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#page-object-model').invoke('removeAttr', 'target').click({ force: true })
        cy.get('.navbar-nav > li > a').contains("Our Products").click();
    })
    it("Iterate over the elements - Selects New Laptops ", () => {
    
        // cy.get('#div-main-nav + div.row p').each(($el, index, $list) => {
        //     if($el.text().includes('New Laptops')) {
        //         cy.wrap($el).click()
        //     }
        // });
        // go to support/commands.js file to find the code above
        
        cy.selectProduct('New Laptops');
    });

    it("Iterate over the elements - Selects Used Laptops ", () => {
        cy.selectProduct('Used Laptops');
    });
})