

function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}

function imgDraw(ctx, num , x, y) {
	if (num < 3) {
		const box = boxCreate(num, x, y); 
		ctx.drawImage(box.img, x + 40, y + 20, 80, 50);
	}
}

export function drawBoxHorLine (ctx, x, y, count) {
	if (count < 1) {
		return;
	} 
	ctx.fillStyle = 'gray';
	ctx.fillRect(x, y, 160, 100);
	ctx.clearRect(x + 5 , y + 5, 150, 90);
	const num = randomNum(0,4);
	imgDraw(ctx, x, y);
	return drawBoxHorLine(ctx, x + 140, y, count--);
}

//Draw Vertical Boxe
export function drawBoxVerLine(ctx, x, y, count) {
	if (count < 1) {
		return;
	}
	ctx.fillRect(x, y, 150, 160);
	ctx.clearRect(x + 5, y, 145, 160);
	const num = randomNum(0,4);
	imgDraw(ctx, x, y);
	return drawBoxVerLine(ctx, x, y + 140, count--);
} 