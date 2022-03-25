import axios from 'axios'
import cheerio from 'cheerio'
import fs from 'fs/promises'
/**
 * Book's ID from Naver book search (https://book.naver.com)
 * @typedef {number} bid
 */

/**
 * @type {bid[]}
 */
const bidArr = [8902711, 5128976]
/**
 * Crawl book data and randomly generate review_count property. Saves result as JSON file.
 * @param bidArr {bid[]}
 * @returns {Promise<void>}
 */
async function fakeBooks (bidArr) {

	const result = []
	const URI = 'https://book.naver.com/bookdb/book_detail.naver?bid='
	for (const bid of bidArr) {
		const link = URI + bid
		const { data } = await axios.get(URI + bid)
		const $ = cheerio.load(data)

		// 크롤링하는 속성
		const title = $('div.book_info > h2 > a').children().remove().end().text().trim() //https://runkit.com/fffact/59293292f48c2a00125cc277
		const image = $('div.thumb_type img').attr('src')
		const author = $('div.book_info_inner > div:nth-child(2) > a:nth-child(2)').text()
		const price = $('div.book_info_inner div.lowest .price').text()
		const discount = $('div.book_info_inner div.lowest span.discount').text().match(/\d+/)?.[0] / 100 || 0
		const pubdate = $('div.book_info_inner > div:nth-child(2)').children().remove().end().text().trim().replaceAll('.', '-')

		// 랜덤으로 생성하는 속성
		const review_count = Math.floor(Math.random() * 100)

		result.push({title, link, image, author, price, discount, pubdate, review_count})
	}

	await fs.writeFile('./crawl.json', JSON.stringify(result))
}
