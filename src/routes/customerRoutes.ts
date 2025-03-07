import { Router } from "express";
import { ProductRepository } from "../repositories/product.repository";
import { CustomerController } from "../controllers/customerController";
import { CustomerRepository } from "../repositories/customer.repository";
import CustomerService from "../services/customer.service";
import { OrderRepository } from "../repositories/order.repository";
import OrderService from "../services/order.service";
import { OrderController } from "../controllers/orderController";

const router = Router();

const customerRepository = new CustomerRepository();
const productRepository = new ProductRepository();
const customerService = new CustomerService(customerRepository);
const customerController = new CustomerController(customerService);
const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository, productRepository);
const orderController = new OrderController(orderService);




router.post('/create', customerController.createCustomer.bind(customerController));
router.post('/order-placed', orderController.createOrder.bind(orderController));
router.get('/all-orders', orderController.allOrders.bind(orderController));





export default router;




