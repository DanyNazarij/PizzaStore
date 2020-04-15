const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product')


exports.addUserApi = (req, res)=>{
    const user = new User({
        name: 'Vasya Melnychuk',
        email: 'epro100live@gmail.com',
        phone: '380976681039',
        password: '123',
        address: 'Some address',
        birthday: Date.now()
    })

    user.save(err=>{
        console.log(err);
    })

    res.end('user saved')
}

exports.getOrders = async (req, res)=>{
    const arrIdOrders = await User.findById('5e96b393b096930904fb15b3').select('order');


    const arrOrdersStr = await getOrders(arrIdOrders);

    res.send(arrOrdersStr);


}

exports.update = async (req, res)=>{


    const result = await User.updateOne({_id: '5e96b393b096930904fb15b3'}, {$set:{
            name: 'Vasya Melnychuk!!!',
            email: 'epro100live@gmail.com',
            phone: '380976681039',
            address: 'Some address',
            birthday: Date.now()
    }});
    res.end(JSON.stringify(result));
}


async function getOrders(arrIdOrders) {
    let addOrders = [];
    for (let i = 0; i < arrIdOrders['order'].items.length; i++){
        let {order} = await Order.findById(arrIdOrders['order'].items[i]);
        addOrders.push(order)
    }

    return JSON.stringify(addOrders);
    //  arrOrders = await arrIdOrders['order'].items.map(async (el) => {
    //     const {order} = await Order.findById(el)
    //     console.log(order);
    //     return order;
    // });
    // console.log(arrOrders);

}
