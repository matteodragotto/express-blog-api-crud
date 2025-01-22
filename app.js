const express = require('express')
const cors = require('cors')
const postsRouter = require('./router/posts')
const app = express()
const port = 3001

const notFound = require('./middlewares/notFound')
const errorsHandler = require('./middlewares/errorsHandler')

app.use(cors({
  origin: 'http://localhost:5173/'
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Server dei posts')
})

app.use('/posts', postsRouter);

app.use(errorsHandler)
app.use(notFound);


app.listen(port, () => {
  console.log('Sono in ascolto sulla porta 3001')
})