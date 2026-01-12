/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Alias and invoke challenge", () => {
    it("Validate product thambnail", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it("Calculate total of normal(itemPrice) and sale(saleItemPrice) products", () => {
        cy.visit("https://www.automationteststore.com/");
        // the code below creates an alias based on the product thambnails
        cy.get('.thumbnail').as('productThumbnail')

        // // we want to output the price of nonsale prices
        // // copy the alias productThumbnail and iterate through the list
        // cy.get('@productThumbnail').find(' .oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        //});
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')



        var itemsTotal = 0;
        cy.get('@itemprice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$');
            var i;
            for (i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice)
        })
        .then(() => {
          cy.log("The total price of all prducts: " + itemsTotal)
          expect(itemsTotal).to.equal(598) 
        })

    });

    it.only("Nion Carieer", () => {
        cy.visit('https://nionit.com/')
            .its('document')
            .should('exist');
        cy.get(' .nav-link').contains("Career").click();
        cy.get("a[href*='jobs']").contains("Open positions").click();
        cy.get("a[href*='jobs']").find(' .truncate').contains("All jobs").click();
        cy.get('#jobs_list_container > li > a > span').each(($el, index, $list) => {
            cy.log($el.text());
        });
    });



});


