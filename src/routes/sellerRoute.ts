import { Router } from "express";
import { ProductRepository } from "../repositories/product.repository";
import ProductService from "../services/product.service";
import { ProductController } from "../controllers/productController";
import { SellerRepository } from "../repositories/seller.repository";
import SellerService from "../services/seller.service";
import { SellerController } from "../controllers/sellerController";

const router = Router();

const sellerRepository = new SellerRepository();
const productRepository = new ProductRepository();
const sellerService = new SellerService(sellerRepository);
const productService = new ProductService(productRepository);
const sellerController = new SellerController(sellerService);
const productController = new ProductController(productService);




router.post('/create', sellerController.createSeller.bind(sellerController));
router.post('/add-product', productController.addProduct.bind(productController));
router.patch('/update-status/:productId', productController.updateStatus.bind(productController));





export default router;




