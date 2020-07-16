import express from 'express';
import config from '../../config';

const router = express.Router();
const PORT = config.SERVER_PORT;

module.exports = () => {
  router.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
  });

  return router;
};
