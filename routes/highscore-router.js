const HighScore =require('../models/highscore');
var router = require('express').Router()
var db = require('../models')

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


module.exports = router;