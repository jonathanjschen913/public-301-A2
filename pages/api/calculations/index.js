import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { expression, result, name } = req.body;
    const calculation = await prisma.calculation.create({
      data: { expression, result, name },
    });
    res.status(201).json(calculation);
  } else if (req.method === 'GET') {
    const { search } = req.query;
    let calculations;
    if (search) {
      calculations = await prisma.calculation.findMany({
        where: {
          name: {
            contains: search,
          },
        },
      });
    } else {
      calculations = await prisma.calculation.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        take: 10,
      });
    }
    res.status(200).json(calculations);
  } else {
    res.status(405).end();
  }
}