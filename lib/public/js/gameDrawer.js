import { randomNum } from './bones/bonesClass.js';
  
function getBoxXFromPos(pos) {
	if (pos % 6 === 0) {
			return pos % 12 === 0 ? 150 : 750;
			
		}
	return Math.floor(pos / 6) % 2 === 0 ? (pos % 6) * 150 : 900 - (pos % 6) * 150;
}

function getBoxYFromPos(pos){
	const canvas = document.getElementById('game');
	if (pos % 6 === 0) {
			return canvas.height - 180 * pos / 6;
		}
	return  canvas.height - Math.floor(pos / 6) * 180 - 90;
		
}

function getPlayerX(player) {
	return player.id * 30;
}

function getPlayerY(player){
	return player.id % 2 === 0 ?  50 :  100;
}

export default class GameDrawer {
	constructor(game) {
		this.game = game;
		this.canvas =  document.getElementById('game');
	}

	drawBox(box) {
		const img = document.getElementById(box.type);
		const x = getBoxXFromPos(box.pos);
		const y = getBoxYFromPos(box.pos);
		$('#game').drawRect({
				fromCenter: false,
				layer: true,
				width: 150,
				height: 90,
				x: x,
				y: y,
				strokeStyle: 'gray',
				strokeWidth: 3
			}).drawImage({
					fromCenter: false,
					layer: true,
					source: img,
					x: x + 10,
					y: y + 5,
					width: 130,
					height: 80
				})

	}

	drawBoxes() {
		$('#game').drawRect({
			fromCenter: false,
			width: 150,
			height: 90,
			x: 0,
			y: this.canvas.height - 90,
			strokeStyle: 'gray',
			strokeWidth: 3,
			layer: true
		});
		this.game.boxRep.forEach( box => this.drawBox(box));
	}

	drawBones() {
		$('#game').drawRect({
			name: 'bones',
			fromCenter: false,
			x: 10,
			y: 400,
			width: 120,
			height: 140,
			strokeStyle: 'black',
			strokeWidth: 5,
			layer: true,
			add: (layer) => this.changeFacet(layer.x, layer.y, randomNum(1,7))
		})

	}

	changeFacet(x, y, num){
		$('#game').removeLayer('facet');
		$('#game').drawImage({
			source: document.getElementById(`facet_${num}`),
			fromCenter: false,
			name: 'facet',
			layer: true,
			width: 110,
			height: 130,
			x: x + 5,
			y: y + 5,
			click: (layer) => {
				if (!this.game.bones.isJump) {
					const [ points, player ] = this.game.dropBone();
					this.game.bones.isJump = true
					$('#game').animateLayer('bones', {
						y: '-=150'
					}, {
						duration: 1000,
						step: (now, fx, layer) => this.changeFacet(layer.x, layer.y, randomNum(1,7)),
						easing: 'swing'
					} );
					$('#game').animateLayer('bones', {
						y: '+=150'
					}, {
						duration: 1000,
						step: (now, fx, layer) => this.changeFacet(layer.x, layer.y, randomNum(1,7)),
						easing: 'swing',
						complete: (layer) => {
							this.game.bones.isJump = false;
							this.changeFacet(layer.x, layer.y, points);
							$('#game').animateLayer(`player_${player.id}`, {
								x: getBoxXFromPos(player.pos) + getPlayerX(player),
								y: getBoxYFromPos(player.pos) - getPlayerY(player) + 90
							}, 1000);
						}
					});				
				}
			}
		})
	}

	drawPlayer(player){
		const color = `rgb(${randomNum(0,257)},${randomNum(0,257)}, ${randomNum(0,257)} )`;
		$('#game').drawRect({
			layer: true,
			fromCenter: false,
			name: `player_${player.id}`,
			x: getPlayerX(player),
			y: this.canvas.height - getPlayerY(player),
			width: 15,
			height: 40,
			fillStyle: color
		});
	}

	drawAllPlayers() {
		this.game.playerRep.forEach( player => this.drawPlayer(player));
	}
}