import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string
}

class RemoveOrderService {
    async execute({ order_id }: OrderRequest) {
        let orderId = Number.parseInt(order_id);

        const order = await prismaClient.order.delete({
            where: {
                id: orderId
            }
        })

        return order;
    }
}

export { RemoveOrderService }