import connectDB from "../config/database";
import express from "express";
import ServerRouter from "./routes";

const server = express();

// Express configuration
server.set("port", process.env.PORT || 5000);

// Connection to mongoDB
connectDB();

// Router
const router = new ServerRouter(server);
router.init();

const PORT = server.get("port");
// tslint:disable-next-line: no-console
server.listen(PORT, () => console.log(`Server Working on http://localhost:${PORT}`));
