const express = require('express')
const session = require('express-session')
const app = new express()
const port = process.env.PORT || 3000
const routes = require('./routes/route')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

app.set('view engine', 'ejs')
app.use(express.urlencoded ({ extended: true }))
app.use('/', routes)



app.listen(port, ()=>{
    console.log(`starting server at port ${port}`)
})