import { el } from "./elements"

const loginPage = {

    go: function () {
        cy.visit('/')
        cy.get(el.loginForm)
            .should('be.visible')
    },

    form: function (user) {
        if (user.username) cy.get(el.nameField).type(user.username)
        if (user.password) cy.get(el.passwordField).type(user.password)
    },

    submit: function () {
        cy.get(el.loginButton).click()
    },

    errorMsgShouldBe: function (msg) {
        cy.get(el.errorMessage)
            .should('have.text', msg)
    },
}

export default loginPage