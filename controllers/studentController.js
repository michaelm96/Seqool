const Student = require('../models').Student
const Subject = require('../models').Subject
const StudentSubject = require('../models').StudentSubject
const Convert = require('../convertTime')

class HomeController {
    static show(req, res) {
        Student.findAll({
            order: [['id', 'ASC']]
        })
            .then(data => {
                res.render('student', { data, Convert })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static addGet(req, res) {
        res.render('addStudent')
    }

    static addPost(req, res) {
        // console.log(req.body);
        Student.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            birth_day: req.body.birth_day,
            grade: req.body.grade,
        })
            .then(data => {
                res.redirect('/student')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editGet(req, res) {
        Student.findOne({
            where: { id: req.params.id }
        })
            .then(data => {
                // console.log(data);
                res.render('editStudent', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editPost(req, res) {
        // console.log(req.body);
        Student.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            birth_day: req.body.birth_day,
            grade: req.body.grade
        }, {
            where: { id: req.params.id }
        })
            .then(data => {
                res.redirect('/student')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteStudent(req, res) {
        Student.destroy({
            where: {
                id: Number(req.params.id)
            }
        })
            .then(data => {
                res.redirect('/student')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static infoStudentGet(req, res) {
        let studentData;
        let subjectData;
        Student.findOne({
            where: { id: req.params.id },
            include: [{model:Subject}]
        })
            .then(data => {
                studentData = data
                return Subject.findAll()
            })
            .then(subData => {
                // console.log(subjectData)
                // console.log(stuSubData.length)
                // console.log(subjectData.length);
                res.render('infoStudent', { data: studentData, subData: subData })
            })
            .catch(err => {
                console.log(err);
                res.send(err)
            })
    }

    static infoStudentPost(req, res) {
        // console.log(req.params.id);
        // console.log(req.body);

        Subject.findOne({
            where: { id: req.body.subject }
        })
            .then(subData => {
                console.log(subData.subject);
                return StudentSubject.create({
                    StudentId: Number(req.params.id),
                    SubjectId: Number(req.body.subject),
                    Schedule: new Date(),
                    subjectCode: `${req.params.id}_${subData.subject}`
                })
            })
            .then(data => {
                res.redirect(`/student/info/${req.params.id}`)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = HomeController