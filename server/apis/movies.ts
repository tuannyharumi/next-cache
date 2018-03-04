import * as express from 'express';
import axios from 'axios';

import { MOVIES_PATH } from '../../shared/constants/routes';
import { MOVIES_API } from '../../shared/constants/externalApis';

import cache from '../cache';

const server = express();

server.get(MOVIES_PATH, async (req, res) => {
  const CACHE_KEY = 'movies_list';

  try {
    cache.get(CACHE_KEY, async (err, cachedValue) => {
      if (cachedValue) {
        console.log('Get movies list from cache');
        res.json(JSON.parse(cachedValue));
      } else {
        console.log('Get movies list from service');
        const response = await axios.get(`${MOVIES_API}/films`);
        cache.set(CACHE_KEY, JSON.stringify(response.data), 10);
        res.json(response.data);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = server;
