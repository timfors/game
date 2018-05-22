import { drawBoxHor,drawBoxVer } from './drawBox.js';
import { boxRepository } from './boxCreate.js';


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

	const boxes = boxRepository.boxes;
	const start = boxes[0];

	const gameTable = $('#game');

	gameTable.drawRect({
		layer: true,
		x: 0,
		y: 0,
		strokeStyle: 'black',
		width: canvas.width,
		height: canvas.height,
		strokeWidth: 10,
		fromCenter: false
	});
	gameTable.drawLine({
		layer: true,
		fillStyle: 'red',
		name: 'player1',
		rounden: true,
		closed: true,
		x1: start.x + 20 ,
		y1: start.y,
		x2: start.x,
		y2: start.y + 40,
		x3: start.x + 40,
		y3: start.y + 40
	})
	function animate(player, box) {
		gameTable.animateLayer(player, {
			x1: box.x + 20 ,
			y1: box.y,
			x2: box.x,
			y2: box.y + 40,
			x3: box.x + 40,
			y3: box.y + 40
		}, 1000);
	}
	if (true) {
		animate('player1', boxes[5]);
	}
})

