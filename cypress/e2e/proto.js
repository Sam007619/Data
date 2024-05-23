///< reference types="cypress" />

import Home from "./POM/Home"
import Assert from "./POM/Assert"

describe('ProtoCommerce',()=>{

    beforeEach(()=>{
          cy.visit('https://rahulshettyacademy.com/angularpractice/')
          cy.fixture('login').then((login)=>{
            this.login=login
          })    
    })

    it ('Asserting the webpage',()=>{

        const Assert=new Assert()
        Assert.AssertUrl()
    })

    it('HomePage',()=>{

        const Home=new Home()
        Home.typeUsername(this.login.username)
        Home.typeEmail(this.login.email)
        Home.typePassword(this.login.password)
        Home.Checkbox()
        Home.Gender()
        Home.Radiobutton()
        Home.DOB()
        Home.Submit()
        Home.AlertCheck()
   })
   


})