import express from "express";

import { LocationService } from "./index.js";

const API_URL = "https://cabinet.cherkasyoblenergo.com/ajax/searadrrez.php";

const locationsRouter = express.Router();

locationsRouter.get("/lisove", async (req, res) => {
  const response = await LocationService.getDataByLocation(6499, 1);

  res.send(response);
});

export { locationsRouter };
