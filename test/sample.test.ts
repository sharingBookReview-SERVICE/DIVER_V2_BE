import request from 'supertest'
import app from '../src/app'

it('should add 1 and 2', async () => {
	const book_id = '9788937460777'
	await request(app)
		.get(`/books/${book_id}`)
		.expect(200, {
			_id: book_id
		})
})