//node product-seeder.js to upload products

var Product = require('../models/product');

var mongoose = require('mongoose');

var url = process.env.MONGODB_URI || 'localhost:27017/shopping';

mongoose.connect(url);

var products = [
    new Product({
        imagePath: 'https://www.verbenergy.co/img/cc-order-2.jpg',
        title: 'Coconut Chai',
        description: 'We set out to craft a unique flavor and this might be our best one yet. Coconut Chai combines the subtle sweetness of coconut with the warming feeling of chai spices. The hint of cinnamon, the crunch of quinoa puffs, and the smoothness of almond butter blend together to create a truly craveable experience.',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.verbenergy.co/img/3-bars-trans-barnes-small-cc.png',
        title: '4 Bar Sample',
        description: 'Try our 4 delicious flavours for free! Just pay shipping and we will send you our tasty treats with any hidden fees or catches!',
        price: 0
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}