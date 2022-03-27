import express from 'express'
import BookService from './book.service'

const BookController = express.Router()

BookController.get('/books/:book_id', BookService.getABookService)
BookController.get('/books/bestsellers', BookService.getArrayOfBestSellingBookService)

export default BookController