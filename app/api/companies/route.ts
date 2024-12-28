import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      include: {
        directors: true,
      },
    })
    return NextResponse.json(companies)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching companies' }, { status: 500 })
  }
}