import * as express from 'express';
import * as next from 'next';
const movies = require('./apis/movies');
const moviesDetails = require('./apis/moviesDetails');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/api', movies, moviesDetails);

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
