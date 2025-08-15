import prisma from "../config/database.js";

export async function getallCategory() {
    return await prisma.genre.findMany();
}

export async function cretaCategory(data) {
    return await prisma.genre.create({
        data: {
            name: data.name
        }
    });
}