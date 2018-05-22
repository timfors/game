import { drawBoxHor,drawBoxVer } from './drawBox.js';
import { boxRepository } from './boxCreate.js';
import { playerCreate, playerRep } from './Player/playerCreate.js'
import Bones from './bones/bonesClass.js';




$(function () {
	let canvas = document.getElementById("game");
	
	//160px-100px
	drawBoxHor(20, canvas.height - 120, 3);
	drawBoxHor(180, canvas.height - 120, 2);
	drawBoxHor(340, canvas.height - 120, 1);
	drawBoxHor(500, canvas.height - 120, 3);
	drawBoxHor(660, canvas.height - 120, 0);

	//150px-100px
	drawBoxVer(660, canvas.height - 220, 1);


	drawBoxHor(660, canvas.height - 320, 0);
	drawBoxHor(500, canvas.height - 320, 3);
	drawBoxHor(340, canvas.height - 320, 1);
	drawBoxHor(180, canvas.height - 320, 2);
	drawBoxHor(20, canvas.height - 320, 0);

	drawBoxVer(20, canvas.height - 420, 1);

	drawBoxHor(20, canvas.height - 520, 2);
	drawBoxHor(180, canvas.height - 520, 3);
	drawBoxHor(340, canvas.height - 520, 0);
	drawBoxHor(500, canvas.height - 520, 1);
	drawBoxHor(660, canvas.height - 520, 0);

	drawBoxVer(660, canvas.height - 620, 3);


	const boxes = boxRepository.data;
	const start = boxes[0];
	const gameTable = $('#game');

	gameTable.drawRect({
		layer: true,
		x: 5,
		y: 5,
		strokeStyle: 'black',
		width: 845,
		height: 640,
		strokeWidth: 5,
		fromCenter: false
	});
	const player1 = playerCreate(start.x, start.y, 'player1', 'red');
	const player2 = playerCreate(start.x + 40, start.y + 60, 'player2', 'yellow');
	
	const bones = new Bones(1000, 400, playerRep, boxRepository);
	bones.drawBones();
})

