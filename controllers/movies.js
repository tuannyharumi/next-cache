import express from "express";
import axios from "axios";
import { MOVIES_PATH } from "../constants/routes";
import { MOVIES_API } from "../constants/externalApis";

const server = express();

server.get(MOVIES_PATH, async (req, res) => {
    try {
        const response = await axios.get(`${MOVIES_API}/films`);
        res.json(response.data);
    } catch (err) {
        console.error(err);
    }
});

module.exports = server;
