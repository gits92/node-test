require('dotenv').config()
const express = require('express')
const basicAuth = require('express-basic-auth')

const {
  NODEJS_EXAMPLE_USERNAME,
  NODEJS_EXAMPLE_PASSWORD,
  NODEJS_EXAMPLE_PORT,
  NODEJS_EXAMPLE_USE_AUTH,
} = process.env

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('ok'))

if (NODEJS_EXAMPLE_USE_AUTH === 'true')
  app.use('/time', basicAuth({
    users: { [NODEJS_EXAMPLE_USERNAME]: NODEJS_EXAMPLE_PASSWORD },
    challenge: true,
    unauthorizedResponse: 'Not authorized ',
  }))

app.get('/time', (req, res) => {
  const date = new Date()
  res.send({ iso: date.toISOString(), timestamp: date.getTime() })
})

app.listen(NODEJS_EXAMPLE_PORT, () => console.log('server started'))