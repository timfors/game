import SmileBox from './gameBoxes/smileBox.js';
import QuestionBox from './gameBoxes/questionBox.js';
import MathBox from './gameBoxes/mathBox.js';
import EmptyBox from './gameBoxes/emptyBox.js'
import BoxRepository from './boxRepository/boxRepos.js';


const boxRepository = new BoxRepository();

export default function boxCreate(num, x, y) {
	let newBox;
	switch (num) {
		case 0: 
			newBox = new SmileBox(x, y);
			boxRepository.addBox(newBox);
			return newBox;
		case 1:
			newBox = new QuestionBox(x, y);
			boxRepository.addBox(newBox);
			return newBox;
		case 2: 
			newBox = new MathBox(x, y);
			boxRepository.addBox(newBox);
			return newBox;
		case 3: 
			newBox = new EmptyBox(x, y);
			boxRepository.addBox(newBox);
			return;
	}
}

export { boxRepository };