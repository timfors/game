const path1 = __dirname + '/lib/public/js/gameScript.js';

const name1 = 'gameScript.js';


module.exports = {
	entry: path1,
	output: {
		path: __dirname + '/lib/public/js/bundled/',
		filename: name1
	},
	watch: true
}