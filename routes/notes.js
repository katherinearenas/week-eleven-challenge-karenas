const notes = require('express').Router();


// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific tip
notes.get('/:note_id', (req, res) => {
  const Id = req.params.tip_id;
  readFromFile('./db/.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((notes) => tip.tip_id === tipId);
      return result.length > 0
        ? res.json(result)
        : res.json('No tip with that ID');
    });
});

// DELETE Route for a specific tip
note.delete('/:note_id', (req, res) => {
  const tipId = req.params.tip_id;
  readFromFile('./db/json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

// POST Route for a new UX/UI tip
tips.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newNote = {
      text,
      newNote,
      topic,
      note_id: uuidv4(),
    };

    readAndAppend(newnote, './db.json');
    res.json(`Tip added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;
