import SmileBox from './gameBoxes/smileBox.js';
import QuestionBox from './gameBoxes/questionBox.js';
import MathBox from './gameBoxes/mathBox.js';
import BoxRepository from './boxRepository/boxRepos.js';


const repository = new BoxRepository();

function boxCreate(num, x, y) {
	let newBox;
	switch (num) {
		case 0: 
			newBox = new SmileBox(x, y);
			repository.addBox(box);
			return box;
		case 1:
			newBox = new QuestionBox(x, y);
			repository.addBox(box);
			return box;
		case 2: 
			newBox = new MathBox(x, y);
			repository.addBox(box);
			return box;
		case 3: 
			repository.addBox("empty");
			return;
	}
}
