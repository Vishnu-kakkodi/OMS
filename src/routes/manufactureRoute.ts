import { Router } from "express";
import { ManufactureRepository } from "../repositories/manufacture.repository";
import ManufactureService from "../services/manufacture.service";
import { ManufactureController } from "../controllers/manufactureController";
import { ProductRepository } from "../repositories/product.repository";
import ProductService from "../services/product.service";
import { ProductController } from "../controllers/productController";
import { OrderRepository } from "../repositories/order.repository";
import OrderService from "../services/order.service";
import { OrderController } from "../controllers/orderController";

const router = Router();

const manufactureRepository = new ManufactureRepository();
const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const manufactureService = new ManufactureService(manufactureRepository);
const manufactureController = new ManufactureController(manufactureService);
const productController = new ProductController(productService);
const orderRepository = new OrderRepository();
const orderService = new OrderService(orderRepository, productRepository);
const orderController = new OrderController(orderService)



router.post('/create', manufactureController.createManufacture.bind(manufactureController));
router.post('/add-product', productController.createProduct.bind(productController));
router.patch('/update-status/:productId', productController.updateStatus.bind(productController));
router.get('/faulty-products', productController.faultyProduct.bind(productController));
router.get('/popular-products', productController.popularProduct.bind(productController));
router.get('/revenue', orderController.revenue.bind(orderController));






export default router;




