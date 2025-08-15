const { getAllBooks } = require("../controllers/book-controller");
const { loginUser } = require("../controllers/user-login-controller");
const express = require("express");
const publicRouter = express.Router();

publicRouter.use("/login", loginUser);
// publicRouter.get("/buku", getAllBooks  );

module.exports = { publicRouter };
