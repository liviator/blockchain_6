const express = require('express')
const app = express()
const port = 3000
const obj = require('./route/route')
const web3 = require('web3')
app.use(web3)
app.get('/', (req, res) => {
 res.send('Hello World!')
})
app.use("/obj",obj)


app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`)
})
