import prisma from "../config/database.js";

export async function getAllDetailBook() {
    return await prisma.detailBook.findMany();
}

export async function getDetailBook(id) {
    return await prisma.detailBook.findUnique({
        where: {
            id: id
        },
        include: {
            genre: true,
            category: true
        }
    });
}

export async function createDetailBook(data) {

    const isExist = await prisma.detailBook.count({
        where: {
            bookId: data.bookId
        }
    })

    if(isExist) {
        throw new Error("Detail Book already exist");
    }
    return await prisma.detailBook.create({
        data: {
            originaltitle: data.originaltitle,
            rating: data.rating,
            review_count: data.review_count,
            deskripsi: data.deskripsi,
            pages: data.pages,
            language: data.language,
            tipecover: data.tipecover,
            format: data.format,
            pdf_url: data.pdf_url,
            bookId: data.bookId,
        }
    });
}