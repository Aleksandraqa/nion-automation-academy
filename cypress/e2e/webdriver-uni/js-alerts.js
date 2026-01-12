/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Handle js alerts", () => {
    it("Confirm js alert contains the correct text", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        //Handling Multiple Browser Tabs
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        // Cypress automaticaly handles the js alert 
        cy.get('#button1').click()//clicks the first alert ("JavaScript Alert")

        //assert the js alert text by using event (for example: window:alert)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        //Handling Multiple Browser Tabs
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        // Cypress automaticaly handles the js alert 
        cy.get('#button4').click()//clicks the js alert ("JavaScript Confirm Box")

        //assert the text is displayed correctly after clicking OK button
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return true; //clicks OK button
            //return false; //clicks Cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')


    });

    it("Validate js confirm alert box works correctly when clicking Cancel", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        //Handling Multiple Browser Tabs
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })
        // Cypress automaticaly handles the js alert 
        cy.get('#button4').click()//clicks the js alert ("JavaScript Confirm Box")

        //assert the text is displayed correctly after clicking OK button
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return false; //clicks Cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it("Validate js confirm alert box using a stub", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        //Handling Multiple Browser Tabs
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true })

        //stub
        //create a constant
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            //assertion
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;  
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    });



})

