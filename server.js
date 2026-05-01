
const express = require('express')
const app = express()

// traditional get api
app.get('/', (req, res) => {
   
    res.send('<h1>Hello World!</h1>')
})
// rest api
app.get('/rest', (req, res) => {
    
    res.json({name: 'Norman', age: 23, group: 'MIT'})
  })

app.listen(3000, () => {
  console.log(`Backend Server is running on port 3000`)
})
