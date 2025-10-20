import prisma from "../utils/prisma";

export default defineEventHandler(async (event) => {
  return {
    events: await prisma.events.findMany(),
  };
});
