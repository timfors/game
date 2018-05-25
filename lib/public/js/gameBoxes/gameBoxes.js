function* pos() {
   for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

const getPos = pos();
export default class GameBoxes {
	constructor() {
		this.pos = getPos.next().value;
	}
}