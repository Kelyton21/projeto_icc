import prismaClient from "../../prisma";

class ListOrdersService{
    async execute(){

        const order = await prismaClient.order.findMany({
            where:{
                draft: false,
                status: false,
            },
            orderBy:{
                creted_at:'desc'
            }
        })

        return order;
    }
}

export {ListOrdersService}