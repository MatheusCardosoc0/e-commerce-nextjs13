import prisma from '@/lib/prismadb'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { name, password, email } = body

  const admin = await prisma.admin.findUnique({
    where: {
      email
    }
  })

  if (!admin) {
    throw new Error('Invalid credentials')
  }

  const verifyName = await prisma.admin.findUnique({
    where: {
      name
    }
  })

  if (!verifyName) {
    throw new Error('Invalid credentials')
  }

  const decodePassword = await bcrypt.compare(password, admin.hashPassword)

  if (!decodePassword) {
    throw new Error('Invalid Password')
  }

  return NextResponse.json({ authorized: true })
}
