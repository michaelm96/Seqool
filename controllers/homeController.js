const Login = require('../models').login
const bcrypt = require('bcryptjs')

class HomeController{
    static registerPage(req,res){
        res.render('register', {err:false})
    }

    static registerPost(req,res){
        Login.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(data => {
            res.redirect('/login')
        })
        .catch(err =>{
            res.render('register', { err })
        })
    }

    static loginGet(req,res){
        res.render('login', { err: false})
    }

    static loginPost(req,res){
        // console.log(req.body.password);
        Login.findOne({
            where : { username : req.body.username }
        })
        .then(user => {
            console.log(user);
            if(!user){
                res.render('login', { err:`user ${req.body.username} doesn't exist` })
            }
            else{
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.userId = user.id
                    res.redirect('/student')
                }else{
                    res.render('login', { err: `password is empty/wrong`})
                }
            }
        })
        .catch(err =>{
            res.render('login', {err})
        })
    }

    static logout(req, res) {
        req.session.destroy((err) => {
            if(err) {
                res.send(err)
            } else {
                res.redirect('/login')
            }
        })
    }

    static home(req,res){
        res.render('home')
    }
}

module.exports = HomeController