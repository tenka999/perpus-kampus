import { getAllDetailBook, getDetailBook, createDetailBook } from "../services/detail-book-service.js";

export async function getManyDetailBook(req, res) {
    try {
        const detailBook = await getAllDetailBook();
        res.json({ success: true, data: detailBook });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export async function getOneDetailBook(req, res) {
    try {
        const detailBook = await getDetailBook(req.params.id);
        res.json({ success: true, data: detailBook });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export async function create(req, res) {
    try {
        const newDetailBook = await createDetailBook(req.body);
        res.status(201).json({ success: true, data: newDetailBook });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
