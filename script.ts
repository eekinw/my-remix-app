import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  });

  console.log('User created:', user);

  const reading = await prisma.reading.create({
    data: {
      title: 'Understanding Prisma',
      has_read: false,
      url: 'https://www.prisma.io/docs',
      image: 'https://prisma.io/logo.png',
      userId: user.id,
    },
  });

  console.log('Reading created:', reading);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
