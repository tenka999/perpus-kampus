import { getallCategory, cretaCategory } from "../services/category-service.js";

async function getCategory(req, res) {
    try {
        const category = await getallCategory();
        res.json({ success: true, data: category });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function postCategory(req, res) {
    try {
        const newCategory = await cretaCategory(req.body);
        res.status(201).json({ success: true, data: newCategory });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export default { getCategory, postCategory };