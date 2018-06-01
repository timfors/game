import Bones from './bones/bonesClass.js';
import Player from './player/playerClass.js';
import boxCreate from './gameBoxes/boxCreate.js';

function* choosePlayer(repos){
	for (let i = 0; i < Infinity; i++) {
		let player = repos[i % repos.length];
		if (!player.isFinished) {
			yield player;
		}
  }
}

export default class Game {
	constructor(conf) {
		this.playerCount = conf.playerCount;
		this.playerRep = []
		for (let i = 0; i < this.playerCount; i++) {
			this.playerRep.push(new Player());
		}

		this.boxCount = conf.boxCount;
		this.boxRep = [];
		this.boxSeq = conf.boxSeq;
		if (this.boxSeq === 'standart') {
			for (let i = 0; i < this.boxCount; i++) {
				this.boxRep.push(boxCreate(i % 4));
			}
		}

		this.bones = new Bones();

		this.choosePlayer = choosePlayer(this.playerRep);
	}

	dropBone() {
		const currentPlayer = this.choosePlayer.next().value;
		const points = this.bones.trow();
		currentPlayer.pos += points;
		if (currentPlayer.pos >= this.boxCount) {
			currentPlayer.isFinished = true;
			var box = this.boxRep[this.boxRep.length - 1];
		} else {
			var box = this.boxRep[currentPlayer.pos - 1];
		}
		currentPlayer.moveTo(box);
		return [ points, currentPlayer ] ;
	}

}

