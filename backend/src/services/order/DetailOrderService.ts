import prismaClient from "../../prisma";

interface DetailRequest {
    order_id: string
}

class DetailOrderService {
    async execute({ order_id }: DetailRequest) {

        let orderId = Number.parseInt(order_id);

        const orders = await prismaClient.item.findMany({
            where: {
                order_id: orderId
            },
            include:{
                product: true,
                order: true
            }
        })

        return orders;
    }
}

export { DetailOrderService }