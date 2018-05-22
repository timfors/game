function* shiftByY () {
	for (let i = 1; i < Infinity; i++){
		if (i % 2 === 0) {
			yield 60;
		}
		yield 0;
	}
}
const getShiftByY = shiftByY();
export default class PlayerClass {
	constructor(x, y, name) {
		this.isFinished = false;
		this.x1 = x + 20;
		this.y1 = y;
		this.x2 = x;
		this.y2 = y + 40;
		this.x3 = x + 40;
		this.y3 = y + 40
		this.shiftY = getShiftByY.next().value;
		this.shiftX = x;
		this.name = name,
		this.pos = 0
	}

	moveTo(box, pos) {
		this.pos += pos;
		$('#game').animateLayer(this.name,{
			x1: box.x + 20 + this.shiftX ,
			y1: box.y + this.shiftY,
			x2: box.x + this.shiftX,
			y2: box.y + 40 + this.shiftY,
			x3: box.x + 40 +this.shiftX,
			y3: box.y + 40 + this.shiftY
		}, 1000);
	}
}