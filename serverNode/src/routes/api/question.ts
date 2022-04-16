import { Router } from "express";

const questionRouter: Router = Router();

questionRouter.get("/", (req, res) => res.send("hallo"));
questionRouter.post("/", (req, res) => res.send("hallo"));
questionRouter.put("/", (req, res) => res.send("hallo"));
questionRouter.delete("/", (req, res) => res.send("hallo"));

// test commit

export default questionRouter;