const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
  console.log('Connected');

  // database name and collection
  const dbName = 'myProject1';
  const db = client.db(dbName);
  const collection = db.collection('customers');

  // new user
  const name = `user${Math.floor(Math.random()*10000)}`;
  const email = `${name}@mit.edu`;

  // insert into customer table
  const doc = {name, email};
  collection.insertOne(doc, {w: 1}, (err, result) => {
    console.log('Document insert');
  });

  // read
  collection.find().toArray((err, docs) => {
    console.log('Collection: ', docs);

    // clean up
    client.close();
  });
});