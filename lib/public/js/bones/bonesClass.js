

function* choosePlayer(repos){
	for (let i = 0; i < Infinity; i++) {
		yield repos[i % repos.length];
  }
}
function randomNum (min, max) {
	//return a random whole number that [min, max)
	return Math.floor(Math.random() * (max - min)) + min;
}

 

export default class Bones {
	constructor(x, y, playerRepos,boxRepository) {
		this.x = x,
		this.boxRepository = boxRepository.data;
		this.y = y
		this.isJump = false;
		this.points = 0
		this.nextPlayer = choosePlayer(playerRepos.data);
	}

	drawBones() {
		$('#game').drawRect({
			name: 'bones',
			x: this.x, 
			y: this.y,
			layer: true,
			strokeStyle: 'black',
			strokeWidth: 5,
			width: 120,
			height: 130,
			click: (layer) => this.onClick(layer),
			add: (layer) => this.changeFacet(layer.x, layer.y)
		})
	}

	changeFacet(x, y){
		const num = randomNum(1, 7);
		$('#game').removeLayer('facet');
		$('#game').drawImage({
			source: document.getElementById(`bone_${num}`),
			name: 'facet',
			layer: 'true',
			width: 100,
			height: 110,
			x: x,
			y: y,
			click: (layer) => this.onClick(layer)
		})
		return num;
	}

	onClick(layer) {
		if (!this.isJump) {
			this.isJump = true
			$('#game').animateLayer('bones', {
				y: '-=150'
			}, {
				duration: 1000,
				step: (now, fx, layer) => this.changeFacet(layer.x, layer.y),
				easing: 'swing'
			} );
			$('#game').animateLayer('bones', {
				y: '+=150'
			}, {
				duration: 1000,
				step: (now, fx, layer) => this.changeFacet(layer.x, layer.y),
				easing: 'swing',
				complete: (layer) => { 
					this.points = this.changeFacet(layer.x, layer.y);
					this.isJump = false;
					const repLength = this.boxRepository.length;
					let player = this.nextPlayer.next().value;
					if (player.isFinished) {
						player = this.nextPlayer.next().value;
					}
					if (this.points + player.pos <= repLength - 1){			
						player.moveTo(this.boxRepository[player.pos + this.points], this.points);
					} else {
						player.moveTo(this.boxRepository[ repLength - 1], this.points);
					}
					if (player.pos >= repLength - 1) {
						player.isFinished = true;
					}
				}
			});				
		}
	}
}