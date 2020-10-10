const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    
    const { id } = req.params;

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.findOneAndDelete({ _id: ObjectID(id) });

    closeConnectionFn();

    context.res = {
        status: 200, 
        body: res,
    };
}