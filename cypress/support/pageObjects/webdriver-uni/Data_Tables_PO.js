class Data_Tables_PO {
    each_cell_in_table = '#thumbnail-1 td'


    //custom function
    calculate_Total_Users_Age(totalAge) {
        // create an array
        var userDetails = [];
        //third variable
        let numb = 0;
        // iterating through each of the cells in the table
        cy.get(this.each_cell_in_table).each(($el, index, $list) => {
            // get each text in each cell and store in the index value within the array 
            userDetails[index] = $el.text();
        }).then(() => {
            // create another variable
            var i;
            // create a for loop
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    //if it is a nuber it will store in the variable numb
                    numb += Number(userDetails[i])
                }

                //cy.log(userDetails[i])
            }
            cy.log("Found total age: " + numb)
            //asssertion
            expect(numb).to.eq(totalAge)
        })

    }
}
export default Data_Tables_PO;