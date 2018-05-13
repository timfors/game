import GameBoxes from './gameBoxes.js';	

export default class QuestionBox{
	constructor (x, y) {
		super(x, y);
		this.img = document.getElementById('question');
	}
}