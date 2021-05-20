//Allows routing of files

const path = require('path');

// To move files wherever we need them to go
const router = require('express').Router();

//Sends notes to the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//Redirects to the homepage if there is a path issue
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;