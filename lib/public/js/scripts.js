function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}
const smile = document.getElementById("smile"),
	math = document.getElementById("math"),
	question = document.getElementById("question"),
	images = [smile, math, question];

let num = 0;

function drawBoxHorLine (canvas, ctx, x, y) {
	for (var i = 0; i <= 4; i++ ){
		ctx.fillStyle = 'gray';
		ctx.fillRect(x + i * 140, y, 160, 100);
		ctx.clearRect(x + 5 + i * 140, y + 5, 150, 90);
		num = randomNum(0,3);
		ctx.drawImage(images[num], x + 40 + i*140, y + 20, 80, 50);
	}
}
function drawBoxVerLine(canvas, ctx, x, y) {
	ctx.fillRect(x, y, 100, 160);
	ctx.clearRect(x + 5, y, 90, 160);
	num = randomNum(0,3);
	ctx.drawImage(images[num], x + 20, y + 40, 50, 80);
} 
window.onload = function () {
	let canvas = document.getElementById("game"),
	ctx = canvas.getContext('2d');
	drawBoxHorLine(canvas, ctx, 0, canvas.height - 100);
	drawBoxVerLine(canvas, ctx, canvas.width - 100, canvas.height - 260);
	drawBoxHorLine(canvas, ctx, 0, canvas.height - 360);
	drawBoxVerLine(canvas, ctx, 0, canvas.height - 520);
	drawBoxHorLine(canvas, ctx, 0, canvas.height - 620);
}