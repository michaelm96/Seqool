const {Subject} = require('../models')

class SubjectController {

    static showSubjects(req, res) {
        Subject.findAll({
            order : [['id', 'ASC']]
        })
        .then(data => {
            res.render('subjects.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addGet(req, res) {
        res.render('addSubject.ejs')
    }

    static addPost(req, res) {
        Subject.create({
            subject : req.body.name_subject
        })
        .then(data => {
            res.redirect('/subjects')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static delete (req, res) {
        Subject.destroy({
            where: {
                id : Number(req.params.id)
            }
        })
        .then(data => {
            res.redirect('/subjects')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editGet(req, res) {
        Subject.findByPk(Number(req.params.id))
        .then(data => {
            console.log(data);
            res.render('editSubject.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editPost(req, res) {
        Subject.update({
            subject : req.body.name_subject
        }, {
            where : {id :req.params.id}
        })
        .then(data => {
            res.redirect('/subjects')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SubjectController