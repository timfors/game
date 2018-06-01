import SmileBox from './smileBox.js';
import QuestionBox from './questionBox.js';
import MathBox from './mathBox.js';
import EmptyBox from './emptyBox.js';

export default function boxCreate(num) {
	let newBox;
	switch (num) {
		case 0: 
			newBox = new SmileBox();
			break;
		case 1:
			newBox = new QuestionBox();
			break;
		case 2: 
			newBox = new MathBox();
			break;
		case 3: 
			newBox = new EmptyBox();
			break;
	}
	return newBox;
}

