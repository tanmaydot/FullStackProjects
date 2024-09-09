import prisma from "@/db";
import bcrypt from 'bcrypt'
// pages/api/data.js

export async function POST(req: Request) {

  const body = await req.json()

  const { name, email, password, accountType } = body
  console.log(accountType)
  try {
    const alreadyExists = await prisma.user.findUnique({ where: { email: email}})
    if(alreadyExists) {
      return new Response(JSON.stringify({ "status": "500", "error": "user already exists"}))
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            hashedPassword,
            userType: accountType,
          }
        })
      return new Response(JSON.stringify({ "status": "200", "success": "Successfully registered"}));
    }
  } catch (error) {
    console.log(error)
  }
}