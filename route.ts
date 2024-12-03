import express from 'express';
import { getProducts, addProduct } from "./controller/product-controller";

import { getOrders,createOrder } from "./controller/order-controller";
import { getUsers,createUser } from"./controller/user-controller";
const router= express.Router();

router.get("/products", getProducts);
router.get("/users",getUsers);
router.get("/orders",getOrders);
router.post("/add-product",addProduct);
router.post("/createuser",createUser);
router.post("/createorder",createOrder);

export default router;