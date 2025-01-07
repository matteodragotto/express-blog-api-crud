const express = require('express')
const postsRouter = require('./router/posts')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Server dei posts')
})

app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log('Sono in ascolto sulla porta 3001')
})