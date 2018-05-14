import GameBoxes from './gameBoxes.js';	

export default class QuestionBox extends GameBoxes {
	constructor (x, y) {
		super(x, y);
		this.img = "question";
	}
}