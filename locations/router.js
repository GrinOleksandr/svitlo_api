import express from "express";

import { LocationService } from "./index.js";

const locationsRouter = express.Router();

locationsRouter.get("/lisove", async (req, res) => {
  console.log("Getting electricity schedule for Lisove");
  res.send(await LocationService.getDataByLocation(6499, 1));
});

locationsRouter.get("/locations", async (req, res) => {
  const { street, house, flat } = req.query;
  console.log(
    `Getting electricity schedule for Location: Street:${street}, House: ${house}, Flat: ${flat}`
  );
  if (!street && !house)
    res
      .status(400)
      .send({
        error:
          "Please provide a street and house in a number format, can be taken on https://cabinet.cherkasyoblenergo.com/gv.php in DevTools",
      });
  const response = res.send(
    await LocationService.getDataByLocation(street, house, flat)
  );
});

locationsRouter.get("/", async (req, res) => {
  res.send({ status: "ok" });
});

export { locationsRouter };
