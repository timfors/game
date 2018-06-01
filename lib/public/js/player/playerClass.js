function* id() {
   for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

const getId = id();

export default class PlayerClass {
	constructor() {
		this.isFinished = false;
		this.pos = 0;
		this.id = getId.next().value; 
	}

	moveTo(box) {
		this.pos = box.pos ;
	}
}