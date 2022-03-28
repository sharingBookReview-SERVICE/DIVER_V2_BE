import express from 'express'
import BookController from './books/book.controller'

const app = express()
const PORT = 3000

app.use('/api', BookController)

app.get('/', (req, res) => {
  res.send('server is ready')
})

app.get('/books/:book_id', (req, res) => {
	const book_id: string = req.params.book_id

	if (book_id == '9788937460777') {
		res.json({
			_id: '9788937460777'
		})
	} else if (book_id == '9788937462481') {
		res.json({
			_id: '9788937462481'
		})
	}
})

app.listen(PORT, () => {
	console.log(`App listening at PORT: ${PORT}`)
})

export default app