// Cypress Mocha Framework
import data from '../../fixtures/testData.json'
import invalidUser from '../../fixtures/invalidUser.json'
import loginPage from '../POM/loginPage'


describe('template spec', () => {

  beforeEach (() => {

    cy.fixture('testData.json').as('data')
    cy.fixture('invalidUser.json').as('invalidUser')
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include', 'sauce')
  })
  

  it('Positive Login', () => {
    
    cy.userLogin(data.username[0], data.password)
    cy.url().should('include', 'inventory')

  })

  

  it('Negative Login', () => {
    
    cy.userLogin(invalidUser[0].username, invalidUser[0].password)
    loginPage.getErrorMSG('Epic sadface: Username and password do not match any user in this service')

  })




})
