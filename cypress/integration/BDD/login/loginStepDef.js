import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../POM/loginPage";


Given('I successfully land on the login page', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('contain', 'sauce')
})

When('I enter the username as {string}', (username) => {

    loginPage.getUsername(username)  

})

Then('I enter the password as {string}', (password) => {

    loginPage.getPassword(password)
    
})

Then('I select login', () => {
    loginPage.getSubmitBtn()
})

Then('I should successfully land on the products page', () => {
    cy.url().should('include', 'inventory')
})

Then('I should see an error messsage', () => {
    loginPage.getErrorMSG('Epic sadface: Username and password do not match any user in this service')
})
