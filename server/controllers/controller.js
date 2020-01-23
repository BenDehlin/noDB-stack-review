const employees = require('../data.json')
let id = 21

module.exports = {
    getEmployees: (req, res) => {
        const db = req.app.get('db')
        db.get_employees().then(employees => {
            res.status(200).send(employees)
        }).catch(err => res.status(500).send(err))
    },

    editEmployee: (req, res) => {
        console.log(req.params)
        const db = req.app.get('db')
        const {id} = req.params
        const {first, last, email, gender} = req.body
        db.put_employees([id, first, last, email, gender]).then(employees => {
            res.status(200).send(employees)
        }).catch(err => res.status(500).send(err))
    },

    addEmployee: (req, res) => {
        const db = req.app.get('db')
        const {first, last, email, gender} = req.body
        db.post_employees([first, last, email, gender]).then(employees => {
            res.status(200).send(employees)
        }).catch(err => res.status(500).send(err))
    },

    deleteEmployee: (req, res) => {
        console.log(req.params)
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_employees(id).then(employees => {
            res.status(200).send(employees)
        }).catch(err => res.status(500).send(err))
    }
}