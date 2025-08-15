import  prisma  from "../config/database.js";
export async function getAllBooks() {
    return await prisma.books.findMany();
}

export async function getBookById(id) {
  return await prisma.books.findUnique({
    where: {
      id: id
    },
    include: {
      category: true,
      genre: true
    }
  });
}

export async function createBook(data) {
  return await prisma.books.create({
    data: {
      title: data.title,
      author: data.author,
      year: data.year,
      ISBN: data.ISBN,
      cover: data.cover,
      stok: data.stok ?? 0,
      categoryId: data.categoryId,
      genreId: data.genreId,
      cover: data.cover
    },
    include: {
      category: true,
      genre: true
    }
  });
}

export async function deleteBookById(id) {
  return await prisma.books.update({
    where: {
      id: id
    },
    data: {
    //   deletedAt: new Date()
      
    }
  });
}