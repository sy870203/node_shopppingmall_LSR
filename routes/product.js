const express = require('express');

const router = express.Router();

// product CRUD

// product Create API
router.post('/', (req, res) => {
    const newProduct = {
        name: req.body.productname,
        price: req.body.productprice,
        sex: req.body.productsex
    }
    res.json({
        message: "product Create API",
        productInfo: newProduct
    })
})

// product Retrieve API
router.get('/', (req, res) => {
    res.json({
        message: "product Retrieve API"
    })
})

// product Update API
router.patch('/', (req, res) => {
    res.json({
        message: "product Update API"
    })
})

// product Delete API
router.delete('/', (req, res) => {
    res.json({
        message: "product Delete API"
    })
})

module.exports = router;