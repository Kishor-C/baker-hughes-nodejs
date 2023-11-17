import mongodb from 'mongodb';

let client = mongodb.MongoClient;

client.connect('mongodb://127.0.0.1:27017')
.then(client => {
    let db = client.db('demodb');
    // request.body
    let body = {"_id":3, "name":"Rohit"};
    // storing
    db.collection('employees').insertOne(body)
    .then(value => console.log(value))
    .catch(err => console.log(err))
    // retrieving
    db.collection('employees').find().toArray()
    .then(value => console.log(value))
    .finally(() => client.close());
})
.catch((err) => console.log(err))