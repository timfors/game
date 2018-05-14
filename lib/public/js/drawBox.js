import SmileBox from './gameBoxes/smileBox.js';
import QuestionBox from './gameBoxes/questionBox.js';
import MathBox from './gameBoxes/mathBox.js';




function boxCreate(num, x, y) {
	switch (num) {
		case 0: 
			return new SmileBox(x, y);
		case 1:
			return new QuestionBox(x, y);
		case 2: 
			return new MathBox(x, y);
		case 3: 
			return;
	}
}


function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}

export function imgDraw(ctx, num , x, y) {
	console.log(num);
	const box = boxCreate(num, x, y);
	if (box) {
		const img = document.getElementById(box.img);
		ctx.drawImage(img, x + 40, y + 20, 80, 50);
	}
}

//Draw a Horizontal Box
export function drawBoxHorLine (ctx, x, y) {
	ctx.fillRect(x, y, 160, 100);
	ctx.clearRect(x + 5 , y + 5, 150, 90);
	const num = randomNum(0,4);
	imgDraw(ctx, num, x, y);
}

//Draw Vertical Box
export function drawBoxVerLine(ctx, x, y) {
	ctx.fillRect(x, y, 160, 100);
	ctx.clearRect(x + 5, y + 5, 150, 90);
	const num = randomNum(0,4);
	imgDraw(ctx, num, x, y);
} 