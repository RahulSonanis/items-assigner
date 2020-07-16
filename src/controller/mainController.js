var data = {};
data.itemCount = 4;
data.itemCount = 4;
data.items = ['item1', 'item2', 'item3', 'item4'];
data.personCount = 4;
data.persons = ['Anki', 'person2', 'person3', 'person4'];

export const getSkeletonTable = (req, res) => {};

export const saveMainPageInfo = (req, res) => {
  data.itemCount = req.body.itemCount;
  data.items = req.body.items;
  data.personCount = req.body.personCount;
  data.persons = req.body.persons;

  res.json({ msg: 'SUCCESS' });
};

export const getMainPage = (req, res) => {
  res.render('main/index', {
    title: 'Items Assigner',
    itemCount: data.itemCount,
    items: data.items,
    personCount: data.personCount,
    persons: data.persons,
  });
};

export const runSimulation = (req, res) => {
  const simRounds = parseInt(req.body.simRounds);

  res.json({ msg: 'SUCCESS' });
};

export const mainController = {
  getSkeletonTable,
  runSimulation,
  getMainPage,
  saveMainPageInfo,
};
