export default class BoxRepository {
	constructor(boxes = []) {
		this.boxes = data;
	}
	addBox(box) {
		return this.boxes.push(data);
	}
	findBox(id) {
		return this.boxes.find(box => box.id === id);
	}

}