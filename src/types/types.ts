export interface BookRepository {
  getABook(): Promise<BookInfo>
  getArrayOfBestSellingBook(): Promise<BookInfo[]>
} 

export class BookInfo {
    _id: number;
    title: number;
    link: string;
    image: string;
    author: string;
    price: number;
    discount: number;
    pubdate: string;
    review_count: number;
    tags: string[];
}