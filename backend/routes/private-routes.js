import Books from "../controllers/books-controller.js";
import detailBookController from "../controllers/detail-book-controller.js";
import genreController from "../controllers/genre-controller.js";
import categoryController from "../controllers/category-controller.js";
import usersController from "../controllers/users-controller.js";
import reviewController from "../controllers/review-controller.js";
import profileController from "../controllers/profile-controller.js";
import borrowingController from "../controllers/borrowing-controller.js";
import likedBookController from "../controllers/liked-book-controller.js";
import likedReviewController from "../controllers/liked-review-controller.js";
import wishlistController from "../controllers/wishlist-controller.js";
import annotationController from "../controllers/annotation-controller.js";
import {
  coverBook,
  uploadPdf,
  uploadProfile,
} from "../middlewares/cover-book.js";
import { Router } from "express";
import authMiddleWare from "../middlewares/auth.js";

const privateRouter = Router();

privateRouter.use(authMiddleWare);

//#region Book
privateRouter.post(
  "/books",
  coverBook.single("cover"),
  uploadPdf.single("pdf"),
  Books.create
);
privateRouter.put(
  "/books/:id",
  coverBook.single("cover"),
  uploadPdf.single("pdf"),
  Books.updateOne
);
privateRouter.delete("/books/:id", Books.deleteOne);
//#endregion Book

//#region Detail Book
privateRouter.post("/booksdetail", detailBookController.createDetailBook);
privateRouter.put("/booksdetail/:id", detailBookController.updateDetailBook);
privateRouter.delete("/booksdetail/:id", detailBookController.deleteDetailBook);
//#endregion Detail Book

//#region Review
privateRouter.post("/reviews", reviewController.upsertReview); // bisa create/update
privateRouter.delete("/reviews/:id", reviewController.deleteReview);
//#endregion Review

//#region Annotation
privateRouter.get("/annotations", annotationController.getallAnnotation);
privateRouter.get("/annotations/:id", annotationController.getAnnotationById);
privateRouter.get(
  "/annotations/book/:bookId",
  annotationController.getAnnotationByBookId
);
privateRouter.post("/annotations", annotationController.createAnnotation);
privateRouter.put("/annotations/:id", annotationController.updateAnnotation);
privateRouter.delete("/annotations/:id", annotationController.deleteAnnotation);
//#endregion Annotation

//#region Wishlist
privateRouter.get("/wishlists", wishlistController.getAllWishlist);
privateRouter.get("/wishlists/:id", wishlistController.getWishlistById);
//#endregion Wishlist

//#region Profile
privateRouter.get("/profiles", profileController.getAllProfile);
privateRouter.get("/profiles/:id", profileController.getProfileById);
privateRouter.get(
  "/profiles/email/:email",
  profileController.getProfileByEmail
);
privateRouter.put(
  "/profiles/:id",
  uploadProfile.single("foto"),
  profileController.updateProfile
);
privateRouter.delete("/profiles/:id", profileController.deleteProfile);
//#endregion Profile

//#region Borrow
privateRouter.get("/borrowings", borrowingController.getAllBorrowing);
privateRouter.get(
  "/borrowings/status/:status",
  borrowingController.getAllBorrowingByStatus
);
privateRouter.get(
  "/borrowings/deleted",
  borrowingController.getBorrowingDeleted
);
privateRouter.get(
  "/borrowings/exist",
  borrowingController.getAllBorrowingExist
);
privateRouter.get("/borrowings/:id", borrowingController.getBorrowingById);
privateRouter.post("/borrowings", borrowingController.createBorrowing);
privateRouter.put("/borrowings/:id", borrowingController.updateBorrowing);
privateRouter.delete("/borrowings/:id", borrowingController.deleteBorrowing);
//#endregion Borrow

//#region Approval
//#endregion Approval

//#region user
privateRouter.get("/users", usersController.getAllUsers);
privateRouter.get("/users/:id", usersController.getUserById);
privateRouter.get("/users/email/:email", usersController.getUserByEmail);
privateRouter.post("/users", usersController.createUser);
privateRouter.put("/users/:id", usersController.updateUser);
privateRouter.delete("/users/:id", usersController.deleteUser);
//#endregion user

//#region Genre
privateRouter.post("/genres", genreController.createGenre);
privateRouter.put("/genres/:id", genreController.updateGenre);
privateRouter.delete("/genres/:id", genreController.deleteGenre);
//#endregion Genre

//#region Category
privateRouter.post("/categories", categoryController.createCategory);
privateRouter.put("/categories/:id", categoryController.updateCategory);
privateRouter.delete("/categories/:id", categoryController.deleteCategory);
//#endregion Category

export default privateRouter;
