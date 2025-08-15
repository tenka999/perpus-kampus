import prisma from "../config/database.js";

export async function getAllGenre() {
    return await prisma.genre.findMany();
}

export async function createGenre(data) {
    return await prisma.genre.create({
        data: {
            name: data.name
        }
    });
}