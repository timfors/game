import { drawBoxHorLine, drawBoxVerLine, imgDraw } from './drawBox.js';

window.onload = function () {
	let canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d');

	ctx.fillStyle = 'gray';

	//160px-100px
	drawBoxHorLine(ctx, 0, canvas.height - 100);
	drawBoxHorLine(ctx, 155, canvas.height - 100);

	//150px-160px
	drawBoxVerLine(ctx, 0, canvas.height - 195);
}