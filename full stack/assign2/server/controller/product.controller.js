const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createProduct = (request, response) => {
    const { title, price ,desc } = request.body;
    Product.create({
        title,
        price,
        desc
    })
        .then(Product => response.json(Product))
        .catch(err => response.json(err));
}