import prisma from "../config/database.js";
import { generateToken } from "../utils/jwt.js";
import bcrypt from "bcrypt";
async function registerUser(email, password, name,nim,nidn) {
  const role = nim ? "Student" : "Lecturer";
  console.log(role,nim,nidn);
  if(!email || !password || !name) return { success: false, message: "Semua field harus diisi" };
  const hashedPass = await bcrypt.hash(password,10);
  console.log(hashedPass,"hashedPass");
  if (
    await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
  )
    return { success: false, message: "Email sudah terdaftar" };

  const user = await prisma.user.create({
    data: {
      email: email,
      password: hashedPass,
      name: name,
      role: role,
      profile: {
        create: {
          nidn: nidn,
          nim: nim
        },
      },
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  return user;
}

async function loginUser(email, password) {
  if(!email || !password) return { success: false, message: "Semua field harus diisi" };
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  const isMatch = await bcrypt.compare(password,user.password);
  if (user && isMatch) {
    delete user.password;
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    });
    return {
      user,
      accessToken: token,
    };
  } else return null;
}

export default { registerUser, loginUser };
