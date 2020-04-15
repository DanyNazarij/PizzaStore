const Product = require('../models/Product');


exports.AddProductApi = (req, res) =>{
    const product = new Product({
        productType: 'pizza',
        productName: 'Mashroom',
        price: [{size: 'S', value: 175},{size: 'XL', value: 240}],
        kind: 'Vegeterian',
        description: 'Some description',
        img: '',
        nutrients: ['шампынйони свіжі', "моцарела вчорашня", "шампіньони консервовані", "соус пелатті", "корж"]
    })

    product.save();
    res.end('saved');
}
