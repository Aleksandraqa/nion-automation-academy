import AutoStore_Homepage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO';
/// <reference types="Cypress" />

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
    
    // before hook
    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        })
    })
    beforeEach(() => {
        //cy.visit("https://automationteststore.com/");
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    })
    it("Add specific items to basket", () => {
        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.dropdown-toggle > .fa').click();
        autoStore_HairCare_PO.addHairCareProductsToBasket();

    });
    it("Add specific items to basket2", () => {
        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)
        // })
        // cy.get('.dropdown-toggle > .fa').click();
        autoStore_HairCare_PO.addHairCareProductsToBasket();

    });
})