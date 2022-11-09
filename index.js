const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const dotenv = require('dotenv')
port = process.env.PORT || 2000
const path = require('path')

app.use(morgan('tiny'))
dotenv.config({path:".env"})

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.set('view engine',"ejs")


app.get('/',(req,res)=> {
    res.render('base')
})

app.listen(port , () => console.log(`server is on ${port}`)
)