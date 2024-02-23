import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

export default db;

db.sMSToken
  .findMany({
    include: {
      user: true,
    },
  })
  .then(console.log);
