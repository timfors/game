import boxCreate from './boxCreate.js';


function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}

export function imgDraw(num , x, y) {
	const box = boxCreate(num, x, y);
	if (box) {
		const img = document.getElementById(box.img);
		$('#game').drawImage({
			layer: true,
			source: img,
			x: x + 80,
			y: y + 50,
			width: 80,
			height: 50

		})
	}
}

//Draw a Horizontal Box
export function drawBoxHor(x, y, num) {
	$('#game').drawRect({
		layer: true,
		strokeStyle: 'gray',
		strokeWidth: 5,
		x: x,
		y: y,
		width: 160,
		height: 100,
		fromCenter: false
	})
	imgDraw(num, x, y);
}

//Draw Vertical Box
export function drawBoxVer(x, y, num) {
	$('#game').drawRect({
		layer: true,
		strokeStyle: 'gray',
		strokeWidth: 5,
		x: x,
		y: y,
		width: 160,
		height: 100	,
		fromCenter: false
	})
	imgDraw(num, x, y);
} 