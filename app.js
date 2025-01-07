console.log('ciao');

const express = require('express')

const app = express()
const port = 3001

app.listen(port, () => {
  console.log('Sono in ascolto sulla porta 3001');  
})