const ProductController = require('../controller/person.controller');

module.exports = function (app) {
    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id/edit', ProductController.updateProduct)
    app.delete('/api/product/:id/delete', ProductController.deleteProduct)
}