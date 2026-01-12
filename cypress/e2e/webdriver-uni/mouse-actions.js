/// <reference types="Cypress" />
//this line of code must be added in order to read the cypress command list when type cy.


describe("Test mouse actions", () => {
  it("Scroll element into view", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  //removeAttr - clicks on the intended button within the same browser tab
    });
  it("I should be able to drag and drop a draggable item", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  //removeAttr - clicks on the intended button within the same browser tab
    cy.get('#draggable').trigger('mousedown', {which: 1}) //clicks on the center of the element
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
});

  it("I should be able to perform a double mouse click", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  //removeAttr - clicks on the intended button within the same browser tab
    cy.get('#double-click').dblclick();
});

  it.only("I should be able to hold down the left mouse click button on a given element", () => {
    cy.visit("https://www.webdriveruniversity.com/")
    cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  //removeAttr - clicks on the intended button within the same browser tab
    cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
        // assertion to validate the correct color
        expect($element).to.have.css('background-color','rgb(0, 255, 0)')
        //background-color is an css atribute to change the color of a given element
    })
});





})
  


