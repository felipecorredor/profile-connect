import prisma from "../../../libs/prismadb";

export default async function handle(req, res) {
  const students = await prisma.student.findMany();
  res.json(students);
}
