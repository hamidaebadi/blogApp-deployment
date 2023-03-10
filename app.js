const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')
const { userExtractor } = require('./utils/middleware')
const express = require('express')
const app = express()

const mongoUrl = config.MONGODB_URL

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => logger.info('Connected to DB'))
  .catch(error => logger.error('error connection to Database'+error))

app.use(middleware.tokenExtractor)
app.use(express.json())
app.use(express.static('dist'))
app.use('/api/blogs', userExtractor, blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.get('/health', (req, res) => {
  res.send('ok')
})
if(process.env.NODE_ENV === 'test'){
  const testingRouter = require('./controllers/tests')
  app.use('/api/testing', testingRouter)
}

module.exports = app