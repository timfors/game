

export function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}

 

export default class Bones { 
	constructor() {
		this.isJump = false;
	}
	trow() {
		return randomNum(1,7);
	}
}