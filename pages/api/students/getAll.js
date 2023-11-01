// import prisma from "../../../libs/prismadb";

export default async function handler(_, res) {
  try {
    // const students = await prisma.student.findMany();

    res.status(200).json({
      students: [
        {
          createdAt: "2023-10-25T04:23:49.244Z",
          dateOfBirth: null,
          description: "jknj",
          email: "felipecorredor75@gmail.com",
          firstName: "Juan Felipe",
          id: "65389856f319c0d538f42ebc",
          lastName: "Corredor",
          phoneNumber: "+573113201577",
        },
        {
          createdAt: "2023-10-25T04:23:49.244Z",
          dateOfBirth: null,
          description: "jknj",
          email: "felipecorredor75@gmail.com",
          firstName: "Juan Felipe",
          id: "65389856f319c0d538f42ebc",
          lastName: "Corredor",
          phoneNumber: "+573113201577",
        },
      ],
    });
  } catch (error) {
    res.status(500).send({ error });
  }
}
