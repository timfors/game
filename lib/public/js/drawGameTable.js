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



class Game {
	constructor(conf) {
		this.playerCount = conf.playerCount;
		this.playerRep = []
		for (let i = 0; i < playerCount; i++) {
			this.playerRep.push(new Player);
		}

		this.boxCount = conf.boxCount;
		this.boxRep = [];
		this.boxSeq = conf.boxSeq;
		if (boxSeq === 'standart') {
			for (let i = 0; i < boxCount; i++) {
				this.boxRep.push(boxCreate(i % 4));
			}
		}

		this.bones = new Bones();

		this.choosePlayer = choosePlayer(playerRep);
		this.currentPlayer = this.choosePlayer.next().value;
	}

	dropBone() {
		const points = this.bones.trow();
		this.currentPlayer.position += points;
		if (this.currentPlayer.position > this.boxCount) {
			this.currentPlayer.isFinished = true;
			const box = this.boxRep[boxRep.length - 1];
		} else {
			const box = this.boxRep[this.currentPlayer.position];
		}
		this.currentPlayer.moveTo(box);
		this.currentPlayer = this.choosePlayer.next();
	}

}

