const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product')

const passwordHash = require ('password-hash');


exports.addUserApi = (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: passwordHash.generate (req.body.password),
        address: req.body.address,
        birthday: req.body.birthday
    })
    console.log(passwordHash.generate (req.body.password));

    user.save(err=>{
        console.log(err);
        res.end(JSON.stringify({status: 'error', err}))
    })

    res.end(JSON.stringify({status: 'success registered'}))
}


exports.getOrders = async (req, res)=>{
    const arrIdOrders = await User.findById(req.body.idUser).select('order');
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

exports.checkUser = async (req, res)=>{
    const user = await User.findOne({ email: req.body.email, password:req.body.password});

    // console.log(user);
    // console.log('here');
    if(user){
        res.end(JSON.stringify({user}))
    }
    res.end('none')
}



async function getOrders(arrIdOrders) {
    let addOrders = [];
    for (let i = 0; i < arrIdOrders['order'].items.length; i++){
        let {order} = await Order.findById(arrIdOrders['order'].items[i]);
        addOrders.push(order)
    }

    return JSON.stringify(addOrders);

}
