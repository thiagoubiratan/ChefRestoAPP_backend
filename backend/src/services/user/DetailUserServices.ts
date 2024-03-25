import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {
        
        const user = await prismaClient.user.findFirst({
            where: {
                id: Number.parseInt(user_id),
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })

        return user;
    }
}

export { DetailUserService }