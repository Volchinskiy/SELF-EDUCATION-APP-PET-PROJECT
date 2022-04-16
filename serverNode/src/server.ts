import express from "express";
import connectDB from "../config/database";

const server = express();
server.set("port", process.env.PORT || 5000);

// Connection to mongoDB
connectDB();

const PORT = server.get("port");
// tslint:disable-next-line: no-console
server.listen(PORT, () => console.log(`Server Working on http://localhost:${PORT}`));
