const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models')

const router = require('./routes');
const highscore = require('./routes/highscore-router.js')

app.use(express.static(path.join(__dirname, '/bundle')))
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/highscore', highscore);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
});

db.sequelize.sync().then(()=>
	let port = process.env.PORT || 3890
		app.listen(port,() => {console.log('listening to port 3890')}
		)
	);