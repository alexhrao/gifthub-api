import express from "express";
import giftRoutes from "./gifts";
const app = express();
const port = 3000;

const routes = express.Router();
routes.get("/", (req, res) => res.send({"Hi": "world"}));

routes.use("/gifts", giftRoutes);
app.use("/", routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
