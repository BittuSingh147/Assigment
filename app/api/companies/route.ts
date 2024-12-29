// app/api/companies/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      include: {
        directors: true,
      },
    });
    
    return NextResponse.json({ companies });

  } catch (error) {
    // Proper error logging
    if (error instanceof Error) {
      console.error('Database Error:', error.message);
    }
    
    // Return a properly formatted error response
    return NextResponse.json(
      { error: 'Internal Server Error', message: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}