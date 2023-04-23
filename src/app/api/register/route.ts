import  prisma  from "@/lib/prismadb"
import { User } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(
  req: Request
){
  const body = await req.json()

  const {
    email,
    hashPassword,
    name,
  } = body

 
  const registerUser = await prisma.user.create({
    data: {
      email,
      hashPassword,
      name
    }
  })

  return NextResponse.json(registerUser)
}