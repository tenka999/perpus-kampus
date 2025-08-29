import prisma from "../config/database.js";
import bcrypt from "bcrypt";


async function getAllUsers() {
    return await prisma.user.findMany();
}

async function getUserById(id) {
    return await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
}

async function getUserByEmail(email) {
    return await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
}

async function createUser(data) {
    const hashedPass = await bcrypt.hash(data.password, 10);
    console.log(data,'data service')
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPass,
            createdById: parseInt(data.createdById),
            role: data.role,
            profile: { create: {
                createdById: parseInt(data.createdById) 
            } }
        },
        include: {
            profile: true
        }
    });
}


async function updateUser(id,data) {
    return await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            name: data.name,
            email: data.email,
            updatedById: parseInt(data.updatedById),
            role: data.role
        },
    });
}

async function deleteUser(id, deletedById) {
    return await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            deletedAt: new Date(),
            deletedById: deletedById,
        },
    });
}

export default {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
};