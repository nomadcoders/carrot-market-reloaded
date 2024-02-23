import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default db;

async function testPrisma() {
  const newUser = await db.user.create({
    data: {
      username: "니꼬",
    },
  });
  console.log(newUser);
}

testPrisma();
