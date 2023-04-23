import prisma from "@/lib/prismadb";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request
){
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}