// Create a web server
// 1. GET /comments - returns all comments
// 2. GET /comments/:id - returns comments by id
// 3. POST /comments - create a new comment
// 4. PUT /comments/:id - update a comment by id
// 5. DELETE /comments/:id - delete a comment by id

const express = require('express')
const bodyParser = require('body-parser')
const comments = require('./comments-data')

const app = express()

app.use(bodyParser.json())

app.get('/comments', (req, res) => {
  res.json(comments)
})

app.get('/comments/:id', (req, res) => {
  const { id } = req.params
  const comment = comments.find(comment => comment.id === Number(id))
  if (!comment) {
    res.status(404)
    res.json({ message: `Comment with id ${id} not found` })
  } else {
    res.json(comment)
  }
})

app.post('/comments', (req, res) => {
  const comment = req.body
  comment.id = comments.length + 1
  comments.push(comment)
  res.status(201)
  res.json(comment)
})

app.put('/comments/:id', (req, res) => {
  const { id } = req.params
  const comment = comments.find(comment => comment.id === Number(id))
  if (!comment) {
    res.status(404)
    res.json({ message: `Comment with id ${id} not found` })
  } else {
    Object.assign(comment, req.body)
    res.json(comment)
  }
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params
  const index = comments.findIndex(comment => comment.id === Number(id))
  if (index === -1) {
    res.status(404)
    res.json({ message: `Comment with id ${id} not found` })
  } else {
    comments.splice(index, 1)
    res.status(204)
    res.send()
  }
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})