import prisma from "../../../libs/prismadb";

export default async function handler(req, res) {
  try {
    const user = await prisma.student.create({
      data: {
        ...req.body,
        userId: "652dbc36f246ea39ea7d5b12",
      },
    });

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send({ error });
  }
}
