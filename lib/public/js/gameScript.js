import Game from './game.js';
import GameDrawer from './gameDrawer.js';

const conf = {
	playerCount: 4,
	boxCount: 18,
	boxSeq: 'standart'
};

const game = new Game(conf);

const gameDrawer = new GameDrawer(game);

gameDrawer.drawBoxes();
gameDrawer.drawAllPlayers();
gameDrawer.drawBones();
