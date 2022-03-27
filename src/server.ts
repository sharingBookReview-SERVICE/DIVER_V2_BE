import express from 'express'
import BookController from './books/book.controller'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('server is ready')
})
app.use('/api', BookController)

app.listen(PORT, () => {
	console.log(`App listening at PORT: ${PORT}`)
})

export default app