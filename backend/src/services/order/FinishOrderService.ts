import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
}

class FinishOrderService {
    async execute({ order_id }: OrderRequest) {

        let orderId = Number.parseInt(order_id);

        const order = await prismaClient.order.update({
            where: {
                id: orderId
            },
            data: {
                status: true
            }
        })

        return order;
    }
}

export { FinishOrderService }