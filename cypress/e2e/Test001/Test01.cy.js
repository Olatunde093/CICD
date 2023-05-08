/// <reference types ="cypress"/>

import dom from "../../Pages/Dom.cy"
const Dom = new dom

describe("Failing to add a new computer with invalid data",()=>{
    beforeEach(()=>{
 // cy.visit("https://computer-database.gatling.io/computers")
 Dom.visit()
    })
    it("Adding a computer with a blank name",()=>{
         Dom.add_new().click()

        //Filling in the required forms

        Dom.introduce().type("2022-01-01");
        Dom.discontinued().type("2023-01-02")
        Dom.company().select("Apple Inc.")

        // submitting the form
        Dom.submit_button().click()

        Dom.error().should("contain","Failed to refine type : Predicate isEmpty() did not fail.")

    })
    it("Adding a computer with invalid date range",()=>{
        Dom.add_new().click()

        //Filling in the required form
        Dom.computer_name().type("Test computer 4")
        Dom.introduce().type("2023-01-01");
        Dom.discontinued().type("2022-01-02")
        Dom.company().select("Apple Inc.")

        // submitting the form
        Dom.submit_button().click()

        Dom.error_message().should("contain","Discontinued date is before introduction date")
    })
    it("Adding a computer with an invalid introduced date",()=>{
        Dom.add_new().click()

        //Filling in the required form
        Dom.computer_name().type("Test computer 5")
        Dom.introduce().type("01=01-2021");
        Dom.discontinued().type("2022-01-02")
        Dom.company().select("Apple Inc.")

        // submitting the form
        Dom.submit_button().click()

        Dom.error_message2().should("contain","Failed to decode date : java.time.format.DateTimeParseException: Text '01=01-2021' could not be parsed at index 0")

     })
})