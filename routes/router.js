const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const wishlistController = require('../controllers/wishlistController')
const router = new express.Router()
// get all products
router.get('/all-products',productController.getAllProductsController)
// view product
router.get('/:id/view-product',productController.getAProductController)
// register
router.post('/register',userController.registerController)
// login
router.post('/login',userController.loginController)
// addtowishlist
router.post('/addToWishlist',jwtMiddleware,wishlistController.addToWishlist)
// getwishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)
// wishlist remove
router.delete('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)




module.exports = router
