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

export interface ReviewRepository {
  getArrayOfAllReviewOfOneBook(): Promise<ReviewInfo>
}

export class ReviewInfo {
    _id: string;
    user_id: string;
    book_id: number;
    comment_count: number;
    like_count: number;
    quote: string;
    content: string;
    image_uri: string;
    tags: string[];
    timestamp: {
      createAt: Date,
      updatedAt: Date
    };
}