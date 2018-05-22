function* id() {
   for (let i = 1; i < Infinity; i++) {
    	yield i;
  }
}

const getId = id();
export default class GameBoxes {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.id = getId.next().value;
	}
}