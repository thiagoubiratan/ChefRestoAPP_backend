import prismaClient from "../../prisma";

interface ItemRequest {
    item_id: string
}

class RemoveItemService {
    async execute({ item_id }: ItemRequest) {
        let orderId = Number.parseInt(item_id);

        const order = await prismaClient.item.delete({
            where: {
                id: orderId
            }
        })

        return order
    }
}

export { RemoveItemService }