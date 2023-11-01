import prisma from "../../../libs/prismadb";

export default async function handle(req, res) {
  try {
    const students = await prisma.student.findMany();

    res.json(students);
  } catch (error) {
    console.error("Error getting students::", error);
    res.status(500).json({ error });
  }
}
