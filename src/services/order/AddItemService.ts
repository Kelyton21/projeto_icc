import prismaClient from "../../prisma";

interface ItemRequest{
    order_id: string;
    producct_id: string;
    amount: number;
}

class AddItemService{
    async execute({order_id,producct_id,amount}:ItemRequest){

        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                producct_id: producct_id,
                amount
            }
        })

        return order;
    }
}

export {AddItemService}