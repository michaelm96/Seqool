const Router = require('express').Router()
const StudentController = require('../controllers/studentController')

Router.get('/', StudentController.show)
Router.get('/add', StudentController.addGet)
Router.post('/add', StudentController.addPost)
Router.get('/edit/:id', StudentController.editGet)
Router.post('/edit/:id', StudentController.editPost)
Router.get('/delete/:id', StudentController.deleteStudent)
Router.get('/info/:id', StudentController.infoStudentGet)
Router.post('/info/:id', StudentController.infoStudentPost)


module.exports = Router