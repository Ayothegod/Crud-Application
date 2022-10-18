const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')

app.use(morgan('tiny'))
app.set('view engine',"ejs")
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
port = process.env.PORT || 3000
// app.use(express.static('views'))


app.get('/',(req,res)=> {
    res.render('base')
})

app.listen(port , () => console.log('server is ruuning on localhost:3000')
)