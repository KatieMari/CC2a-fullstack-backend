import express from "express";
import cors from "cors";

// create express app & choose port
const app = express();
const port = 3000;

// setup CORS to allow requests from any origin
const corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));

// hello world response
app.get('/', (req, res) => {
  res.send({ res: 'Hello World!' })
})

// start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})