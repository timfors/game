import boxCreate from './boxCreate.js';


function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}

export function imgDraw(doc, num , x, y) {
	const box = boxCreate(num, x, y);
	const img = doc.getElementById('smile');
	if (img) {
		ctx.drawImage(img, x + 40, y + 20, 80, 50);
	}
}

//Draw a Horizontal Box
export function drawBoxHorLine (doc, ctx, x, y) {
	ctx.fillRect(x, y, 160, 100);
	ctx.clearRect(x + 5 , y + 5, 150, 90);
	const num = randomNum(0,4);
	return imgDraw(doc, num, x, y);
}

//Draw Vertical Box
export function drawBoxVerLine(doc, ctx, x, y) {
	ctx.fillRect(x, y, 160, 100);
	ctx.clearRect(x + 5, y + 5, 150, 90);
	const num = randomNum(0,4);
	return imgDraw(doc, num, x, y);
} 