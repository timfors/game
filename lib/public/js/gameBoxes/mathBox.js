import GameBoxes from './gameBoxes.js';	

export default class MathBox extends GameBoxes{
	constructor (x, y) {
		super(x, y);
		this.img = "math";
	}
}