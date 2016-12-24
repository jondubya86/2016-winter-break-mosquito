const router = require('express').Router()
const db = require('../models')

const getAllHighscore=(req,res)=>{
	db.HighScore.findAll()
	.then((data)=>{
	console.log('Worked!')
    res.send(data)
  })
};

const postNewHighScore=(req,res)=>{
	db.HighScore.create({
		name: req.body.name,
		score: req.body.score
	})
	.then(() => {
    res.send('New high score!')
  })
};

router.route('/')
.get(getAllHighscore)
.post(postNewHighScore)

module.exports = router;