var data = {
  itemCount: 0,
  items: [],
  personCount: 0,
  persons: [],
};

export const saveMainPageInfo = (req, res) => {
  data.itemCount = parseInt(req.body.itemCount);
  data.items = req.body.items;
  data.personCount = parseInt(req.body.personCount);
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

  console.log('simRounds => ' + simRounds);
  console.log(data);

  var matrix = [...Array(data.personCount)].map((e) =>
    Array(data.itemCount).fill(0)
  );

  // console.log('============MATRIX===========');
  // console.log(matrix);

  var sample = new Array(Math.max(data.personCount, data.itemCount)).fill(-1);
  sample.forEach((e, i) =>
    i < data.itemCount ? (sample[i] = i) : (sample[i] = -1)
  );

  // console.log('============SAMPLE===========');
  // console.log(sample);

  for (let i = 0; i < simRounds; i++) {
    sample = shuffle(sample);

    sample.forEach((element, index) => {
      if (element != -1) {
        matrix[index][element]++;
      }
    });
  }
  // console.log('After simulation');
  // console.log(matrix);
  res.json(JSON.stringify(matrix));
};

function shuffle(arr) {
  var m = arr.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;
}

export const mainController = {
  runSimulation,
  getMainPage,
  saveMainPageInfo,
};
