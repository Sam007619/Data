
const { defineConfig } = require("cypress");

const xlsx= require('node-xlsx').default;
var XLSX = require("xlsx");
const fs=require('fs')
const path= require('path')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on("task", { parseXlsx({filepath }){

        return new Promise ((resolve ,reject )=>{

          try{
            const jsonData=xlsx.parse(fs.readFileSync(filepath))
            resolve(jsonData)
          
          }catch(e){
            reject(e)
          }
          return config
        })


      }})
    },
  },
});
