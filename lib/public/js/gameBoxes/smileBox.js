import GameBoxes from './gameBoxes.js';	

export default class SmileBox extends GameBoxes{
	constructor (x, y) {
		super(x, y);
		this.img = "smile";
	}
}