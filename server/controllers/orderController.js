const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product')


exports.addOrderApi = async (req, res) => {

    const order = new Order({
        order: {
            items: [
                {
                    productType: 'pizza',
                    name: "Mashroom",
                    size: 'S',
                    value: 175,
                    img: '',
                    kind: 'vegeterian',
                    nutrients: ['шампынйони свіжі', "моцарела вчорашня", "шампіньони консервовані", "соус пелатті", "корж"]
                }
            ],
            price: 175 * 2
        }
    })

    const orderItems = await User.findById('5e96b393b096930904fb15b3').select('order');
    let {order: {items: [...arrOrder]}} = orderItems;
    arrOrder.push(order._id)

    order.save(err => {
        console.log(err);
    })


    await User.updateOne({_id: '5e96b393b096930904fb15b3'}, {
        $set: {
            order: {
                items: arrOrder
            }
        }
    });


    res.end('order saved')
}
