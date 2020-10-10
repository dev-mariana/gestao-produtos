const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    
    const { id } = req.params;
    const product = req.body;

    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.findOneAndUpdate(
        { _id: ObjectID(id) }, 
        { $set: product }
    );

    closeConnectionFn();

    context.res = {
        status: 201,
        body: res,
    };
}