const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://api.deezer.com/radio/42042/tracks';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/tracks', (req, res) => {
  // Get posts from the mock api
  axios.get(API)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
