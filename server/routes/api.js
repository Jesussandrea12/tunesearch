const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://api.deezer.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all tracks
router.get('/tracks', (req, res) => {
  // Get tracks from the mock api
  axios.get(`${API}/radio/42042/tracks`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
