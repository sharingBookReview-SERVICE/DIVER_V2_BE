import {Request, Response, NextFunction} from 'express'
import fakeBookRepository from './book.fake_repository'

export class BookService {
  static async getABookService(req: Request, res: Response, next: NextFunction) {
    const { book_id } = req.params
    res.send(await fakeBookRepository.getABook())
  }
  static async getArrayOfBestSellingBookService(req: Request, res: Response, next: NextFunction) {
    res.send(await fakeBookRepository.getArrayOfBestSellingBook())
  }
}

export default BookService