import { Prisma, PrismaClient} from "@prisma/client";
const prisma  = new PrismaClient();
/*
-Model katmanında daha fazla detaya girmeye gerek yoktur
-Sadece al ver kısmı olur
 */
export const findAllUsers = async() =>{
    return await prisma.user.findMany();
}