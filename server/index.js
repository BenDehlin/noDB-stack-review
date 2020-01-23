require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const cors = require ('cors')
const app = express()
const ctrl = require('./controllers/controller')
const url = '/api/employees'
const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db running')
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
}).catch(err => console.log(err))

app.get(url, ctrl.getEmployees)
app.post(url, ctrl.addEmployee)
app.put(`${url}/:id`, ctrl.editEmployee)
app.delete(`${url}/:id`, ctrl.deleteEmployee)
