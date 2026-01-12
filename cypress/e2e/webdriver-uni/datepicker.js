/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Test Datepicker via webdriveruni", () => {
    beforeEach(() => {
    cy.visit("/");
    cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
  })
    it("Select date from the datepicker - current day + 5 days", () => {
        //cy.visit("/")
        //cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })

        let date = new Date();
        date.setDate(date.getDate()) // get current day
        cy.log(date.getDate())

        let date2 = new Date();
        date2.setDate(date2.getDate() + 5) // get current day + 5
        cy.log(date2.getDate())

    });

    it.only("Select date from the datepicker - future year, future month, future day", () => {
        //cy.visit("/")
        //cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#datepicker').click();


        var date = new Date();
        date.setDate(date.getDate() + 90) // get current day + 360
        cy.log(date.getDate())

        var futureYear = date.getFullYear();    //get current year
        var futureMonth = date.toLocaleString("default", { month: "long" }) //select current the month, correctly format the month for us
        var futureDay = date.getDate();
        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        // clicks on the arrow until the future year is met
        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear()
                }
            }).then(() => {
                // clicks on the arrow until the future month is met
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    });


})



