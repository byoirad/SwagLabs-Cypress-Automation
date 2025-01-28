import { el } from "./elements"

const checkout = {

    go: function() {
        cy.visit('https://www.saucedemo.com/v1/checkout-step-one.html')
         cy.get('div[class="subheader"]') 
            .should('have.text', 'Checkout: Your Information')
    },

    form: function() {
        cy.get('#first-name').clear()
        cy.get('#last-name').type('standard_user')
        cy.get('#postal-code').type('123456')
    },

    submit: function(){
        cy.get('input[type="submit"]').click()
    },

    errorMessageShouldBe: function(msg) {
        cy.get('h3[data-test="error"]')
            .should('have.text', msg)
    }
}

export default checkout