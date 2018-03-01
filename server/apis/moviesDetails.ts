import * as express from "express";
import { MOVIES_DETAILS_PATH } from "../../shared/constants/routes";

const server = express();

server.get(MOVIES_DETAILS_PATH(), (req, res) => {
    res.json({ id: req.params.id });
});

module.exports = server;
