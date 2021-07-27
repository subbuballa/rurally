import type { NextApiRequest, NextApiResponse } from "next";
import { createBank, getBanks } from "lib/db/bank";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const banks = await getBanks();
      return res.json(banks);
    case "POST":
      const result = await createBank(req.body);
      return res.json(result);
    default:
      return res.status(405).json({
        message: "Method not allowed",
      });
  }
}
