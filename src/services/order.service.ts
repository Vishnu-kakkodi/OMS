
import { IOrderDocument } from "../type/order.type";
import { IOrderService } from "../interfaces/ServiceInterface/IOrderService";
import { IOrderRepository } from "../interfaces/RepositoryInterface/IOrderRepository";
import { IProductRepository } from "../interfaces/RepositoryInterface/IProductRepository";



class OrderService implements IOrderService {
    private readonly orderRepository: IOrderRepository
    private readonly productRepository: IProductRepository


    constructor(orderRepository: IOrderRepository, productRepository: IProductRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;

    }

    async createOrder(orderDetails: IOrderDocument): Promise<IOrderDocument> {
        try {
            const productId = (orderDetails.product).toString()
            const product = await this.productRepository.findOne(productId);
            if (product) {
                product.totalPurchase = 1 + 1;
                await product.save();
            }

            const response = await this.orderRepository.create(orderDetails);
            return response
        } catch (error) {
            throw error
        }
    }

    async allOrders(): Promise<IOrderDocument[] | null> {
        try {
            const response = await this.orderRepository.allOrders();
            return response
        } catch (error) {
            throw error
        }
    }

    async revenue(manufactureId: string): Promise<any> {
        try {
            const response = await this.orderRepository.revenue(manufactureId);
            return response
        } catch (error) {
            throw error
        }
    }



}

export default OrderService;