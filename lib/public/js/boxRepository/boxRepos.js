export default class BoxRepository {
	constructor(data = []) {
		this.boxes = data;
	}
	addBox(box) {
		return this.boxes.push(box);
	}
	findBox(id) {
		return this.boxes.find(box => box.id === id);
	}

}