const posts = require('../data/posts')

const index = (req, res) => {
  let postsList = posts
  const {tag} = req.query   
  
  if (tag) {
    postsList = posts.filter(post => post.tags.includes(tag))
  }  

  res.json(postsList)
}

const show = (req, res) => {
  const filteredPosts = posts.find(post => post.id == req.params.id)
  
  if (!filteredPosts) {
    res.status(404)
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'not found'
    })
  }
  res.json(filteredPosts)
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
  const filteredPosts = posts.find(post => post.id == req.params.id)

  if (!filteredPosts) {
    res.status(404)
    return res.json({
      message: 'Post non trovato',
      status: 404,
      error: 'not found'
    })
  }

  posts.splice(posts.indexOf(filteredPosts), 1)
  console.log(posts);
  
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}