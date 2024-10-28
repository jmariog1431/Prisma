
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { search } = req.query;

    const products = await prisma.product.findMany({
      where: search ? { code: { contains: search } } : {},
    });
    return res.json(products);
  }

  if (req.method === "POST") {
   
    const { code, name, price } = req.body;
    const newProduct = await prisma.product.create({
      data: { code, name, price },
    });
    return res.status(201).json(newProduct);
  }

  return res.status(405).end(); 
}
