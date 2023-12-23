const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://badulake:eafu2001@cluster0.d1l69fu.mongodb.net/?retryWrites=true&w=majority";
//cadena de conexión

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Conectado a la base de datos mongodb atlas.");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);