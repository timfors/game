import GameBoxes from './gameBoxes.js';	

export default class QuestionBox extends GameBoxes {
	constructor () {
		super();
		this.type = "question";
	}
}