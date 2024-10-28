import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { code, name, description, price } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { code },
      data: { name, description, price },
    });
    res.json(updatedProduct);
  }
}
