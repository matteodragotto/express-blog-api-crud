const posts = require('../data/posts')

const index = (req, res) => {
  let postsList = posts
  const {tag} = req.query 

  
  if (tag) {
    const normalizeTag = tag.toLowerCase();
    postsList = posts.filter(post => post.tags.map(tag => tag.toLowerCase()).includes(normalizeTag))
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
  console.log(req.body);

  const id = posts[posts.length - 1].id + 1;

  const newPost = {
    id,
    ...req.body
  };

  posts.push(newPost);

  res.status(201)  
  res.json(posts)
}

const update = (req, res) => {
  const id =  req.params.id
  const post = posts.find(post => post.id == id)

  if(!post){
    res.status(404)
    return res.json({
      message: 'Partecipante non trovato',
      status: 404,
      error: 'Not Found'
    })
  };

  for (let key in req.body) {
    post[key] = req.body[key]
  }

  res.json(post)
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