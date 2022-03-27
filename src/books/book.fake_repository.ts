import { TEST_BESTSELLING_BOOKS_INFORMATION, TEST_BOOK_INFORMATION } from "../fake/book"
import { BookRepository } from "../types/types"

const fakeBookRepository : BookRepository = {
  getABook: async() => TEST_BOOK_INFORMATION,
  getArrayOfBestSellingBook: async() => TEST_BESTSELLING_BOOKS_INFORMATION,
}

export default fakeBookRepository