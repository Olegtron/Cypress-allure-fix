/// <reference types="cypress" />

class MyAccountPage {
    get signoutLink() { return cy.get('.logout') }
    get pageHeading() { return cy.get('.page-heading') }

    public validateSuccessfulLogin() {
        this.pageHeading.should('have.text', 'My account')
    }

    public logout() {
        this.signoutLink.click()
    }
}

export const myAccountPage: MyAccountPage = new MyAccountPage()