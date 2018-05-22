export default class PlayerRepository {
	constructor(data = []) {
		this.data = [];
	}
	addPlayer(player) {
		return this.data.push(player);
	}
	findPlayer(playerName) {
		return this.data.find(name => name === playerName);
	}
}