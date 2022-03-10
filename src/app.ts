import express, { Request } from 'express'

const app = express()
const PORT = 3000

app.get('/books', (req: Request, res): void => {
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
	return
})

export default app

app.listen(PORT, () => {
	console.log(`App listening at PORT: ${PORT}`)
})
