import prisma from '@/lib/prismadb'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { email, password, name } = body

  const verify = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (verify) {
    throw new Error('User already exist')
  }

  const hashPassword = await bcrypt.hash(password, 8)

  const registerUser = await prisma.user.create({
    data: {
      email,
      hashPassword,
      name
    },
    select: {
      email: true,
      name: true
    }
  })

  return NextResponse.json(registerUser)
}
