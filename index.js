import express from "express";
import { locationsRouter } from "./locations/index.js";

const port = 8000;
const app = express();

app.use(locationsRouter);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
