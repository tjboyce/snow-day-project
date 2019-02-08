const express = require('express');

let bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
const playersList = require('./modules/player-list.js');
const gamesList = require('./modules/games-list.js');
app.get('/players', (req, res)=>{
    res.send(playersList);
})
app.post('/new', (req, res) => {
    req.body;
    playersList.push(req.body);
    res.sendStatus(201);
})
app.get('/newGame', (req, res)=>{
    res.send(gamesList);
})



app.listen(PORT, () => {
    console.log('listening on port', PORT)
});