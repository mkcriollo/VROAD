const { MongoClient } = require("mongodb");
const assert = require("assert");

//Connection Url
const url = "mongodb://127.0.0.1:27017";

// Database Name
const dbName = "vroad";

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    "Could not connect to MongoDB");
  }
  const db = client.db(dbName);
  "Running MongoDB");
});
