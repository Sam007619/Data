
///<reference types="Cypress"/>


describe ( 'convert into Json File',()=>{

      it ('Read data from excel',()=>{
 
         cy.parseXlsx('cypress/fixtures/login.xlsx').then((jsonData)=>{
 
             const rowlenght = Cypress.$(jsonData[0].data).length
             cy.log(rowlenght)
             for(let i=1 ;i< rowlenght ; i++){
                 // var jsonData= jsonData[i].data
                 // console.log(jsonData[i].data)
                 // cy.writeFile("cypress/fixtures/login.json",{username:jsonData[0][0],password:jsonData[0][1]})
                 let value = jsonData[0].data[i]
 
             
     
 
                 // website
                 cy.visit('http://practicetestautomation.com/practice-test-login/')
 
                 cy.get('#username').type(value[0])
                 cy.get('#password').type(value[1])
                 cy.get('#submit').click()
                 cy.wait(5000)
                 cy.get('body').then(($body)=>{
                     let lgt=$body.find ('.btn').length
                     cy.log(lgt)
 
                     if(lgt==0){
 
                         cy.contains('Logged In Successfully').should('be.visible')
 
                     }
                     else{
 
                         cy.contains('Your password is invalid').should('be.visible')
                         
                     }
                 })
             } 
         })
         })
     })
 
  
   