import { getAllBooks, createBook, deleteBookById, getBookById } from "../services/books-service.js";

async function getManyBook(req, res) {
  try {
    const books = await getAllBooks();
    res.json({ success: true, data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

 async function getOne(req, res) {
  try {
    const book = await getBookById(req.params.id);
    res.json({ success: true, data: book });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

 async function create(req, res) {
  try {
    const newBook = await createBook(req.body);
    res.status(201).json({ success: true, data: newBook });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function deleteBook(req, res) {
  try {
    const deletedBook = await deleteBookById(req.params.id);
    res.json({ success: true, data: deletedBook });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export default { getManyBook, getOne, create, deleteBook };