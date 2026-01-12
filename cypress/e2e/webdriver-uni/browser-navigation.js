/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {

        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com/")
        //Handling Multiple Browser Tabs
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
        //assertion
        cy.url().should('include', 'contactus')

        // Go back to the home page
        cy.go('back')
        cy.reload()
        //cy.reload(true) //reload without using cache
        //assertion
        cy.url().should('include', 'https://www.webdriveruniversity.com/')

        cy.go('forward')
        //assertion
        cy.url().should('include', 'contactus')

        cy.go('back') //back to home page
        cy.get('#login-portal').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'Login-Portal')
        cy.go('back') //back to home page

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', 'To-Do-List')
        cy.go('back') //back to home page
        
        

        
    });



})
