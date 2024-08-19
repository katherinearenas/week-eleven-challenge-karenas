const app = require('express');
const api = require('express').Router();
const fs = require('fs')

let notes = []


api.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    fs.promises.readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

api.post('/notes', (req, res) => {
    const { title, text } = req.body;
  
    if (title && text) {
      const newNote = {
        title,
        text,
        note_id: crypto.randomUUID(),
      };
  
      fs.promises.readFile('./db/db.json').then((data)=>{
        let parseData = JSON.parse(data)
        parseData.push(newNote)
        fs.promises.writeFile('./db/db.json', JSON.stringify(parseData)).then((data)=> {
        res.json(`Note added successfully`);  
        })
      });

    } else {
      res.json('Error in adding note');
    }
  });

  module.exports = api;

  