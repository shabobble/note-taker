// Allows routing of files
const router = require('express').Router();

// Connects a path to the store.js database file
const store = require('../db/store');

// HTML is requesting the notes

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// Posts the notes to the body of notes.html using JSON. Throws 500 Error if there is a routing issue

router.post('/notes', (req, res) => {
    console.log(req.body)
    store
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

//

router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then( () => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;

