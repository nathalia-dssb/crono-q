import prisma from "../../lib/prisma";
export default defineEventHandler(async (event) => {
  return {
    events: await prisma.events.findMany(),
  };
});
