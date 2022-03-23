import axios from 'axios'
/**
 * Book's ID from Naver book search (https://book.naver.com)
 * @typedef {number} bid
 */

/**
 * @type {bid[]}
 */
const bidArr = [8902711, 5128976]
const URI = 'https://book.naver.com/bookdb/book_detail.naver?bid='
for (const bid of bidArr) {
	const link = URI + bid
	const { data } = await axios.get(URI + bid)
}