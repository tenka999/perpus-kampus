import { getAllGenre, createGenre } from "../services/genre-service.js";

export async function getGenre(req, res) {
    try {
        const genre = await getAllGenre();
        res.json({ success: true, data: genre });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export async function postGenre(req, res) {
    try {
        const newGenre = await createGenre(req.body);
        res.status(201).json({ success: true, data: newGenre });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}