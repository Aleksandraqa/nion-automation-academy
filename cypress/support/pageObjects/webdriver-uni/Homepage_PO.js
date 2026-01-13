class HomePage_PO {
    click_contact_us = '#contact-us'
    click_data_tables = '#data-table'


    //custom function
    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000});
    }

    clickOn_ContactUs_Button() {
        cy.get(this.click_contact_us).invoke('removeAttr', 'target').click({force:true}, {timeout:8000});
    }

    clickOn_DataTablesAndButtonStates_Button() {
        cy.get(this.click_data_tables).invoke('removeAttr', 'target').click({force:true});
    }
}
export default HomePage_PO;