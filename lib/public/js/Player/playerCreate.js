import PlayerRepository from './playerRepository.js';
import Player from './playerClass.js';


const playerRep = new PlayerRepository();

export function playerCreate(x, y, name, color) {
	const player = new Player(x, y, name);
	playerRep.addPlayer(player);
	$('#game').drawLine({
		fillStyle: color,
		name: name,
		layer: true,
		closed: true,
		rounded: true,
		x1: player.x1,
		x2: player.x2,
		x3: player.x3,
		y1: player.y1,
		y2: player.y2,
		y3: player.y3
	});
	return player;
}

export { playerRep };
