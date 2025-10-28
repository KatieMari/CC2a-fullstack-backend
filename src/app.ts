import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({ res: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})