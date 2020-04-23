const router = require('express').Router()

const subjectController = require('../controllers/subject')

router.get('/', subjectController.showSubjects)
router.get('/add', subjectController.addGet)
router.post('/add', subjectController.addPost)
router.get('/edit/:id', subjectController.editGet)
router.post('/edit/:id', subjectController.editPost)
router.get('/delete/:id', subjectController.delete)

module.exports = router