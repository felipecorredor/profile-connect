import prisma from "../../../libs/prismadb";

export default async function handler(_, res) {
  try {
    const students = await prisma.student.findMany();

    res.status(200).json({ students });
  } catch (error) {
    res.status(500).send({ error });
  }
}
