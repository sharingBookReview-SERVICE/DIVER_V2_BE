import { ReviewRepository } from "../types/types";
import { TEST_REVIEW_INFORMATION } from "./review.fake_resource";

const fakeReivewRepository : ReviewRepository = {
  getArrayOfAllReviewOfOneBook: async() => TEST_REVIEW_INFORMATION,
}