import SmileBox from './gameBoxes/smileBox.js';
import QuestionBox from './gameBoxes/questionBox.js';
import MathBox from './gameBoxes/mathBox.js';
import BoxRepository from './boxRepository/boxRepos.js'


const repository = new BoxRepository();

function boxCreate(num, x, y) => {
	switch (num) {
		case(0): 
			const box = new SmileBox(x, y);
			repository.addBox(box);
			return box;
		case(1):
			const box = new QuestionBox(x, y);
			repository.addBox(box);
			return box;
		case(2): 
			const box = new MathBox(x, y);
			repository.addBox(box);
			return box;
	}
}

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
//Draw a Horizontal Box
export function drawBoxHorLine (ctx, x, y) {
	ctx.fillStyle = 'gray';
	ctx.fillRect(x, y, 160, 100);
	ctx.clearRect(x + 5 , y + 5, 150, 90);
	const num = randomNum(0,4);
	imgDraw(ctx, x, y);
}

//Draw Vertical Box
export function drawBoxVerLine(ctx, x, y) {
	ctx.fillRect(x, y, 150, 160);
	ctx.clearRect(x + 5, y, 145, 160);
	const num = randomNum(0,4);
	imgDraw(ctx, x, y);
} 
