import express from "express";

import { LocationService } from "./index.js";

const locationsRouter = express.Router();

locationsRouter.get("/lisove", async (req, res) => {
  const response = await LocationService.getDataByLocation(6499, 1);

  res.send(response);
});

locationsRouter.get("/", async (req, res) => {
  res.send({ status: "ok" });
});

export { locationsRouter };
