export default class BoxRepository {
	constructor(data = []) {
		this.data = data;
	}
	addBox(box) {
		return this.data.push(box);
	}
	findBox(id) {
		return this.data.find(box => box.id === id);
	}

}