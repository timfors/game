import { drawBoxHorLine, drawBoxVerLine } from '/functions.js';

window.onload = function () {
	let canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d');
	drawBoxHorLine(ctx, 0, canvas.height - 100);
	drawBoxVerLine(ctx, canvas.width - 100, canvas.height - 260, 1);
	drawBoxHorLine(ctx, 0, canvas.height - 360);
	drawBoxVerLine(ctx, 0, canvas.height - 520);
	drawBoxHorLine(ctx, 0, canvas.height - 620);
}