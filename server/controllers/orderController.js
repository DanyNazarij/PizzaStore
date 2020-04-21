const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product')


exports.addOrderApi = async (req, res) => {
    const order = new Order({
        order: {
            idUser: req.body.idUser || 'guest',
            items: req.body.product.map(el=>{
                return prod = {
                    idProduct: el.id,
                    productType:el.type,
                    name:el.name,
                    value:el.price,
                    img:'',
                    kind:el.kind,
                    count:el.count,
                }
            }),
            price: req.body['amountPrice']
        }
    })



    order.save(err => {
        console.log(err);
    })

    if(req.body.idUser){
        const orderItems = await User.findById('5e96b393b096930904fb15b3').select('order');
        let {order: {items: [...arrOrder]}} = orderItems;
        arrOrder.push(order._id)

        await User.updateOne({_id: req.body.idUser}, {
            $set: {
                order: {
                    items: arrOrder
                }
            }
        });
    }



    res.end(JSON.stringify({status:"order saved"}))
}
