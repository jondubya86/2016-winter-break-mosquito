const HighScore =require('../models/highscore');
const express = require('express');
const router = express.Router();

router.route('/api/highscore')
const getAllHighscore=(req,res)=>{
	HighScore.findAll().then((data)=>{
	console.log('worked')
    res.send(data)
  })
};

const postNewHighScore=(req,res)=>{
	HighScore.create({
		name: req.body.name,
		score: req.body.score
	}).then(()=>res.send('New high score!')
)};

router.route('/')
.get(getAllHighscore)

module.exports = router;