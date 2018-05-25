import GameBoxes from './gameBoxes.js';	

export default class EmptyBox extends GameBoxes{
	constructor () {
		super();
		this.type = 'empty';
	}
}