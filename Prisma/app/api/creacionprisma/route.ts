import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

prisma.user.create({
    data:{
        nombre:"Mario",
        correo:"Mario@miumg.com",
        post:{create:{
            titulo:"Inge Mario",
            contenido:"Algo"
        }},
        perfil:{
            create:{
                biografia:"Ingeniero Mario"
            }
        }
    }
})