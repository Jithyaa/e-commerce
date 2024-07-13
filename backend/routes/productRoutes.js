import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js'

const router = express.Router()

router.get('/', getProducts);   
router.get("/hi",(req,res)=>{
    res.send("API is working")
})
router.post('/createProduct', createProduct);
// router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
// router.get('/:id', getProduct);

export default router


