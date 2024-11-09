import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    await prisma.calculation.deleteMany({});
    res.status(200).json({ message: 'All calculations cleared' });
  } else {
    res.status(405).end();
  }
}