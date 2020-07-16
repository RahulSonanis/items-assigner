import express from 'express';
import config from '../../config';

const router = express.Router();
const PORT = config.SERVER_PORT;

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('home/index', { title: 'Items Assigner' });
    // res.send(`Node and express server running on port ${PORT}`);
  });

  router.get('/main', (req, res) => {
    res.render('main/index', {
      title: 'Items Assigner',
      itemCount: 4,
      items: ['item1', 'item2', 'item3', 'item4'],
      personCount: 4,
      persons: ['Anki', 'person2', 'person3', 'person4'],
    });
    // res.send(`Node and express server running on port ${PORT}`);
  });

  return router;
};
