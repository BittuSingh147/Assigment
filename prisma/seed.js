import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.director.deleteMany()
  await prisma.company.deleteMany()

  // Create companies with their directors
  const companies = [
    {
      name: 'TechCorp Solutions',
      description: 'Leading provider of enterprise software solutions',
      industry: 'Technology',
      founded: 2010,
      website: 'www.techcorp.com',
      directors: [
        { name: 'John Smith', position: 'CEO' },
        { name: 'Sarah Johnson', position: 'CTO' },
      ],
    },
    {
      name: 'GreenEnergy Inc',
      description: 'Renewable energy solutions provider',
      industry: 'Energy',
      founded: 2015,
      website: 'www.greenenergy.com',
      directors: [
        { name: 'Michael Brown', position: 'CEO' },
        { name: 'Emma Davis', position: 'COO' },
      ],
    },
    {
      name: 'HealthTech Innovations',
      description: 'Healthcare technology solutions',
      industry: 'Healthcare',
      founded: 2018,
      website: 'www.healthtech.com',
      directors: [
        { name: 'David Wilson', position: 'CEO' },
        { name: 'Lisa Chen', position: 'CTO' },
      ],
    },
  ]

  for (const company of companies) {
    const { directors, ...companyData } = company
    const createdCompany = await prisma.company.create({
      data: companyData,
    })

    for (const director of directors) {
      await prisma.director.create({
        data: {
          ...director,
          companyId: createdCompany.id,
        },
      })
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })