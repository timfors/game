import { drawBoxHorLine, drawBoxVerLine } from './drawBox.js';

window.onload = function () {
	let canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d');
	ctx.fillStyle = 'gray';
	//160px-100px
	
	drawBoxHorLine(document, ctx, 0, canvas.height - 100);
	drawBoxHorLine(document, ctx, 155, canvas.height - 100);

	//150px-160px
	drawBoxVerLine(document, ctx, 0, canvas.height - 195);
}