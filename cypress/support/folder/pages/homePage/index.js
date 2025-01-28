import { el } from "./elements"

const homePage = {

    shelfShouldBeVisible: function () {
        cy.get(el.shelf)
            .should('be.visible')
    },

    logOff: function() {
        cy.get(el.menu).click()
        cy.get(el.logoutButton).click()
    }
}
export default homePage