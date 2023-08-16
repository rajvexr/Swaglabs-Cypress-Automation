class loginPage {

    elements = {

        username: () => cy.get('input[placeholder="Username"]'),
        password: () => cy.get('input[placeholder="Password"]'),
        submit: () => cy.get('input.submit-button'),
        errorMSG: () => cy.get('h3[data-test="error"]')
    }

    getUsername(username){
        this.elements.username().type(username)
        return this
    }

    getPassword(password){
        this.elements.password().type(password)
        return this
    }

    getSubmitBtn(){
        this.elements.submit().click()
        return this
    }

    getErrorMSG(msg){
        this.elements.errorMSG().should('contain', msg)
        return this
    }



}

export default new loginPage();