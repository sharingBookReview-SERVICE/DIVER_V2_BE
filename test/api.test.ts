import request from 'supertest'
import app from '../src/app'

describe('Sample Test', () => {
	describe('Book APIs', () => {
		describe('GET /books/:book_id', () => {
			it('should return book object', async () => {
				const book_id = '9788937460777'
				// todo 미리 해당 책 정보를 db에 직접 넣어둬야함
				await request(app)
					.get(`/books/${book_id}`)
					.set('Accept', 'application/json')
					.set('Content-Type', 'application/json')
					.expect(200, {
						'_id': '9788937460777',
						'title': '1984',
						'link': 'https://book.naver.com/bookdb/book_detail.naver?bid=125627',
						'image': 'https://www.example.com',
						'author': '조지 오웰',
						'price': 9500,
						'discount': 0.1,
						'pubdate': '2003-03-15',
						'review_count': 58,
						'tags': [
							'세계문학',
							'저항'
						]
					})
			})
			describe('should crawl book data', () => {
				it('should return book object', async () => {
					const book_id = '9788937462481' // 인형의집
					await request(app)
						.get(`/books/${book_id}`)
						.set('Accept', 'application/json')
						.set('Content-Type', 'application/json')
						.expect(200, {
							'_id': '9788937462481',
							'title': '인형의 집',
							'link': 'https://book.naver.com/bookdb/book_detail.naver?bid=6319633',
							'image': 'https://www.example.com',
							'author': '헨릭 입센',
							'price': 8000,
							'discount': 0.1,
							'pubdate': '2010-06-30',
							'review_count': 0,
							'tags': []
						})
				})
			})
		})
	})
})