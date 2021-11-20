// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma, { RequestHistory } from '../../../lib/prisma';

type Data = {
  record: RequestHistory | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log(req.query);
  const RecordId: number = Number(req.query.RecordId);
  console.log(RecordId);
  const record = await prisma.requestHistory.findUnique({
    where: {
      RecordId: RecordId,
    },
  });
  // console.log(count);
  res.status(200).json({ record: record });
}
