class Contact_Us_PO {
    firstname_textbox = '[name="first_name"]'
    lastname_textbox = '[name="last_name"]'
    email_textbox = '[name="email"]'
    feedback_textbox = 'textarea.feedback-input'
    contactUs_submit_btn = '[type="submit"]'


    //custom function
    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get(this.firstname_textbox).type(firstName);
        cy.get(this.lastname_textbox).type(lastName);
        cy.get(this.email_textbox).type(email)
        cy.get(this.feedback_textbox).type(comment)
        cy.get(this.contactUs_submit_btn).click()
        cy.get($selector).contains(textToLocate, {timeout: 60000})
        //cy.get($selector).pause().contains(textToLocate, {timeout: 60000})
        //cy.screenshot();
        //cy.screenshot("Make a contact us form submission")
    }
}
export default Contact_Us_PO;