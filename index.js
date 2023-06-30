import express from "express";
import { locationsRouter } from "./locations/index.js";
import cors from "cors"

const port = 8000;
const app = express();

app.use(cors())
app.use(express.static('public'));
app.use(locationsRouter);


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
