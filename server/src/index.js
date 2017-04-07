import socketIO from "socket.io";
import express from "express";
import ioRedis from "socket.io-redis";
import http from "http";
import path from "path";
import redis from "redis";
import Bluebird from "bluebird";
import actionHandlers from "./handlers";
import { connected } from "../../shared/actions/app";

Bluebird.promisifyAll(redis.RedisClient.prototype);
Bluebird.promisifyAll(redis.Multi.prototype);

const ROOT_PATH = path.resolve(__dirname, `../../`);
const redisClient = redis.createClient();
const app = express();
const httpServer = http.Server(app);
const io = socketIO(httpServer);
const services = { io, redisClient };

io.adapter(ioRedis());

io.on(`connection`, socket => {
	actionHandlers(services, socket, connected());
	socket.on(`action`, action =>
		actionHandlers(services, socket, action));
});

app.use(`/build`, express.static(path.join(ROOT_PATH, `client`, `build`)));

app.get(`/`, (req, res) =>
    res.sendFile(`${__dirname}/index.html`));

httpServer.listen(3000, () =>
    console.log(`Example app listening on port 3000!`));
