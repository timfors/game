
export default class PlayerClass {
	constructor() {
		this.isFinished = false;
		this.pos = 0
	}

	moveTo(box) {
		this.pos = box.pos;
	}
}