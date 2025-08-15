import express from "express";
import cors from "cors";
import { Router } from "express";

const app = express();
const PORT = 5000;
const router = Router();
// import { publicRouter } from "./routes/public-routes.js";

// app.use("/api", publicRouter);
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
// res.send("Hello World!");
// });

//Import Controller
import bookController from "./controllers/books-controller.js";

import { getGenre, postGenre } from "./controllers/genre-controller.js";

import  categoryController  from "./controllers/category-controller.js";

import { getManyDetailBook, getOneDetailBook, create as createBookDetail } from "./controllers/detail-book-controller.js";

//#region Genre
app.get("/genre", getGenre);
app.post("/genre", postGenre);
//#endregion Genre

//#region Category
app.get("/category", categoryController.getCategory);
app.post("/category", categoryController.postCategory);
//#endregion Category   

//#region Books
app.get("/books", bookController.getManyBook);
app.get("/books/:id", bookController.getOne);
app.post("/books", bookController.create);
app.delete("/books/:id", bookController.deleteBook);
//#endregion Books

//#region Detail Book
app.get("/detailbook", getManyDetailBook);
app.get("/detailbook/:id", getOneDetailBook);
app.post("/detailbook", createBookDetail);
//#endregion Detail Book

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
