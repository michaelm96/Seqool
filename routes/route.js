const Router = require('express').Router()
const HomeController = require('../controllers/homeController')
const studentRoute = require('./studentRoute')
const subjectRoute = require('./subjectRouter')

function checkSession(req,res,next){
    if(req.session.userId){
        next()
    }else{
        res.render('login', { err : `Login First`})
    }
}


Router.get('/', HomeController.home)
Router.get('/register', HomeController.registerPage)
Router.post('/register', HomeController.registerPost)
Router.get('/login', HomeController.loginGet)
Router.post('/login', HomeController.loginPost)

Router.use(checkSession)

// Router.get('/', HomeController.home)
Router.get('/logout', HomeController.logout)
Router.use('/student', studentRoute)
Router.use('/subjects', subjectRoute)


module.exports = Router