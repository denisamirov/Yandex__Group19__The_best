const gameRoute = require('express').Router();

const getAllGames = (req, res) => {}
const deleteGame = async (req, res) => {}
const addGame = async (req, res) => {}

gameRoute.post('/games', addGame);
gameRoute.get('/games', getAllGames);
gameRoute.delete('/games', deleteGame);

module.exports = gameRoute;