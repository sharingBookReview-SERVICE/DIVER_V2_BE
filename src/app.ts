import express, { Request, Response } from 'express'

const app = express()
const PORT = 3000

const cake: string = 'cake'

app.get('/books/:book_id', (req: Request, res: Response): void => {
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
