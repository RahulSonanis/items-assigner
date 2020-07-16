import express from 'express';
import config from '../../config';
import { mainController } from '../controller/mainController';

const router = express.Router();
const PORT = config.SERVER_PORT;

module.exports = () => {
  router.get('/', (req, res) => {
    res.render('home/index', { title: 'Items Assigner' });
  });

  router
    .get('/main', mainController.getMainPage)
    .post('/main', mainController.saveMainPageInfo);

  router.post('/main/simulation', mainController.runSimulation);

  return router;
};
