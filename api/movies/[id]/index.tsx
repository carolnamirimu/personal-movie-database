import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "GET") {
    const movies = await prisma.movie.findMany();
    return res.send(movies);
  } else if (req.method === "post") {
    res.status(201).send("POST");
  }
}
