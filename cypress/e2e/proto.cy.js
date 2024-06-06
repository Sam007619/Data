///< reference types="cypress" />

import Home from "../POM/Homepage"
import Asserting from "../POM/Assert"
describe('ProtoCommerce',()=>{
  
  


    before(()=>{
          cy.visit('https://rahulshettyacademy.com/angularpractice/')
          cy.fixture('login').then((login)=>{
           
            
          })    
    })

    it ('Asserting the webpage',()=>{
      const asserting=new Asserting()
      Asserting.AssertUrl()

    })

    it('HomePage',()=>{

        const home =new Home()
        Home.typeUsername('Sujith')
        Home.typeEmail('Sujith@12')
        Home.typePassword('12345')
        Home.Checkbox()
        Home.Gender()
        Home.Radiobutton()
        Home.DOB()
        Home.Submit()
        Home.AlertCheck()
   })
   


})