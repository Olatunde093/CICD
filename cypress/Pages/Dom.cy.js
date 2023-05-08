
class dom{
 
    visit(){
        return cy.visit("https://computer-database.gatling.io/computers")
    }
    add_new(){
        return cy.get('#add')
    }
    computer_name(){
        return cy.get('#name')
    }
    introduce(){
        return cy.get('#introduced')
    }
    discontinued(){
        return cy.get('#discontinued')
    }
    company(){
        return cy.get('#company')
    }
    submit_button(){
        return cy.get('input[value="Create this computer"]')
    }
    cancel_button(){
        return cy.get('.actions a')
    }
    success_message(){
        return cy.get('.alert-message')
    }
    count(){
        return cy.get('#main h1')
    }
    table(){
        return cy.get('td')
    }
    error(){
        return cy.get('.error > .input > .help-inline')
    }
    error_message(){
        return cy.get('fieldset div:nth-of-type(3) .help-inline')
    }
    error_message2(){
        return cy.get('fieldset > div:nth-of-type(2) .help-inline')
    }

}
export default dom;