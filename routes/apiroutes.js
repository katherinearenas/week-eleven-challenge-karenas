const app = require('express');
const api = require('express').Router();

let notes = []


api.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
  });

api.post('/', (req, res) => {
    const { id, title, note } = req.body;
  
    if (title && note) {
      const newNote = {
        title,
        note,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully`);
    } else {
      res.error('Error in adding note');
    }
  });

  module.exports = api;

  