const posts = require('../data/posts')

const index = (req, res) => {
  res.json(posts)
}

const show = (req, res) => {
  res.json('Visualizzo un post in base al suo id')
}

const store = (req, res) => {
  res.send('Aggiungo un post')
}

const update = (req, res) => {
  res.send("Modifico un post in base all'id")
}

const modify = (req, res) => {
  res.send("Modifico parzialmente un post in base all'id")
}

const destroy = (req, res) => {
  res.send("Rimuovo un post in base all'id")
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}