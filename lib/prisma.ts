import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Augment the global type to include 'prisma'
declare global {
  namespace NodeJS {
      interface Global {
        prisma?: PrismaClient;
      }
    }
  
    var prisma: PrismaClient;
  }


const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

export default prisma;
