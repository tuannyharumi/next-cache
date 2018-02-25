import express from "express";
import { MOVIES_PATH } from "../constants/routes";

const server = express();

server.get(MOVIES_PATH, function(req, res) {
    res.json({ movies: ["1", "2"] });
});

module.exports = server;
