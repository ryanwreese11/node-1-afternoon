const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const mc = require('./controllers/messages_controller')


app.use(bodyParser.json())
app.use( express.static( __dirname + '/../public/build' ) );

const baseUrl = '/api/messages'

app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(`${baseUrl}/:id`, mc.update)
app.delete(`${baseUrl}/:id`, mc.delete)


const PORT = 3001
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))