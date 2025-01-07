const posts = require('../data/posts')

const index = (req, res) => {
  res.send('Lista dei post')
}

const show = (req, res) => {
  res.send('Visualizzo un post in base al suo id')
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