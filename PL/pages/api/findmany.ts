// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma, {RequestHistory} from '../../lib/prisma';

type Data = {
  histories: RequestHistory[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const histories = await prisma.requestHistory.findMany();
  console.log(histories);
  res.status(200).json({ histories: histories });
}
