import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: number
};

class SendOrderService {
    async execute({ order_id }: OrderRequest) {

        const order = await prismaClient.order.update({
            where: {
                id: order_id
            },
            data: {
                draft: false
            }
        })

        return order;
    }
}

export { SendOrderService }